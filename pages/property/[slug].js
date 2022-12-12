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


const PropertyDetails = ({
    propertyDetails: {
        id,
        listingId,
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
        listPictureURL,
        roomsTotal,
        listPicture2URL,
        unparsedAddress,
        geography,
        saleType,
        onMarketDate,
        heatingYN,
        cooling,
        garageYN,
        garageSpaces,
        totalGarageAndParkingSpaces,
        mlsStatus
      },
  }) => {
    
    const { data: session } = useSession()
    return (
        <>
        <section className="style3 ptb-50 product_box">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-xl-8 col-lg-8">
                        <div className="slider_wraper">
                            <div className="top_slide_nav">
                                <div className="left_nav_slide">
                                    <button type="submit" className="btn style2 excl_button">Exclusive</button>
                                    <span>
                                    <i className="fa fa-clock-o" />
                                    Month Ago
                                    </span>
                                    <span>
                                    <i className="fa fa-eye"  />
                                    15892 Views
                                    </span>
                                </div>
                                <div className="right_slide_nav">
                                    <button type="button" className="btn style3 button_top"><i className="fa fa-heart-o"  /> Saved</button>
                                    <button type="button" className="btn style3 button_top"><i className="fa fa-share"  /> Share</button>
                                    <button type="button" className="btn style3 button_top"><i className="fa fa-print"  /> Print</button>
                                </div>
                            </div>
                            <div className="slide_content">
                                <div className="slide_content_left">
                                    <h2>{fullStreetAddress}</h2>
                                    <p>{county}, {city}</p>
                                </div>
                                <div className="slide_content_right">
                                    <h2>{Number(listPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0 })}</h2>
                                    <p>{areaTotal}/SqFt</p>
                                </div>
                            </div>
                            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1"><img src={listPicture2URL} className="d-block w-100" alt="..." /></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2"><img src="../../assets/img/city_banner.jpg" className="d-block w-100" alt="..." /></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3"><img src="../../assets/img/city_banner.jpg" className="d-block w-100" alt="..." /></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4"><img src="../../assets/img/city_banner.jpg" className="d-block w-100" alt="..." /></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={4} aria-label="Slide 5"><img src={listPictureURL} className="d-block w-100" alt="..." /></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel_icons">
                                <ul>
                                    <li>
                                    <a href="#"><i className="fa fa-heart-o"  /></a>
                                    </li>
                                    <li>
                                    <a href="#"><i className="fa fa-share"  /></a>
                                    </li>
                                    <li>
                                    <a href="#"><i className="fa fa-print"  /></a>
                                    </li>
                                </ul>
                                </div>
                                <div className="carousel-item active">
                                <img src="../../assets/img/city_banner.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                <img src="../../assets/img/city_banner.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                <img src="../../assets/img/city_banner.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                <img src="../../assets/img/city_banner.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                <img src="../../assets/img/city_banner.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" ><i className="fa fa-angle-left"  /></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" ><i className="fa fa-angle-right"  /></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            </div>
                        </div>
                        <div className="Descriptions_box heading_line">
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

                            <div className="col-lg-12 col-xl-12 col-md-12">
                                <div className="listing_agentbox">
                                    <h2>Listing Agent</h2>
                                    <div className="askqu">
                                        <div className="left_ask">
                                            <i className="fa fa-user-o"  />
                                        </div>
                                        <div className="agent_box">
                                            <h2>John Doe</h2>
                                            <h3>Rush<span>Home</span></h3>
                                            <p>john.doe@rushhome.com</p>
                                            <p>P: 302.555.5555</p>
                                        </div>
                                    </div>
                                    <div className="askquestion">
                                        <h2>Ask a question:</h2>
                                        <div className="col-12">
                                            <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 150}} />
                                            <label for="floatingTextarea2">I would like more information on 123 Main Street.</label>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button type="submit" className="btn style2 contact_button">Ask a Question</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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