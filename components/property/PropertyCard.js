import Image from "next/image";
import Link from "next/link";
import ucfirst from "../../utils/ucfirst";

const PropertyCard = ({
    property: {
      id,
      listPrice,
      bedroomsTotal,
      bathroomsTotal,
      areaTotal,
      slug,
      county,
      listPictureURL,
      garageSpaces,
    },
  }) => 
    (
        <div className="property-card style3">
            <div className="property-img">
                <img src={listPictureURL} alt="Image" />
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

export default PropertyCard