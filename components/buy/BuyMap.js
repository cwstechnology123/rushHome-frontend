import { memo, useEffect, useRef, useState } from "react"
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Map from "../gmap/Map";
import useSupercluster from "use-supercluster";
import SingleMarker from '../gmap/CustomSingleMarker';
import ClusterMarker from '../gmap/ClusterMarkerr';
import MultiMarker from '../gmap/MultiMarker';

const render = (status) => {
    if (status === Status.FAILURE) {
      return <p>Map failed to load</p>;
    }
    return <p>Loading...</p>;
};

const BuyMap = ({
    center, setCenter,
    bounds, setBounds,
    filterData, setFilterData,
    propertyList,
    highlight
}) => {
    //initialize
    const [zoom, setZoom] = useState(5);
    const [clicks, setClicks] = useState([]);
    const poly = useRef(null);
    const [haspoly, setHaspoly] = useState(false);
    const [draw, setDraw] = useState(false);
    const onMapClick = (e) => {
        setClicks([...clicks, e.latLng]);
    };
    const onMapIdle = (map) => {
        let bounds = map.getBounds();
        setBounds({
            ne: {
                lat: bounds.getNorthEast().lat(), //y2
                lng: bounds.getNorthEast().lng() //x2
            },
            nw: {
                lat: bounds.getNorthEast().lat(), //y2
                lng: bounds.getSouthWest().lng() //x1
            },
            se: {
                lat: bounds.getSouthWest().lat(), //y1
                lng: bounds.getNorthEast().lng() //x2
            },
            sw: {
                lat: bounds.getSouthWest().lat(), //y1
                lng: bounds.getSouthWest().lng() //x1
            },
        });
        setZoom(map.getZoom());
        setCenter(map.getCenter().toJSON());
    }

    //FILTER PROPERTY DATA BY BOUNDS
    useEffect(() => {
        // bounds: { ne, nw, se, sw }\
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
                    containsInPolygon(property.geography)
                ){
                    return property;
                }
            })   
        }else{
            filterProps = propertyList
        }
        
        setFilterData(filterProps);
        //console.log("Inside: ",filterProperties)
        //console.log(bounds)
    }, [bounds, haspoly])
    //MARKER CLUSTERING
    const points = filterData.map(home => ({
        type: "Feature",
        properties: { cluster: false, homeId: home.id, hotel: home },
        geometry: {
          type: "Point",
          coordinates: [
            parseFloat(home.geography.lng),
            parseFloat(home.geography.lat)
          ]
        }
    }));
    //console.log(points)
    const { clusters, supercluster } = useSupercluster({
        points,
        bounds: bounds? [
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
        ] : [],
        zoom,
        options: { radius: 75, maxZoom: 20 }
    });
    //console.log(clusters)
    const clusterSets = clusters.map(cluster => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const {
        cluster: isCluster,
        point_count: pointCount
        } = cluster.properties;
        if (isCluster) {
            if(zoom>=17){
                //console.log(clusterChilds[0].properties.hotel)
                return (
                    <MultiMarker
                        key={`multicluster-${cluster.id}`}
                        position={{
                            lat: latitude,
                            lng: longitude
                        }}
                        clusterId={cluster.id}
                        pointCount={pointCount}
                        hotels={supercluster.getChildren(cluster.id)}
                    >
                    </MultiMarker>
                )
            }else{
                return (
                    <ClusterMarker
                        key={`cluster-${cluster.id}`}
                        clusterId={cluster.id}
                        position={{
                            lat: latitude,
                            lng: longitude
                        }}
                        pointCount={pointCount}
                        pointsLength={points.length}
                    />
                );
            }
        }
        return (
            <SingleMarker key={`hotel-marker-${cluster.properties.homeId}`} hotel={cluster.properties.hotel} highlight={highlight}/>
        );
    });
    //MAP DRAW
    const setMapDraw = (draw, map) => {
        //console.log(draw)
        setDraw(draw);
        if(draw){
            drawFreeHand(map)
        }else{
            clearMapDraw();
            enableMapOption(map);
        }
    }
    const clearMapDraw = () => {
        if(poly.current != null){
            setHaspoly(false);
            poly.current.setMap(null);
            poly.current = null;
        }
    }
    const drawFreeHand = (map) =>
    {
        if(poly.current){
            clearMapDraw();
        }
        
        disableMapOption(map);
        //the polygon
        
        google.maps.event.addListenerOnce(map, 'mousedown', function(e) {
            poly.current = new google.maps.Polyline({map:map,clickable:false, draggable: false});

            var move=google.maps.event.addListener(map,'mousemove',function(e){
                //console.log(polyDraw)
                poly.current?.getPath().push(e.latLng);
            });

            if(poly.current != null){
                //mouseup-listener
                google.maps.event.addListenerOnce(map,'mouseup',function(e){
                    google.maps.event.removeListener(move);
                    var path=poly.current?.getPath();
                    poly.current.setMap(null);
                    poly.current = new google.maps.Polygon({map:map,path:path, fillOpacity: 0});
                    google.maps.event.clearListeners(map, 'mousedown');
                    
                    enableMapOption(map);
                    setHaspoly(true);
                    setDraw(false);
                });
            }
        });     
    }
    const disableMapOption = (map) => {
        map.setOptions({
            draggable: false, 
            zoomControl: false, 
            scrollwheel: false, 
            disableDoubleClickZoom: false,
            draggableCursor: 'crosshair'
        });
    }
    const enableMapOption = (map) =>{
        google.maps.event.clearInstanceListeners(map);
        map.setOptions({
            draggable: true, 
            zoomControl: true, 
            scrollwheel: true, 
            disableDoubleClickZoom: true,
            draggableCursor:''
        });
    }
    function containsInPolygon(point) {

        if(poly.current != null){
            var crossings = 0,
            path = poly.current.getPath();

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
    };

    return (
        <>
        <Wrapper
            apiKey={process.env.GOOGLE_API_TOKEN}
            render={render}
        >
            <Map
                center={center}
                zoom={zoom}
                minZoom={3}
                maxZoom={20}
                onMapIdle={onMapIdle}
                onMapClick={onMapClick}
                draw={draw}
                setMapDraw={setMapDraw}
                fullscreenControl={false}
                streetViewControl={true}
                mapTypeControl={true}
                zoomControl={true}
                clickableIcons={false}
            >
                {clusterSets}
            </Map>
        </Wrapper>
        {haspoly && (<button type="button" className="btn_block btn-danger btn-sm" style={{position: 'absolute', top: '2%', left: '2%', zIndex: 9}} onClick={clearMapDraw}>Clear Boundary</button>)}
        </>
    )
}

export default BuyMap;