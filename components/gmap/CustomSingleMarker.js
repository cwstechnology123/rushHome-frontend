import millify from "millify";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import OverlayView from "./marker/OverlayView";
import PopupView from "./popups/PopupView";

export default function CustomSingleMarker({ hotel, map, highlight }) {
    // console.log(hotel)
    const [show, setShow] = useState(false);
    const price = useMemo(() => {
        return `$ ${millify(hotel.listPrice)}`;
    }, [hotel]);
    const contentPopup = (hotel) =>{
        return (
            <div className="popup-bubble d-flex shadow bg-light text-white">
                <Image src={hotel.listPictureURL} alt={`property for ${hotel.slug}`} width={120} height={120} loading="lazy"/>
                <div className="grow p-2">
                    <span className="font-weight-bold">
                        {hotel.id && (
                        <Link
                            href={`/property/${hotel.slug}`}
                            className="text-dark"
                            target="_blank"
                            rel="noreferrer"
                            passHref={true}
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
                <button type="button" className="popup-close" onClick={()=>setShow(!show)}>X</button>
            </div>
        )
    }
    //
    return (
        <>
        <OverlayView
            position={{
                lat: parseFloat(hotel.geography.lat),
                lng: parseFloat(hotel.geography.lng)
            }}
            map={map}
            zIndex={highlight? 99 : 0}
        >
            <div key={`marker-button-${hotel.id}`} className={`price-tag ${highlight?.id===hotel.id && "active"}`} onClick={()=>setShow(!show)} >{price}</div>
        </OverlayView>
        {show && <PopupView
            position={{
                lat: parseFloat(hotel.geography.lat),
                lng: parseFloat(hotel.geography.lng)
            }}
            map={map}
            zIndex={109}
        >{contentPopup(hotel)}</PopupView>}
        </>
        
    )
}