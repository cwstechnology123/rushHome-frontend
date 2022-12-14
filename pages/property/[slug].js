import { useSession } from "next-auth/react";
import { HiOutlineHomeModern, HiOutlineStar } from "react-icons/hi2";
import { GiCrane, GiBathtub, GiHomeGarage } from "react-icons/gi";
import { MdSquareFoot } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import PropertyHeader from "../../components/property/PropertyHeader";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import PropertyImages from "../../components/property/PropertyImages";
import { FaBath } from "react-icons/fa";
import VirtualTour from "../../components/property/VirtualTour";
import PropertyMap from "../../components/property/PropertyMap";
import Mortgage from "../../components/property/Mortgage";
import NonAccount from "./NonAccount";
import PropertyAgentCard from "../../components/property/PropertyAgentCard";
import PropertyAmenities from "../../components/property/PropertyAmenities";

const PropertyDetails = ({
    propertyDetails: {
        id,
        listingId,
        listingKey,
        propertyType,
        yearBuilt,
        heatingYN,
        listPrice,
        fullStreetAddress,
        description,
        bedroomsTotal,
        fireplacesTotal,
        bathroomsTotalInteger,
        roomsTotal,
        garageSpaces,
        totalGarageAndParkingSpaces,
        areaTotal,
        county,
        city,
        standardStatus,
        listPictureURL,
        listPicture2URL,
        listPicture3URL,
        pricePerSquareFoot,
        virtualTourURLUnbranded,
        geography,
        unparsedAddress,
        amenities,
        agent
    }
}) => {
    const { data: session } = useSession();
    return (
        <>
        <section className="style3 ptb-50 product_box">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-8 col-xl-8 col-lg-8">
                        <PropertyHeader 
                            price={listPrice}
                            area={pricePerSquareFoot}
                            address={{
                                fullAddress: fullStreetAddress,
                                county: county,
                                city: city
                            }}
                        />
                        <PropertyImages 
                            defaulImages={{
                                picture3URL: listPicture3URL,
                                picture2URL: listPicture2URL,
                                pictureURL: listPictureURL
                            }}
                            listingKey={listingKey}
                        />
                        <div className="descriptions_box heading_line mt-4">
                            <div className="col-xl-12 col-lg-12">
                            <div className="section-title style1 text-left mb-40">
                                <h2>Descriptions</h2>
                                <hr />
                                <p>{description}</p>
                            </div>
                            </div>
                        </div>
                        <div className="factfeature_box heading_line">
                            <div className="col-xl-12 col-lg-12">
                                <div className="section-title style1 text-left mb-40">
                                    <h2>Facts &amp; Features</h2>
                                    <hr />
                                    <div className="fact_iconbox">
                                        <ul>
                                            <li>
                                                <span><HiOutlineHomeModern/></span>
                                                <p>Type</p>
                                                <h3>Single</h3>
                                            </li>
                                            {yearBuilt!="" && (
                                                <li>
                                                <span><GiCrane/></span>
                                                <p>Build Year</p>
                                                <h3>{yearBuilt}</h3>
                                                </li>
                                            )}
                                            {heatingYN==="Y" && (
                                                <li>
                                                <span><FaHotTub/></span>
                                                <p>Heating</p>
                                                <h3>Radiant</h3>
                                                </li>
                                            )}
                                            {areaTotal!="" && (
                                                <li>
                                                <span><MdSquareFoot/></span>
                                                <p>SQFT</p>
                                                <h3>{parseFloat(areaTotal).toFixed(1)}</h3>
                                                </li>
                                            )}
                                            {bedroomsTotal!="" && (
                                                <li>
                                                <span><IoBedOutline/></span>
                                                <p>Bedroom</p>
                                                <h3>{bedroomsTotal}</h3>
                                                </li>
                                            )}
                                            {bathroomsTotalInteger && (
                                                <li>
                                                <span><FaBath/></span>
                                                <p>Bathroom</p>
                                                <h3>{bathroomsTotalInteger}</h3>
                                                </li>
                                            )}
                                            {totalGarageAndParkingSpaces!="" && (
                                                <li>
                                                <span><GiHomeGarage/></span>
                                                <p>Garage</p>
                                                <h3>{totalGarageAndParkingSpaces}</h3>
                                                </li>
                                            )}
                                            {standardStatus!="" && (
                                                <li>
                                                <span><HiOutlineStar/></span>
                                                <p>Status</p>
                                                <h3>{standardStatus}</h3>
                                                </li>
                                            )}
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="factfeature_box heading_line">
                            <div className="col-xl-12 col-lg-12">
                            <div className="section-title style1 text-left mb-40">
                                <h2>Additional Details</h2>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <table className='table table-borderless table-line'>
                                            <tbody>
                                                <tr>
                                                    <th>Property ID:</th>
                                                    <td className="text-left">{listingId}</td>
                                                </tr>
                                                <tr>
                                                    <th>Property Type:</th>
                                                    <td className="text-left">{propertyType}</td>
                                                </tr>
                                                <tr>
                                                    <th>Rooms:</th>
                                                    <td className="text-left">{roomsTotal}</td>
                                                </tr>
                                                <tr>
                                                    <th>Size:</th>
                                                    <td className="text-left">{areaTotal} SqFt</td>
                                                </tr>
                                                <tr>
                                                    <th>Garage:</th>
                                                    <td className="text-left">{totalGarageAndParkingSpaces}</td>
                                                </tr>
                                                <tr>
                                                    <th>Garage Size:</th>
                                                    <td className="text-left">{garageSpaces} SqFt</td>
                                                </tr>
                                                <tr>
                                                    <th>Year Build:</th>
                                                    <td className="text-left">{yearBuilt}</td>
                                                </tr>
                                            </tbody>
                                            
                                        </table>
                                    </div>
                                    <div className="col-md-6">
                                        <table className='table table-borderless table-line'>
                                            <tbody>
                                                <tr>
                                                    <th>Price:</th>
                                                    <td className="text-left">{Number(listPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0 })}</td>
                                                </tr>
                                                <tr>
                                                    <th>Property Status:</th>
                                                    <td className="text-left">For Sale</td>
                                                </tr>
                                                <tr>
                                                    <th>Bedrooms:</th>
                                                    <td className="text-left">{bedroomsTotal}</td>
                                                </tr>
                                                <tr>
                                                    <th>Bathrooms:</th>
                                                    <td className="text-left">{bathroomsTotalInteger}</td>
                                                </tr>
                                                <tr>
                                                    <th>Fireplace:</th>
                                                    <td className="text-left">{fireplacesTotal}</td>
                                                </tr>
                                                <tr>
                                                    <th>Bath Size:</th>
                                                    <td className="text-left">50 SqFt</td>
                                                </tr>
                                                <tr>
                                                    <th>Label:</th>
                                                    <td className="text-left">Bestseller</td>
                                                </tr>
                                            </tbody>
                                            
                                        </table>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <PropertyAmenities amenities={amenities} />
                        {(virtualTourURLUnbranded!='') && <VirtualTour tourLink={virtualTourURLUnbranded} />}
                        <PropertyMap address={unparsedAddress} position={geography}/>
                        <Mortgage price={listPrice}/>
                    </div>
                    <div className="col-md-4 col-xl-4 col-lg-4">
                        <div className="right_box_listing" id="exTab3">
                            {(session)? (
                                <></>
                            ) : (
                                <NonAccount address={fullStreetAddress}/>
                                )
                            }
                            <PropertyAgentCard 
                                agent={agent} 
                                address={unparsedAddress}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default PropertyDetails

export async function getServerSideProps({ params: { slug } }) {
    const propertyId = slug.substring(slug.lastIndexOf('-') + 1)
    const payload = {url : `${apiBaseUrl}/properties/details/${propertyId}`, method : 'GET'}
    const res = await fetchApi(payload)
    // Pass data to the page via props
    // console.log(res.data)
    if(res.data){
        return {
            props: {
                propertyDetails : res && res.data?.propertyDetails,
            },
        };
    }
    return {
        props: {
            propertyDetails : null,
        },
    };
}