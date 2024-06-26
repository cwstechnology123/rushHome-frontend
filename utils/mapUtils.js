import { useEffect } from "react";
import { ConsoleView } from "react-device-detect";

export function filterHomesByBounds(bounds, propertyList, poly){
    let filterProps = {};
    if(bounds){
        filterProps = propertyList.filter(property => {
            let lat = parseFloat(property.geography.lat);
            let lng = parseFloat(property.geography.lng);
            if(
                ((lat > bounds.se.lat && lat > bounds.sw.lat) &&
                (lat < bounds.ne.lat && lat < bounds.nw.lat) &&
                (lng > bounds.nw.lng && lng > bounds.sw.lng) &&
                (lng < bounds.ne.lng && lng < bounds.se.lng) ) && 
                containsInPolygon(property.geography, poly)
            ){
                return property;
            }
        })   
    }else{
        filterProps = propertyList
    }
    return filterProps;
}

export function filterHomesByPolygon(propertyList, poly){
    let filterProps = [];

    for(let i=0; i<propertyList.length; i++){
        if(containsInPolygon(propertyList[i].geography, poly)){
            filterProps.push(propertyList[i])
        }
    }
    return filterProps;
}

export function hasInPolygon(point, poly){
    if(!!poly){
        let homeLocation = new google.maps.LatLng(point.lng, point.lat);
        // console.log("Poly",point)
        // console.log(google.maps.geometry.poly.containsLocation(homeLocation, poly))
        return google.maps.geometry.poly.containsLocation(homeLocation, poly)
    }else{
        return true;
    }
}

export function containsInPolygon(point, poly) {
    if(poly != null){
        var crossings = 0,
        path = poly.getPath();
        // for each edge
        for (var i=0; i < path.getLength(); i++) {
            var a = path.getAt(i),
                j = i + 1;
            if (j >= path.getLength()) {
                j = 0;
            }
            var b = path.getAt(j);
            if (rayCrossesSegment(point, a, b)) {
                crossings++;
            }
        }
        // odd number of crossings?
        return (crossings % 2 == 1);
    }else{
        return true;
    }

    function rayCrossesSegment(point, a, b) {
        var px = parseFloat(point.lng),
            py = parseFloat(point.lat),
            ax = a.lng(),
            ay = a.lat(),
            bx = b.lng(),
            by = b.lat();
        if (ay > by) {
            ax = b.lng();
            ay = b.lat();
            bx = a.lng();
            by = a.lat();
        }
        // alter longitude to cater for 180 degree crossings
        if (px < 0) { px += 360 };
        if (ax < 0) { ax += 360 };
        if (bx < 0) { bx += 360 };

        if (py == ay || py == by) py += 0.00000001;
        if ((py > by || py < ay) || (px > Math.max(ax, bx))) return false;
        if (px < Math.min(ax, bx)) return true;

        var red = (ax != bx) ? ((by - ay) / (bx - ax)) : Infinity;
        var blue = (ax != px) ? ((py - ay) / (px - ax)) : Infinity;
        return (blue >= red);

    }
}