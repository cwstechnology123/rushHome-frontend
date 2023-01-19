import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import defaultProperty from "../../public/default_home.jpg";
import noImage from "../../public/no_picture_available.png";
import ucfirst from "../../utils/ucfirst";
import stateNames from "../../utils/states_hash.json"

const PropertyCard = ({
    property: {
      id,
      listPrice,
      bedroomsTotal,
      bathroomsTotalInteger,
      areaTotal,
      slug,
      county,
      postalCode,
      city,
      stateOrProvince,
      listPictureURL,
      garageSpaces,
      fullStreetAddress,
      tag,
      mlsStatus
    },
  }) => {
    const src = listPictureURL? listPictureURL.replace(/^http:\/\//i, 'https://') : noImage.src;
    return (
        <Link href={`/property/${slug}`} scroll={true}>
            <div className="property-card style3">
                <div className="property-img">
                    <Image key={`image_${id}`} src={src} alt="Image" width={250} height={200} loading={'lazy'}/>
                    {tag && (<span className="property-status">{tag}</span>)}
                    {mlsStatus && mlsStatus == 'COMING SOON' ? <span className="property-status">{mlsStatus}</span> : ''}
                </div>
                <div className="property-info">
                    <div className="property-status-wrap">
                    <p className="property-price">{Number(listPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0 })}</p>
                    </div>
                    <h3 className="text-dark text-uppercase" style={{whiteSpace: 'pre-wrap'}}>{fullStreetAddress ? `${fullStreetAddress}\n${city}, ${stateNames[stateOrProvince]} ${postalCode}`: ucfirst(county)}</h3>
                    <ul className="property-metainfo list-style">
                        <li key={`bed${id}`}><i className="flaticon-double-bed" />{bedroomsTotal? bedroomsTotal : '-'} Br</li>
                        <li key={`bath${id}`}><i className="flaticon-bath-tub" />{bathroomsTotalInteger? bathroomsTotalInteger : '-'} Ba</li>
                        <li key={`square${id}`}><i className="flaticon-square" />{areaTotal? Number(areaTotal).toLocaleString('en-US') : '-'} Sq.Ft</li>
                        <li key={`home${id}`}><i className="flaticon-home" />{garageSpaces? Number(garageSpaces).toLocaleString('en-US') : '-'} Gr</li>
                    </ul>
                </div>
            </div>
        </Link>
    )
}
export default PropertyCard