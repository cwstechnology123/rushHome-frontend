import millify from "millify";
import Image from "next/image";
import { useMemo, useState } from "react";
import OverlayView from "./marker/OverlayView";
import PopupView from "./popups/PopupView";

export default function CustomSingleMarker({ hotel, map, highlight }) {
    const [show, setShow] = useState(false);
    const price = useMemo(() => {
        return `$ ${millify(hotel.price)}`;
    }, [hotel]);
    const contentPopup = (hotel) =>{
        return (
            <div className="popup-bubble d-flex shadow bg-light text-white">
                <Image src={hotel.coverPhoto.url} alt={`property for ${hotel.title}`} width={100} height={100}/>
                <div className="grow p-2">
                    <span className="font-weight-bold">
                        {hotel.id && (
                        <a
                            href={`/property/${hotel.id}`}
                            className="text-info"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {hotel.title}
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
            position={hotel.geography}
            map={map}
            zIndex={highlight? 99 : 0}
        >
            <div key={`marker-button-${hotel.id}`} className={`price-tag ${highlight===hotel.id && "font-weight-bold p-2"}`} onClick={()=>setShow(!show)} >{price}</div>
        </OverlayView>
        {show && <PopupView
            position={hotel.geography}
            map={map}
            zIndex={109}
        >{contentPopup(hotel)}</PopupView>}
        </>
        
    )
}