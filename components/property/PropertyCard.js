import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({index}) {

    return (
        <div key={"card-"+index} className="property-card style3">
            <div className="property-img">
                <Image width={100} height={100} layout="responsive" src="/assets/img/property/property-26.jpg" alt="Image" />
                <span className="property-status">Exclusive</span>
                {/* <span class="property-condo">New</span> */}
            </div>
            <div className="property-info">
                <div className="property-status-wrap">
                <p className="property-price">$8,587.00</p>
                </div>
                <h3><Link href="listing-details.html">Home in Delaware</Link></h3>
                <ul className="property-metainfo list-style">
                    <li key={"bed"+index}><i className="flaticon-double-bed" />3 Br</li>
                    <li key={"bath"+index}><i className="flaticon-bath-tub" />3 Ba</li>
                    <li key={"square"+index}><i className="flaticon-square" />2300 Sq.Ft</li>
                    <li key={"home"+index}><i className="flaticon-home" />3 Gr</li>
                </ul>
            </div>
        </div>
    )
}