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
      postalCode,
      city,
      country,
      listPictureURL,
      listPicture2URL,
      listPicture3URL,
      garageSpaces,
      fullStreetAddress,
      totalGarageAndParkingSpaces
    },
  }) => {
    // const [srcimg, setSrcimg] = useState(listPictureURL.replace(/^http:\/\//i, 'https://'));
    const src = listPictureURL? listPictureURL.replace(/^http:\/\//i, 'https://') : defaultProperty.src;
    return (
        <Link href={`/property/${slug}`}>
            <div className="property-card style3">
                <div className="property-img">
                    <img key={`image_${id}`} src={src} alt="Image" />
                    <span className="property-status">Exclusive</span>
                </div>
                <div className="property-info">
                    <div className="property-status-wrap">
                    <p className="property-price">{Number(listPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0 })}</p>
                    </div>
                    <h3 className="text-dark" style={{whiteSpace: 'pre-wrap'}}>{fullStreetAddress ? `${fullStreetAddress}\n${county}, ${country}, ${city} ${postalCode}`: ucfirst(county)}</h3>
                    <ul className="property-metainfo list-style">
                        <li key={`bed${id}`}><i className="flaticon-double-bed" />{bedroomsTotal? bedroomsTotal : '-'} Br</li>
                        <li key={`bath${id}`}><i className="flaticon-bath-tub" />{bathroomsTotal? bathroomsTotal : '-'} Ba</li>
                        <li key={`square${id}`}><i className="flaticon-square" />{areaTotal? Number(areaTotal).toLocaleString('en-US') : '-'} Sq.Ft</li>
                        <li key={`home${id}`}><i className="flaticon-home" />{totalGarageAndParkingSpaces? totalGarageAndParkingSpaces : '-'} Gr</li>
                    </ul>
                </div>
            </div>
        </Link>
    )
}
export default PropertyCard