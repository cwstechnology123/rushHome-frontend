import millify from "millify";
import OverlayView from "./marker/OverlayView";


export default function ClusterMarker({
    position,
    map,
    clusterId,
    pointCount,
    pointsLength,
    highlight
}) {
    return (
        <>
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
                        width: `${Math.round(30 + (pointCount / pointsLength) * 20)}px`,
                        height: `${Math.round(30 + (pointCount / pointsLength) * 20)}px`
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
            {highlight && (
                <OverlayView
                    position={{
                        lat: parseFloat(highlight.position.lat),
                        lng: parseFloat(highlight.position.lng)
                    }}
                    map={map}
                    zIndex={highlight? 99 : 0}
                >
                    <div key={`marker-button-${highlight.id}`} className={`price-tag active`} >${millify(highlight.price)}</div>
                </OverlayView>
            )}
            
        </>
    )
}