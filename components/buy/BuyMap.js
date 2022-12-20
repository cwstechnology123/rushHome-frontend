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
    const setMapDraw = (draw, map) => {
        setDraw(draw);
        // if(draw){
        //     drawFreeHand(map)
        // }else{
        //     clearMapDraw();
        //     enableMapOption(map);
        // }
    }

    //FILTER PROPERTY DATA BY BOUNDS
    useEffect(() => {
        // bounds: { ne, nw, se, sw }\
        let filterProps = {};

        if(bounds){
            filterProps = filterData.filter(property => {
                let lat = parseFloat(property.geography.lat);
                let lng = parseFloat(property.geography.lng);
                if(
                    ((lat > bounds.se.lat && lat > bounds.sw.lat) &&
                    (lat < bounds.ne.lat && lat < bounds.nw.lat) &&
                    (lng > bounds.nw.lng && lng > bounds.sw.lng) &&
                    (lng < bounds.ne.lng && lng < bounds.se.lng) )
                    // && containsInPolygon(property.geography)
                ){
                    return property;
                }
            })   
        }else{
            filterProps = filterData
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
        {haspoly && (<button type="button" className="btn btn-danger btn-sm" style={{position: 'absolute', top: '2%', left: '2%', zIndex: 9}} onClick={clearMapDraw}>Clear Map Boundary</button>)}
        </>
    )
}

export default BuyMap;