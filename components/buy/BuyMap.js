import { memo, useEffect, useRef, useState } from "react";
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Map from "../gmap/Map";
import { filterHomesByPolygon } from "../../utils/mapUtils";
import useSupercluster from "use-supercluster";
import MultiMarker from "../gmap/MultiMarker";
import ClusterMarker from "../gmap/ClusterMarkerr";
import SingleMarker from "../gmap/CustomSingleMarker";

const render = (status) => {
    if (status === Status.FAILURE) {
      return <p>Map failed to load</p>;
    }
    return <p>Loading...</p>;
};

const BuyMap = ({ 
    zoom, setZoom,
    bounds, setBounds, 
    mapView, setMapView,
    center, setCenter,
    setIsIdle,
    propertyList,
    filterList,
    setFilterList,
    highlight,
    deviceType
}) => {
    const poly = useRef(null);
    const [haspoly, setHaspoly] = useState(false);
    const [draw, setDraw] = useState(false);
    const onMapIdle = (map) => {
        let boundary = map.getBounds();
        let obj = {
            nelat: boundary.getNorthEast().lat(),
            swlat: boundary.getSouthWest().lat(),
            nelng: boundary.getNorthEast().lng(),
            swlng: boundary.getSouthWest().lng(),
        }
        setBounds({
            ne: {
                lat: boundary.getNorthEast().lat(), //y2
                lng: boundary.getNorthEast().lng() //x2
            },
            nw: {
                lat: boundary.getNorthEast().lat(), //y2
                lng: boundary.getSouthWest().lng() //x1
            },
            se: {
                lat: boundary.getSouthWest().lat(), //y1
                lng: boundary.getNorthEast().lng() //x2
            },
            sw: {
                lat: boundary.getSouthWest().lat(), //y1
                lng: boundary.getSouthWest().lng() //x1
            },
        });
        if(JSON.stringify(mapView) === JSON.stringify(obj)){
            return;
        }else{
            setMapView(obj)
        }
        setZoom(map.getZoom());
        setCenter(map.getCenter().toJSON());
        setIsIdle(true)
    }
    useEffect(() => {
        if(haspoly){
            setFilterList(filterHomesByPolygon(propertyList, poly.current));
        }
    }, [propertyList, haspoly])

    const setMapDraw = (draw, map) => {
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
            setFilterList(propertyList)
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
        google.maps.event.addListenerOnce(map, 'mousedown', function(e) {
            poly.current = new google.maps.Polyline({map:map, clickable:false, draggable: false});
            var move=google.maps.event.addListener(map,'mousemove',function(e){
                poly.current?.getPath().push(e.latLng);
            });

            if(poly.current != null){
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
            zoomControl: (deviceType==='mobile')? false : false, 
            scrollwheel: false, 
            disableDoubleClickZoom: false,
            draggableCursor: 'crosshair'
        });
    }
    const enableMapOption = (map) =>{
        map.setOptions({
            draggable: true, 
            zoomControl: (deviceType==='mobile')? false : true, 
            scrollwheel: true, 
            disableDoubleClickZoom: true,
            draggableCursor:''
        });
    }
    
    const points = filterList.map(home => ({
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
    const { clusters, supercluster } = useSupercluster({
        points,
        bounds: bounds? [
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
        ] : [],
        zoom,
        options: {
            radius: 75,
            maxZoom: 20
        }
    });

    return (
        <>
        <Wrapper
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}
            render={render}
        >
            <Map
                center={center}
                zoom={zoom}
                minZoom={5}
                maxZoom={20}
                gestureHandling={(deviceType==='mobile')? 'cooperative' : 'greedy'}
                onMapIdle={onMapIdle}
                draw={draw}
                haspoly={haspoly}
                clearMapDraw={clearMapDraw}
                setMapDraw={setMapDraw}
                mapTypeControl={false}
                fullscreenControl={false}
                streetViewControl={false}
                zoomControl={(deviceType==='mobile')? false : true}
                clickableIcons={false}
            >
                {clusters.map(cluster => {
                    const [longitude, latitude] = cluster.geometry.coordinates;
                    const {
                        cluster: isCluster,
                        point_count: pointCount
                    } = cluster.properties;
                    if (isCluster) {
                        if(zoom>=18){
                            return (
                                <MultiMarker
                                    key={`multicluster-${cluster.id}`}
                                    position={{
                                        lat: latitude,
                                        lng: longitude
                                    }}
                                    highlight={highlight}
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
                                    highlight={highlight}
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
                })}
            </Map>
        </Wrapper>
        </>
    )
}

export default memo(BuyMap);