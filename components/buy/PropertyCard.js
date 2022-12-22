import Image from "next/image";
import Link from "next/link";
import defaultProperty from "../../public/default_home.jpg";
import noImage from "../../public/no_picture_available.png";
import ucfirst from "../../utils/ucfirst";

const PropertyCard = ({
    property: {
        id,
        slug,
        listPrice,
        listPictureURL,
        county,
        city,
        postalCode,
        country,
        fullStreetAddress,
        bedroomsTotal,
        bathroomsTotal,
        areaTotal,
        garageSpaces,
        totalGarageAndParkingSpaces
    }
  }) => {
    // console.log(noImage)
    // const [srcimg, setSrcimg] = useState(listPictureURL.replace(/^http:\/\//i, 'https://'));
    const src = listPictureURL? listPictureURL.replace(/^http:\/\//i, 'https://') : noImage.src;
    return (
        <Link href={`/property/${slug}`}>
            <div className="property-card style3">
                <div className="property-img">
                    <Image 
                        key={`image_${id}`} 
                        src={src} alt="Image" 
                        width={300} 
                        height={200} 
                        loading="lazy"
                    />
                    <span className="property-status">Exclusive</span>
                </div>
                <div className="property-info">
                    <span>Home at {county}</span>
                    <p className="mb-0" style={{whiteSpace: 'pre-wrap'}}>{fullStreetAddress?`${fullStreetAddress}\n${country}, ${city} ${postalCode}`:ucfirst(county)}</p>
                    <div className="property-status-wrap">
                        <p className="property-price mb-0">{Number(listPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0 })}</p>
                    </div>
                    
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