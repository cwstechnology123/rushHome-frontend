import React, { useEffect, useRef, useState } from "react"
import useDeepCompareEffectForMaps from "./useDeepCompareMemorize";
import mapStyle from './mapStyle';

export default function OfficeLocationMap({
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

    return (
        <>
            <div style={{width: 100+'%', height: 100+'%'}} id="map" ref={mapRef}/>
            {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { map });
            }
            })}
            <div className="card" style={{position: 'absolute', top: 0, left: '5%', borderRadius: '0px 0px 15px 15px;'}}>
                <div className="card-body h-50">
                    <h6 className="card-title">Visit our office at</h6>
                    <small style={{whiteSpace: 'pre-wrap'}}>{address}</small>
                    
                </div>
            </div>
        </>
    )
}