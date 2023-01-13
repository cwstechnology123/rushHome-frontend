import { memo, useEffect, useRef, useState } from "react";
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Map from "../gmap/Map";
import { filterHomesByBounds } from "../../utils/mapUtils";
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
    center, setCenter,
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
    useEffect(() => {
        setFilterList(filterHomesByBounds(bounds, propertyList, poly.current));
    }, [bounds, propertyList, haspoly])

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
            zoomControl: (deviceType==='mobile')? false : false, 
            scrollwheel: false, 
            disableDoubleClickZoom: false,
            draggableCursor: 'crosshair'
        });
    }
    const enableMapOption = (map) =>{
        // google.maps.event.clearInstanceListeners(map);
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
        options: { radius: 75, maxZoom: 20 }
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
                onMapIdle={onMapIdle}
                draw={draw}
                setMapDraw={setMapDraw}
                fullscreenControl={false}
                streetViewControl={true}
                mapTypeControl={true}
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
        {haspoly && (<button type="button" className="btn_block btn-danger btn-sm" style={{position: 'absolute', top: '2%', left: '2%', zIndex: 9}} onClick={clearMapDraw}>Clear</button>)}
        </>
    )
}

export default memo(BuyMap);