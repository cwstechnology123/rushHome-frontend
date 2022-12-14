import { useState } from 'react'
import { HiOutlineHomeModern, HiOutlineStar } from "react-icons/hi2";
import { GiCrane, GiBathtub, GiHomeGarage } from "react-icons/gi";
import { MdSquareFoot } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import Mortgage from '../../components/property/Mortgage';
import PropertyLocation from '../../components/property/PropertyLocation';
import PropertyMap from '../../components/property/PropertyMap';
import SimilarHomes from '../../components/property/SimilarHomes';
import { apiBaseUrl, fetchApi } from '../../utils/fetchApi';
import { FaBath, FaHotTub } from 'react-icons/fa';
import NonAccount from './NonAccount';
import { useSession } from 'next-auth/react';
import VirtualTour from '../../components/property/VirtualTour';
import PropertyHeader from '../../components/property/PropertyHeader';
import PropertyImages from '../../components/property/PropertyImages';
import PropertyAgentCard from '../../components/property/PropertyAgentCard';


const PropertyDetails = ({
    propertyDetails: {
        id,
        listingId,
        listingKey,
        propertyType,
        listPrice,
        fullStreetAddress,
        description,
        bedroomsTotal,
        bathroomsTotal,
        areaTotal,
        slug,
        county,
        city,
        roomsTotal,
        listPictureURL,
        listPicture2URL,
        listPicture3URL,
        agent,
        unparsedAddress,
        geography,
        saleType,
        onMarketDate,
        heatingYN,
        cooling,
        garageYN,
        garageSpaces,
        totalGarageAndParkingSpaces,
        mlsStatus,
        pricePerSquareFoot,
        virtualTourURLUnbranded
      },
  }) => {
    
    const { data: session } = useSession()
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
                                            {saleType!="" && (
                                                <li>
                                                <span><HiOutlineHomeModern/></span>
                                                <p>Type</p>
                                                <h3>{saleType}</h3>
                                                </li>
                                            )}
                                            {onMarketDate!="" && (
                                                <li>
                                                <span><GiCrane/></span>
                                                <p>Build Year</p>
                                                <h3>{new Date(onMarketDate).getFullYear()}</h3>
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
                                            {bathroomsTotal!="" && (
                                                <li>
                                                <span><FaBath/></span>
                                                <p>Bathroom</p>
                                                <h3>{bathroomsTotal}</h3>
                                                </li>
                                            )}
                                            {totalGarageAndParkingSpaces!="" && (
                                                <li>
                                                <span><GiHomeGarage/></span>
                                                <p>Garage</p>
                                                <h3>{totalGarageAndParkingSpaces}</h3>
                                                </li>
                                            )}
                                            {/* {cooling!="" && (
                                                <li>
                                                <span><GiHomeGarage/></span>
                                                <p>Air Cooler</p>
                                                <h3>{cooling}</h3>
                                                </li>
                                            )} */}
                                            {mlsStatus!="" && (
                                                <li>
                                                <span><HiOutlineStar/></span>
                                                <p>Status</p>
                                                <h3>{mlsStatus}</h3>
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
                                <div className="additional_box">
                                    <div className="additional_left">
                                        <table className='table table-borderless'>
                                            <tbody>
                                                <tr>
                                                    <th>Property ID:</th>
                                                    <td>{listingId}</td>
                                                </tr>
                                                <tr>
                                                    <th>Property Type:</th>
                                                    <td>{propertyType}</td>
                                                </tr>
                                                <tr>
                                                    <th>Rooms:</th>
                                                    <td>{roomsTotal}</td>
                                                </tr>
                                                <tr>
                                                    <th>Size:</th>
                                                    <td>{areaTotal} SqFt</td>
                                                </tr>
                                                <tr>
                                                    <th>Garage:</th>
                                                    <td>{totalGarageAndParkingSpaces}</td>
                                                </tr>
                                                <tr>
                                                    <th>Garage Size:</th>
                                                    <td>{garageSpaces} SqFt</td>
                                                </tr>
                                                <tr>
                                                    <th>Year Build:</th>
                                                    <td>{new Date(onMarketDate).getFullYear()}</td>
                                                </tr>
                                            </tbody>
                                            
                                        </table>
                                    </div>
                                    <div className="additional_right">
                                        <table className='table table-borderless'>
                                            <tbody>
                                                <tr>
                                                    <th>Price:</th>
                                                    <td>{Number(listPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                                                </tr>
                                                <tr>
                                                    <th>Property Status:</th>
                                                    <td>For Sale</td>
                                                </tr>
                                                <tr>
                                                    <th>Bedrooms:</th>
                                                    <td>{bedroomsTotal}</td>
                                                </tr>
                                                <tr>
                                                    <th>Bathrooms:</th>
                                                    <td>{bathroomsTotal} SqFt</td>
                                                </tr>
                                                <tr>
                                                    <th>Garage:</th>
                                                    <td>{totalGarageAndParkingSpaces}</td>
                                                </tr>
                                                <tr>
                                                    <th>Bath Size:</th>
                                                    <td>50 SqFt</td>
                                                </tr>
                                                <tr>
                                                    <th>Label:</th>
                                                    <td>Bestseller</td>
                                                </tr>
                                            </tbody>
                                            
                                        </table>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="offices_box heading_line">
                            <div className="col-xl-12 col-lg-12">
                            <div className="section-title style1 text-left mb-40">
                                <h2>Offices Amenities</h2>
                                <hr />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                                <div className="offices_wraper">
                                <ul>
                                    <li>
                                    <i className="fa fa-check"  />
                                    Balcony
                                    </li>
                                    <li>
                                    <i className="fa fa-check"  />
                                    Fireplace
                                    </li>
                                    <li>
                                    <i className="fa fa-check"  />
                                    Basement
                                    </li>
                                    <li>
                                    <i className="fa fa-check"  />
                                    Dishwasher
                                    </li>
                                    <li>
                                    <i className="fa fa-check"  />
                                    Fireplace 
                                    </li>
                                    <li>
                                    <i className="fa fa-check"  />
                                    Basement Cooling
                                    </li>
                                    <li>
                                    <i className="fa fa-check"  />
                                    Dining room
                                    </li>
                                    <li>
                                    <i className="fa fa-check"  />
                                    Balcony
                                    </li>
                                    <li>
                                    <i className="fa fa-check"  />
                                    Cooling
                                    </li>
                                    <li>
                                    <i className="fa fa-check"  />
                                    Balcony
                                    </li>
                                    <li>
                                    <i className="fa fa-check"  />
                                    Dining room
                                    </li>
                                    <li>
                                    <i className="fa fa-check"  />
                                    Dishwasher
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        {(virtualTourURLUnbranded!='') &&<VirtualTour tourLink={virtualTourURLUnbranded} />}
                        <PropertyMap address={unparsedAddress} position={geography}/>
                        <PropertyLocation />
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
        
        <SimilarHomes />
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