import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import defaultProperty from "../../public/default_home.jpg";
import ucfirst from "../../utils/ucfirst";

const PropertyCard = ({
    property: {
      id,
      listingAgreementType,
      listPrice,
      bedroomsTotal,
      bathroomsTotal,
      areaTotal,
      slug,
      county,
      listPictureURL,
      listPicture2URL,
      listPicture3URL,
      garageSpaces,
    },
  }) => {
    const [srcimg, setSrcimg] = useState(listPictureURL);
    return (
        <div className="property-card style3">
            <div className="property-img">
                {/* <img key={`image_${id}`} src={listPictureURL} alt="Image" /> */}
                <picture key={`picture_${id}`}>
                    <source
                    media = "(min-width:860px)"
                    data-srcset={listPictureURL} />
                    <source 
                    media = "(min-width:640px)"
                    data-srcset = {listPictureURL} />
                    <source
                    media = "(max-width:420px)"
                    data-srcset = {listPictureURL} />
                    <img className="lazyload myImg blur-up content-image" src={srcimg} onError={()=>setSrcimg(defaultProperty.src)} data-src={listPictureURL} alt="Image" />
                </picture>
                <span className="property-status">{listingAgreementType.split(' ')[0]}</span>
            </div>
            <div className="property-info">
                <div className="property-status-wrap">
                <p className="property-price">{Number(listPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                </div>
                <h3><Link href={`/property/${slug}`}>Home in {ucfirst(county)}</Link></h3>
                <ul className="property-metainfo list-style">
                    <li key={`bed${id}`}><i className="flaticon-double-bed" />{bedroomsTotal} Br</li>
                    <li key={`bath${id}`}><i className="flaticon-bath-tub" />{bathroomsTotal} Ba</li>
                    <li key={`square${id}`}><i className="flaticon-square" />{areaTotal} Sq.Ft</li>
                    <li key={`home${id}`}><i className="flaticon-home" />{garageSpaces} Gr</li>
                </ul>
            </div>
        </div>
    )
}
export default PropertyCard