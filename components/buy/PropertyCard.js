import Image from "next/image";
import Link from "next/link";
import defaultProperty from "../../public/default_home.jpg";
import ucfirst from "../../utils/ucfirst";

const PropertyCard = ({
    property: {
        id,
        slug,
        listPrice,
        listPictureURL,
        county,
        fullStreetAddress,
        bedroomsTotal,
        bathroomsTotal,
        areaTotal,
        garageSpaces
    }
  }) => {
    // const [srcimg, setSrcimg] = useState(listPictureURL.replace(/^http:\/\//i, 'https://'));
    const src = listPictureURL? listPictureURL.replace(/^http:\/\//i, 'https://') : defaultProperty.src;
    return (
        <Link href={`/property/${slug}`}>
            <div className="property-card style3">
                <div className="property-img">
                    {/* <img key={`image_${id}`} src={src} alt="Image" loading="lazy" /> */}
                    <Image 
                        key={`image_${id}`} 
                        src={src} alt="Image" 
                        width={300} 
                        height={250} 
                        sizes="320 640 750"
                        loading="lazy"
                    />
                    <span className="property-status">Exclusive</span>
                </div>
                <div className="property-info">
                    <span>Home at {county}</span>
                    <p>{fullStreetAddress?fullStreetAddress:ucfirst(county)}</p>
                    <div className="property-status-wrap">
                        
                        <p className="property-price">{Number(listPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0 })}</p>
                    </div>
                    
                    <ul className="property-metainfo list-style">
                        <li key={`bed${id}`}><i className="flaticon-double-bed" />{bedroomsTotal} Br</li>
                        <li key={`bath${id}`}><i className="flaticon-bath-tub" />{bathroomsTotal} Ba</li>
                        <li key={`square${id}`}><i className="flaticon-square" />{areaTotal} Sq.Ft</li>
                        <li key={`home${id}`}><i className="flaticon-home" />{garageSpaces} Gr</li>
                    </ul>
                </div>
            </div>
        </Link>
    )
}
export default PropertyCard