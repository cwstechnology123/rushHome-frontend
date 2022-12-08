import OverlayView from "./marker/OverlayView";


export default function ClusterMarker({
    position,
    map,
    clusterId,
    pointCount,
    pointsLength,
    // onClusterClick
}) {

    return (
        <OverlayView
            position={position}
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