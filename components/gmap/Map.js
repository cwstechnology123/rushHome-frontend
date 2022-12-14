import React, { useEffect, useMemo, useRef, useState } from "react"
import useDeepCompareEffectForMaps from "./useDeepCompareMemorize";
import mapStyle from './mapStyle';

export default function Map({
    onMapClick,
    onMapIdle,
    onMapZoom,
    onMapBoundChanged,
    draw,
    setMapDraw,
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
                mapTypeIds: ["satellite", "roadmap", "terrain"],
                // mapTypeId: google.maps.MapTypeId.ROADMAP,
            }
          });
        }
    }, [map, options]);

    useEffect(() => {
        if (map) {
          ["click", "idle", "zoom_changed"].forEach((eventName) =>
            google.maps.event.clearListeners(map, eventName)
          );
          if (onMapClick) {
            map.addListener("click", onMapClick);
          }
      
          if (onMapIdle) {
            map.addListener("idle", () => onMapIdle(map));
          }
          if(onMapZoom){
            map.addListener("zoom_changed", onMapZoom);
          }
        }
    }, [map, onMapClick, onMapIdle]);

    return (
        <>
            <div style={{width: 100+'%', height: 100+'%', overflow: 'hidden'}}>
              {draw?
                  (
                      <div className='justify-content-center align-items-center text-center p-2 bg-dark w-100' style={{position: 'absolute', zIndex: 9}}>
                          <span className='text-white mr-4'>Click and Draw on the map</span> <button type="button" className='btn_block btn-danger btn-sm' onClick={()=>setMapDraw(false, map)}>Cancel</button>
                      </div> 
                  ) 
                  : 
                  (
                      <button type="button" className="btn_block btn-primary btn-sm" style={{position: 'absolute', top: '2%', right: '50%', zIndex: 9, transform: 'translateX(50%)'}} onClick={()=>setMapDraw(true, map)}>Draw</button>
                  )
              }
              <div style={{width: 100+'%', height: 100+'%'}} id="map" ref={mapRef}/>
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                  //console.log("element set")
                    return React.cloneElement(child, { map });
                }
              })}
            </div>
            
        </>
    )
}