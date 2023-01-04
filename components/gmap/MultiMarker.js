import Image from 'next/image';
import { useState } from "react";
import PopupView from "./popups/PopupView";
import OverlayView from "./marker/OverlayView";
import Link from 'next/link';
import Marker from './Marker';

export default function MultiMarker({
    clusterId,
    position,
    pointCount,
    hotels,
    map
}) {
    // console.log("MultiMaker:",hotels)
    const [show, setShow] = useState(false);
    const contentPopup = (hotels) =>{
        return (
            <div className="popup-bubble d-flex shadow bg-light text-white">
                <div className="card border-0">
                    <div className="card-header" style={{backgroundColor: '#000'}}>
                        <h4 className='card-title text-white'>{`${hotels.length} Homes For Sale`}
                            <button type="button" className="btn-multiinfo close pull-right" onClick={()=>setShow(!show)}>X</button>
                        </h4>
                        
                    </div>
                    <div className='card-body p-0' style={{maxHeight:'30vh', overflowY: 'auto'}}>
                        {hotels.map(({properties}) => {
                            let hotel = properties.hotel;
                            return (
                            <div key={`marker_${hotel.id}`} className='d-flex mb-2 border'>
                                <Image src={hotel.listPictureURL} alt={`property for ${hotel.slug}`}  width={120} height={120} loading="lazy"/>
                                <div className="grow p-2">
                                    <span className="font-weight-bold">
                                        {hotel.id && (
                                        <Link
                                            href={`/property/${hotel.slug}`}
                                            className="text-dark"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <h6 style={{fontSize:'1.2em'}}>{hotel.fullStreetAddress}</h6>
                                            <h6 className="small" style={{fontWeight: '400 !important'}}>
                                                {Number(hotel.listPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })}
                                            </h6>
                                            <span>
                                                {`${hotel.bedroomsTotal || '-'} BD | ${hotel.bathroomsTotalInteger || '-'} BA | ${hotel.areaTotal? Number(hotel.areaTotal).toLocaleString('en-US') : '-'} SF `}
                                            </span>
                                        </Link>
                                        )}
                                    </span>
                                    <p className="small mb-0 text-dark">{}</p>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <OverlayView
                key={`multicluster-overview-${clusterId}`}
                position={{
                    lat: parseFloat(position.lat),
                    lng: parseFloat(position.lng)
                }}
                map={map}
                zIndex={show? 99 : 0}
            >
                <div key={`multicluster-button-${clusterId}`} className={`price-tag ${show && "font-weight-bold p-2"}`} onClick={()=>setShow(!show)} >{pointCount} Listing</div>
            </OverlayView>
            {show && <PopupView
                key={`multicluster-popup-${clusterId}`}
                position={{
                    lat: parseFloat(position.lat),
                    lng: parseFloat(position.lng)
                }}
                map={map}
                zIndex={109}
            >{contentPopup(hotels)}</PopupView>}
        </>
    )
}