import Head from "next/head";

export default function City() {

    return (
        <>
            <section className="pt-50 pb-75 text-center citybanner_box">
                <div className="container">
                <h1 className="aos-init aos-animate">Dover, Delaware</h1>  
                <p className="aos-init">Dover is the capital city of Delaware. The First State Heritage Park comprises several sites around the centuries-old Green. These include the 1791 Old State House and Biggs Museum of American Art. Dover International Speedway hosts NASCAR races. A variety of aircraft are displayed at the Air Mobility Command Museum, at Dover Air Force Base. Nearby, bird-rich Bombay Hook National Wildlife Refuge is on Delaware Bay.</p>                     
                </div>
                <img src="assets/img/city_banner.jpg" />
            </section>
            <section className="property-slider-wrap pt-50 pb-75 property_wraper demographi_box">
                <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                    <div className="section-title style1 text-left mb-40">
                        <h2>Dover Demographics</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="hw-card">
                        <div className="hw-img">
                        <img src="assets/img/age.jpg" />
                        </div>
                        <div className="hw-info">
                        <h3>30</h3>
                        <p>Median Age</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="hw-card">
                        <div className="hw-img">
                        <img src="assets/img/Household.jpg" />
                        </div>
                        <div className="hw-info">
                        <h3>$57,000</h3>
                        <p>Median Household Income</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="hw-card">
                        <div className="hw-img">
                        <img src="assets/img/Educated.jpg" />
                        </div>
                        <div className="hw-info">
                        <h3>23%</h3>
                        <p>College Educated</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="hw-card">
                        <div className="hw-img">
                        <img src="assets/img/homeprice.jpg" />
                        </div>
                        <div className="hw-info">
                        <h3>$89,000</h3>
                        <p>Avg : Home Price</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="property-slider-wrap pt-50 pb-75 property_wraper">
                <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                    <div className="section-title style1 text-left mb-40">
                        <h2>Recent Listings</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p>
                    </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="property-card style3">
                        <div className="property-img">
                        <img src="assets/img/property/property-26.jpg" alt="Image" />
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
                        <img src="assets/img/property/property-26.jpg" alt="Image" />
                        <span className="property-status">Exclusive</span>
                        {/* <span class="property-condo">New</span> */}
                        </div>
                        <div className="property-info">
                        <div className="property-status-wrap">
                            <p className="property-price">$500.00/<span>month</span></p>
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
                        <img src="assets/img/property/property-26.jpg" alt="Image" />
                        {/* <span class="property-status">Exclusive</span>
            <span class="property-condo">New</span> */}
                        </div>
                        <div className="property-info">
                        <div className="property-status-wrap">
                            <p className="property-price">$15,000.00</p>
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
                        <img src="assets/img/property/property-26.jpg" alt="Image" />
                        {/* <span class="property-status">For Rent</span>
            <span class="property-condo">New</span> */}
                        </div>
                        <div className="property-info">
                        <div className="property-status-wrap">
                            <p className="property-price">$500.00/<span>month</span></p>
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
                        <img src="assets/img/property/property-26.jpg" alt="Image" />
                        {/* <span class="property-status">For Rent</span>
            <span class="property-condo">New</span> */}
                        </div>
                        <div className="property-info">
                        <div className="property-status-wrap">
                            <p className="property-price">$10,000.00</p>
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
                        <img src="assets/img/property/property-26.jpg" alt="Image" />
                        {/* <span class="property-status">For Rent</span>
            <span class="property-condo">New</span> */}
                        </div>
                        <div className="property-info">
                        <div className="property-status-wrap">
                            <p className="property-price">$500.00/<span>month</span></p>
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
                <div className="col-md-12 text-center">
                    <button type="button" className="btn style1 button_custom">Discover More Property</button>
                </div>
                </div>
            </section>
            <section className="property-slider-wrap pb-75 property_wraper map_box">
                <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                    <div className="section-title style1 text-left mb-40">
                        <h2>Location</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p>
                        <div className="city_map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd">
                        </iframe>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )
}