import millify from "millify";
import Image from "next/image";
import { useMemo, useState } from "react";
import OverlayView from "./marker/OverlayView";
import PopupView from "./popups/PopupView";

export default function CustomSingleMarker({ hotel, map, highlight }) {
    const [show, setShow] = useState(false);
    const price = useMemo(() => {
        return `$ ${millify(hotel.listPrice)}`;
    }, [hotel]);
    const contentPopup = (hotel) =>{
        return (
            <div className="popup-bubble d-flex shadow bg-light text-white">
                <Image src={hotel.listPictureURL} alt={`property for ${hotel.slug}`} width={100} height={100}/>
                <div className="grow p-2">
                    <span className="font-weight-bold">
                        {hotel.id && (
                        <a
                            href={`/property/${hotel.id}`}
                            className="text-info"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {hotel.fullStreetAddress}<br/>
                            <strong>$ {hotel.listPrice}</strong>
                        </a>
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
            <div key={`marker-button-${hotel.id}`} className={`price-tag ${highlight===hotel.id && "font-weight-bold p-2"}`} onClick={()=>setShow(!show)} >{price}</div>
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