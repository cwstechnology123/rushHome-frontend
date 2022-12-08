import React, { useEffect, useMemo, useRef, useState } from "react"
import useDeepCompareEffectForMaps from "./useDeepCompareMemorize";
import mapStyle from './mapStyle';

export default function LocationMap({
    address,
    children,
    style,
    ...options
}) {
    const mapRef = useRef(null);
    const [map, setMap] = useState();

    useEffect(() => {
        if (mapRef.current && !map) {
            setMap(new window.google.maps.Map(mapRef.current, {
              style: mapStyle
            }));
        }
    }, [mapRef, map]);

    useDeepCompareEffectForMaps(() => {
        if (map) {
          map.setOptions({
            ...options,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                mapTypeIds: ["roadmap", "terrain", "satellite"],
            }
          });
        }
    }, [map, options]);

    // useEffect(() => {
    //     if (map) {
    //       ["click", "idle", "change"].forEach((eventName) =>
    //         google.maps.event.clearListeners(map, eventName)
    //       );
    //       if (onMapClick) {
    //         map.addListener("click", onMapClick);
    //       }
      
    //       if (onMapIdle) {
    //         map.addListener("idle", () => onMapIdle(map));
    //       }
    //     }
    // }, [map, onMapClick, onMapIdle]);

    return (
        <>
            <div style={{width: 100+'%', height: 100+'%', borderRadius: '10px'}} id="map" ref={mapRef}/>
            {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                //console.log("element set")
                return React.cloneElement(child, { map });
            }
            })}
            <div className="card" style={{position: 'absolute', bottom: '20px', left: '20px', borderRadius: '15px'}}>
                <div className="card-body h-50">
                    <h6 className="card-title">Location</h6>
                    <small>{address}</small>
                    
                </div>
            </div>
        </>
    )
}