import OverlayView from "./marker/OverlayView";


export default function ClusterMarker({
    position,
    map,
    clusterId,
    pointCount,
    pointsLength,
    highlight,
    hotels
}) {
    // const hasHotel = hotels.map(({properties}) => {
    //     let hotels = properties.hotel;
    //     return hotels.filter(hotel => (hotel.id === highlight));
    //     // console.log(hotel)
    //     // if(hotel.id === highlight){
    //     //     return hotel;
    //     // }
    //     // return null
    // })
    // console.log(hasHotel)
    // console.log("ClusterMaker:",hotels)
    return (
        <OverlayView
            position={{
                lat: parseFloat(position.lat),
                lng: parseFloat(position.lng)
            }}
            map={map}
            zIndex={0}
        >
            <div
                key={`cluster-button-${clusterId}`}
                className="cluster-marker"
                style={{
                    width: `${10 + (pointCount / pointsLength) * 20}px`,
                    height: `${10 + (pointCount / pointsLength) * 20}px`
                }}
                // onClick={() => onClusterClick(clusterId, map, position)}
                // onClick={() => {
                //     const expansionZoom = Math.min(
                //         supercluster.getClusterExpansionZoom(cluster.id),
                //         20
                //     );
                //     map.setZoom(expansionZoom);
                //     map.panTo({ lat: latitude, lng: longitude });
                // }}
            >
                {pointCount}
            </div>
        </OverlayView>
    )
}