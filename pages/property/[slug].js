import { useState } from 'react'
import Mortgage from '../../components/property/Mortgage';
import PropertyLocation from '../../components/property/PropertyLocation';
import RequestInfo from '../../components/property/RequestInfo';
import ScheduleTour from '../../components/property/ScheduleTour';
import SimilarHomes from '../../components/property/SimilarHomes';
import { apiBaseUrl, fetchApi } from '../../utils/fetchApi'

const PropertyDetails = ({
    propertyDetails: {
        id,
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
        listPicture2URL,
      },
  }) => {
    const [activeTab, setActiveTab] = useState('schedule-tour');

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
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                Month Ago
                                </span>
                                <span>
                                <i className="fa fa-eye" aria-hidden="true" />
                                15892 Views
                                </span>
                            </div>
                            <div className="right_slide_nav">
                                <button type="button" className="btn style3 button_top"><i className="fa fa-heart-o" aria-hidden="true" /> Saved</button>
                                <button type="button" className="btn style3 button_top"><i className="fa fa-share" aria-hidden="true" /> Share</button>
                                <button type="button" className="btn style3 button_top"><i className="fa fa-print" aria-hidden="true" /> Print</button>
                            </div>
                            </div>
                            <div className="slide_content">
                            <div className="slide_content_left">
                                <h2>{fullStreetAddress}</h2>
                                <p>{county}, {city}</p>
                            </div>
                            <div className="slide_content_right">
                                <h2>{Number(listPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h2>
                                <p>2300/SqFt</p>
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
                                    <a href="#"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                                    </li>
                                    <li>
                                    <a href="#"><i className="fa fa-share" aria-hidden="true" /></a>
                                    </li>
                                    <li>
                                    <a href="#"><i className="fa fa-print" aria-hidden="true" /></a>
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
                                <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fa fa-angle-left" aria-hidden="true" /></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"><i className="fa fa-angle-right" aria-hidden="true" /></span>
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
                                    <li>
                                    <span><i className="fa fa-home" aria-hidden="true" /></span>
                                    <p>Type</p>
                                    <h3>Single</h3>
                                    </li>
                                    <li>
                                    <span><i className="fa fa-home" aria-hidden="true" /></span>
                                    <p>Type</p>
                                    <h3>Single</h3>
                                    </li>
                                    <li>
                                    <span><i className="fa fa-home" aria-hidden="true" /></span>
                                    <p>Type</p>
                                    <h3>Single</h3>
                                    </li>
                                    <li>
                                    <span><i className="fa fa-home" aria-hidden="true" /></span>
                                    <p>Type</p>
                                    <h3>Single</h3>
                                    </li>
                                    <li>
                                    <span><i className="fa fa-home" aria-hidden="true" /></span>
                                    <p>Type</p>
                                    <h3>Single</h3>
                                    </li>
                                    <li>
                                    <span><i className="fa fa-home" aria-hidden="true" /></span>
                                    <p>Type</p>
                                    <h3>Single</h3>
                                    </li>
                                    <li>
                                    <span><i className="fa fa-home" aria-hidden="true" /></span>
                                    <p>Type</p>
                                    <h3>Single</h3>
                                    </li>
                                    <li>
                                    <span><i className="fa fa-home" aria-hidden="true" /></span>
                                    <p>Type</p>
                                    <h3>Single</h3>
                                    </li>
                                    <li>
                                    <span><i className="fa fa-home" aria-hidden="true" /></span>
                                    <p>Type</p>
                                    <h3>Single</h3>
                                    </li>
                                    <li>
                                    <span><i className="fa fa-home" aria-hidden="true" /></span>
                                    <p>Type</p>
                                    <h3>Single</h3>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="factfeature_box heading_line">
                            <div className="col-xl-12 col-lg-12">
                            <div className="section-title style1 text-left mb-40">
                                <h2>Facts &amp; Features</h2>
                                <hr />
                                <div className="additional_box">
                                <div className="additional_left">
                                    <ul>
                                    <li>Property ID:</li>
                                    <li>Property Type:</li>
                                    <li>Rooms:</li>
                                    <li>Size:</li>
                                    <li>Garage:</li>
                                    <li>Garage Size:</li>
                                    <li>Year Build:</li>
                                    </ul>
                                    <ul className="details_box">
                                    <li>AD-2912</li>
                                    <li>Apartment, bar, cafe, villa</li>
                                    <li>04</li>
                                    <li>9000 SqFt</li>
                                    <li>01</li>
                                    <li>50 SqFt</li>
                                    <li>2018</li>
                                    </ul>
                                </div>
                                <div className="additional_right">
                                    <ul>
                                    <li>Property ID:</li>
                                    <li>Property Type:</li>
                                    <li>Rooms:</li>
                                    <li>Size:</li>
                                    <li>Garage:</li>
                                    <li>Garage Size:</li>
                                    <li>Year Build:</li>
                                    </ul>
                                    <ul className="details_box">
                                    <li>AD-2912</li>
                                    <li>Apartment, bar, cafe, villa</li>
                                    <li>04</li>
                                    <li>9000 SqFt</li>
                                    <li>01</li>
                                    <li>50 SqFt</li>
                                    <li>2018</li>
                                    </ul>
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
                                    <i className="fa fa-check" aria-hidden="true" />
                                    Balcony
                                    </li>
                                    <li>
                                    <i className="fa fa-check" aria-hidden="true" />
                                    Fireplace
                                    </li>
                                    <li>
                                    <i className="fa fa-check" aria-hidden="true" />
                                    Basement
                                    </li>
                                    <li>
                                    <i className="fa fa-check" aria-hidden="true" />
                                    Dishwasher
                                    </li>
                                    <li>
                                    <i className="fa fa-check" aria-hidden="true" />
                                    Fireplace 
                                    </li>
                                    <li>
                                    <i className="fa fa-check" aria-hidden="true" />
                                    Basement Cooling
                                    </li>
                                    <li>
                                    <i className="fa fa-check" aria-hidden="true" />
                                    Dining room
                                    </li>
                                    <li>
                                    <i className="fa fa-check" aria-hidden="true" />
                                    Balcony
                                    </li>
                                    <li>
                                    <i className="fa fa-check" aria-hidden="true" />
                                    Cooling
                                    </li>
                                    <li>
                                    <i className="fa fa-check" aria-hidden="true" />
                                    Balcony
                                    </li>
                                    <li>
                                    <i className="fa fa-check" aria-hidden="true" />
                                    Dining room
                                    </li>
                                    <li>
                                    <i className="fa fa-check" aria-hidden="true" />
                                    Dishwasher
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <PropertyLocation />
                        
                        <Mortgage />
                    </div>
                    <div className="col-md-4 col-xl-4 col-lg-4">
                        <div className="right_box_listing" id="exTab3">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button type="button" className={`nav-link ${activeTab==='schedule-tour'? 'active' : ''}`} id="schedule-tour" onClick={()=>setActiveTab('schedule-tour')} data-bs-toggle="tab" data-bs-target="#schedule-tour-pane" role="tab" aria-controls="schedule-tour-pane" aria-selected="true">Schedule a Tour</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button type="button" className={`nav-link ${activeTab==='request-info'? 'active' : ''}`} id="request-info" onClick={()=>setActiveTab('request-info')} data-bs-toggle="tab" data-bs-target="#request-info-pane" role="tab" aria-controls="request-info-pane" aria-selected="false">Request Info</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className={`tab-pane fade ${activeTab==='schedule-tour'? 'show active' : ''}`} id="schedule-tour-pane" role="tabpanel" aria-labelledby="schedule-tour" tabIndex={0}>
                                    <ScheduleTour />
                                </div>
                                <div className={`tab-pane fade ${activeTab==='request-info'? 'show active' : ''}`} id="request-info-pane" role="tabpanel" aria-labelledby="request-info" tabIndex={1}>
                                    <RequestInfo />
                                </div>
                            
                            </div>

                            <div className="col-lg-12 col-xl-12 col-md-12">
                                <div className="listing_agentbox">
                                    <h2>Listing Agent</h2>
                                    <div className="askqu">
                                        <div className="left_ask">
                                            <i className="fa fa-user-o" aria-hidden="true" />
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
                                            <label htmlFor="floatingTextarea2">I would like more information on 123 Main Street.</label>
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