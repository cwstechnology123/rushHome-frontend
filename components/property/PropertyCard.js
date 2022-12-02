import Image from "next/image";
import Link from "next/link";

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
    },
  }) => 
    (
        <div className="property-card style3">
            <div className="property-img">
                <Image width={100} height={100} layout="responsive" src="/assets/img/property/property-26.jpg" alt="Image" />
                <span className="property-status">Exclusive</span>
                {/* <span class="property-condo">New</span> */}
            </div>
            <div className="property-info">
                <div className="property-status-wrap">
                <p className="property-price">{Number(listPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                </div>
                <h3><Link href={`/property/${slug}`}>Home in {county}</Link></h3>
                <ul className="property-metainfo list-style">
                    <li key={`bed${id}`}><i className="flaticon-double-bed" />{bedroomsTotal} Br</li>
                    <li key={`bath${id}`}><i className="flaticon-bath-tub" />{bathroomsTotal} Ba</li>
                    <li key={`square${id}`}><i className="flaticon-square" />{areaTotal} Sq.Ft</li>
                    <li key={`home${id}`}><i className="flaticon-home" />3 Gr</li>
                </ul>
            </div>
        </div>
    )

export default PropertyCard