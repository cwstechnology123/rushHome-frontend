import React, { useEffect, useRef, useState } from "react"
import useDeepCompareEffectForMaps from "./useDeepCompareMemorize";
import mapStyle from './mapStyle';

export default function OfficeLocationMap({
    address,
    timing,
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
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_RIGHT,
                mapTypeIds: ["roadmap", "terrain", "satellite"],
            }
          });
        }
    }, [map, options]);

    return (
        <>
            <div style={{width: 100+'%', height: 100+'%'}} id="map" ref={mapRef}/>
            {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { map });
            }
            })}
            <div className="card" style={{position: 'absolute', top: 0, left: '5%', borderRadius: '0px 0px 15px 15px'}}>
                <div className="card-body h-50">
                    <h6 className="card-title">Office Location</h6>
                    <small style={{whiteSpace: 'pre-wrap'}}>{address}</small>
                    <h6 className="card-title mt-3">Visit our office at</h6>
                    <small style={{whiteSpace: 'pre-wrap'}}>{timing}</small>
                    
                </div>
            </div>
        </>
    )
}