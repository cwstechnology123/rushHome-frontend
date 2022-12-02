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
  }) => (
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
                <div className="location_box heading_line">
                    <div className="col-xl-12 col-lg-12">
                    <div className="section-title style1 text-left mb-40">
                        <h2>Location</h2>
                        <hr />
                        <div className="contact_map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd">
                        </iframe>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="Calculator_box heading_line">
                    <div className="col-xl-12 col-lg-12">
                    <div className="section-title style1 text-left mb-40">
                        <h2>Mortgage Calculator</h2>
                        <hr />
                        <div className="calculation_wraper">
                        <form className="row g-3">
                            <div className="col-md-6">
                            <label className="form-label">Total Amount</label>
                            <input type="number" className="form-control" min={1} max={100} />
                            </div>
                            <div className="col-md-6">
                            <label className="form-label">Down Payment</label>
                            <input type="number" className="form-control"/>
                            </div>
                            <div className="col-md-6">
                            <label className="form-label">Interest Rate</label>
                            <input type="number" className="form-control"/>
                            </div>
                            <div className="col-md-6">
                            <label className="form-label">Number of Years</label>
                            <input type="number" className="form-control"/>
                            </div>
                            <div className="col-md-12">
                            <label htmlFor="inputState" className="form-label">Payment Period</label>
                            <select id="inputState" className="form-select">
                                <option>Monthly</option>
                                <option>...</option>
                            </select>
                            </div>
                            <div className="col-12">
                            <button type="submit" className="btn style1 button_custom">Calculate</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4 col-xl-4 col-lg-4">
                <div className="right_box_listing">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Schedule a Tour</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Reuest Info</button>
                    </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                        <div className="first_box">
                        <div className="calenter_box">
                            <div className="day_box">
                            <p>Tue</p>
                            <h3>7</h3>
                            <p>Mar</p> 
                            </div>
                            <div className="day_box">
                            <p>Tue</p>
                            <h3>7</h3>
                            <p>Mar</p> 
                            </div>
                            <div className="day_box">
                            <p>Tue</p>
                            <h3>7</h3>
                            <p>Mar</p> 
                            </div>
                            <div className="day_box">
                            <p>Tue</p>
                            <h3>7</h3>
                            <p>Mar</p> 
                            </div>
                            <div className="day_box">
                            <p>Tue</p>
                            <h3>7</h3>
                            <p>Mar</p> 
                            </div>
                            <div className="day_box">
                            <p>Tue</p>
                            <h3>7</h3>
                            <p>Mar</p> 
                            </div>  
                        </div> 
                        <div className="form_wraper_box">
                            <form className="row g-3">
                            <div className="col-md-12">
                                <select id="inputState" className="form-select">
                                <option>Choose...</option>
                                <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-12">
                                <input type="name" className="form-control" placeholder="Full Name" />
                            </div>
                            <div className="col-md-12">
                                <input type="email" className="form-control" placeholder="Your Email Address" />
                            </div>
                            <div className="col-md-12">
                                <input type="number" className="form-control" placeholder="Your Phone" />
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn style1" data-bs-toggle="modal" data-bs-target="#exampleModal">Schedule a Tour</button>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </label>
                                </div>
                            </div>
                            </form>   
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                        <div className="first_box second_box">
                        <h2>Request more information</h2>
                        <form className="row g-3">
                            <div className="col-md-12">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                            <div className="col-auto">
                                <label className="visually-hidden" htmlFor="autoSizingInputGroup">414-266-9847</label>
                                <div className="input-group">
                                <div className="col-auto">
                                    <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
                                    <select className="form-select" id="autoSizingSelect">
                                    <option>Cell</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                    </select>
                                </div>
                                <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="414-266-9847" />
                                </div>
                            </div>
                            </div>
                            <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Email Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="john.doe@gmail.com" />
                            </div>
                            <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}} />
                                <label htmlFor="floatingTextarea2">Message</label>
                            </div>
                            </div>
                            <p className="agent_content">By clicking "contact agent" you agree that Rush Home, it’s affiliates or associated third parties may contact you, including with calls or texts by automated means. You also agree to our Terms of Service and Privacy Policy. Message/data rates may apply. Consent is not a condition to access real estate services.</p>
                            <div className="col-12 text-center">
                            <button type="submit" className="btn style2 contact_button">Contact Agent</button>
                            </div>
                        </form>
                        </div> 
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
        <section className="property-slider-wrap pb-75 property_wraper">
            <div className="container">
            <div className="row">
                <div className="simaler_house heading_line">
                <div className="col-xl-12 col-lg-12">
                    <div className="section-title style1 text-left mb-40">
                    <h2>Similar Homes You May Like</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                    </div>
                </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="property-card style3">
                    <div className="property-img">
                    <img src="../../assets/img/property/property-26.jpg" alt="Image" />
                    <span className="property-status">Exclusive</span>
                    {/* <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                    <div className="property-status-wrap">
                        <p className="property-price">$8,587.00</p>
                    </div>
                    <h3><a href="listing-details.html">Home in Delaware</a></h3>
                    <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="property-card style3">
                    <div className="property-img">
                    <img src="../../assets/img/property/property-26.jpg" alt="Image" />
                    <span className="property-status">Exclusive</span>
                    {/* <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                    <div className="property-status-wrap">
                        <p className="property-price">$8,587.00</p>
                    </div>
                    <h3><a href="listing-details.html">Home in Delaware</a></h3>
                    <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="property-card style3">
                    <div className="property-img">
                    <img src="../../assets/img/property/property-26.jpg" alt="Image" />
                    <span className="property-status">Exclusive</span>
                    {/* <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                    <div className="property-status-wrap">
                        <p className="property-price">$8,587.00</p>
                    </div>
                    <h3><a href="listing-details.html">Home in Delaware</a></h3>
                    <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                        <li><i className="flaticon-home" />3 Gr</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </>
  )

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