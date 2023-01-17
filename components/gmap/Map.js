import React, { useEffect, useMemo, useRef, useState } from "react"
import { FaGlobe, FaMapMarkedAlt } from "react-icons/fa";
import useDeepCompareEffectForMaps from "./useDeepCompareMemorize";
import mapStyle from './mapStyle';

export default function Map({
    onMapIdle,
    draw,
    setMapDraw,
    haspoly,
    clearMapDraw,
    children,
    style,
    ...options
}) {
    const mapRef = useRef(null);
    const drawRef = useRef();
    const drawCancelRef = useRef();
    const polyCancelRef = useRef();
    const mapTypeRef = useRef();
    const [map, setMap] = useState();
    const [mapType, setMapType] = useState("roadmap");
    const handleMapType = ()=>{
      if(mapType==='roadmap'){
        setMapType('hybrid')
        map.setMapTypeId('hybrid');
      }else{
        setMapType('roadmap')
        map.setMapTypeId('roadmap');
      }
    }
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
            mapTypeId: mapType,
          });
        }
    }, [map, options]);
    useEffect(() => {
        if (map) {
          ["idle"].forEach((eventName) =>
            google.maps.event.clearListeners(map, eventName)
          );
          if (onMapIdle) {
            map.addListener("idle", () => onMapIdle(map));
          }
        }
    }, [map, onMapIdle]);

    return (
        <>
        <div style={{width: 100+'%', height: 100+'%', overflow: 'hidden'}}>
          <div className='justify-content-center align-items-center text-center p-2 bg-dark w-100' style= {{position: 'absolute', zIndex: 9, display: (draw)? 'block' : 'none'}} ref={drawCancelRef}>
              <span className='text-white mr-4'>Click and Draw on the map</span> <button type="button" className='btn_block btn-danger btn-sm' onClick={()=>setMapDraw(false, map)}>Cancel</button>
          </div> 
          <div id="typeId" ref={mapTypeRef} style={{position: 'absolute', zIndex: 9, right: 10, top: '60%', display: (draw)? 'none' : 'block'}}><button type="button" className="btn_map" onClick={handleMapType} >{mapType==='roadmap'? <FaMapMarkedAlt/> : <FaGlobe/>}</button></div>
          <div id="drawId" ref={drawRef} style={{position: 'absolute', zIndex: 9, right: 10, top: '50%'}}><button type="button" className="btn_map" style={{display: (draw)? 'none' : 'block'}} onClick={()=>setMapDraw(true, map)}>Draw</button></div>
          <div id="polyId" ref={polyCancelRef} style={{position: 'absolute', zIndex: 9, right: 10, top: '40%'}}><button type="button" className="btn_map" style={{display: (haspoly)? 'block' : 'none'}} onClick={clearMapDraw}>Clear</button></div>
          <div style={{width: 100+'%', height: 100+'%'}} id="map" ref={mapRef}/>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                  return React.cloneElement(child, { map });
              }
            })}
          </div>
        </>
    )
}