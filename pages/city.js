import Head from "next/head";

export default function City() {

    return (
        <>
            <Head>
                <title>City | RUSHHOME</title>
            </Head>
            <section class="pt-50 pb-75 text-center citybanner_box">
                <div class="container">
                    <h1 class="aos-init aos-animate">Dover, Delaware</h1>
                    <p class="aos-init">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <img src="assets/img/city_banner.jpg" />
            </section>
            <section class="property-slider-wrap pt-50 pb-75 property_wraper demographi_box">
                <div class="container">
                    <div class="row">
                    <div class="col-xl-12 col-lg-12">
                        <div class="section-title style1 text-left mb-40">
                        <h2>Dover Demographics</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </div>
                    </div>
                    </div>
                    <div class="row justify-content-center">
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div class="hw-card">
                        <div class="hw-img">
                            <img src="assets/img/age.jpg" />
                        </div>
                        <div class="hw-info">
                            <h3>30</h3>
                            <p>Median Age</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div class="hw-card">
                        <div class="hw-img">
                            <img src="assets/img/Household.jpg" />
                        </div>
                        <div class="hw-info">
                            <h3>$57,000</h3>
                            <p>Median Household Income</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div class="hw-card">
                        <div class="hw-img">
                            <img src="assets/img/Educated.jpg" />
                        </div>
                        <div class="hw-info">
                            <h3>23%</h3>
                            <p>College Educated</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div class="hw-card">
                        <div class="hw-img">
                            <img src="assets/img/homeprice.jpg" />
                        </div>
                        <div class="hw-info">
                            <h3>$89,000</h3>
                            <p>Avg : Home Price</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section class="property-slider-wrap pt-50 pb-75 property_wraper">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12">
                            <div class="section-title style1 text-left mb-40">
                            <h2>Recent Listings</h2>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="property-card style3">
                            <div class="property-img">
                                <img src="assets/img/property/property-26.jpg" alt="Image" />
                                <span class="property-status">Exclusive</span>
                                {/* <!-- <span class="property-condo">New</span> --> */}
                            </div>
                            <div class="property-info">
                                <div class="property-status-wrap">
                                <p class="property-price">$8,587.00</p>
                                </div>
                                <h3>
                                <a href="#">Home in Delaware</a>
                                </h3>
                                <ul class="property-metainfo list-style">
                                <li>
                                    <i class="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i class="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i class="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i class="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="property-card style3">
                            <div class="property-img">
                                <img src="assets/img/property/property-26.jpg" alt="Image" />
                                <span class="property-status">Exclusive</span>
                                {/* <!-- <span class="property-condo">New</span> --> */}
                            </div>
                            <div class="property-info">
                                <div class="property-status-wrap">
                                <p class="property-price">$500.00/ <span>month</span>
                                </p>
                                </div>
                                <h3>
                                <a href="#">Home in Delaware</a>
                                </h3>
                                <ul class="property-metainfo list-style">
                                <li>
                                    <i class="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i class="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i class="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i class="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="property-card style3">
                            <div class="property-img">
                                <img src="assets/img/property/property-26.jpg" alt="Image" />
                                {/* <!-- <span class="property-status">Exclusive</span><span class="property-condo">New</span> --> */}
                            </div>
                            <div class="property-info">
                                <div class="property-status-wrap">
                                <p class="property-price">$15,000.00</p>
                                </div>
                                <h3>
                                <a href="#">Home in Delaware</a>
                                </h3>
                                <ul class="property-metainfo list-style">
                                <li>
                                    <i class="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i class="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i class="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i class="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="property-card style3">
                            <div class="property-img">
                                <img src="assets/img/property/property-26.jpg" alt="Image" />
                                {/* <!-- <span class="property-status">For Rent</span><span class="property-condo">New</span> --> */}
                            </div>
                            <div class="property-info">
                                <div class="property-status-wrap">
                                <p class="property-price">$500.00/ <span>month</span>
                                </p>
                                </div>
                                <h3>
                                <a href="#">Home in Delaware</a>
                                </h3>
                                <ul class="property-metainfo list-style">
                                <li>
                                    <i class="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i class="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i class="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i class="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="property-card style3">
                            <div class="property-img">
                                <img src="assets/img/property/property-26.jpg" alt="Image" />
                                {/* <!-- <span class="property-status">For Rent</span><span class="property-condo">New</span> --> */}
                            </div>
                            <div class="property-info">
                                <div class="property-status-wrap">
                                <p class="property-price">$10,000.00</p>
                                </div>
                                <h3>
                                <a href="#">Home in Delaware</a>
                                </h3>
                                <ul class="property-metainfo list-style">
                                <li>
                                    <i class="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i class="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i class="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i class="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6">
                            <div class="property-card style3">
                                <div class="property-img">
                                    <img src="assets/img/property/property-26.jpg" alt="Image" />
                                    {/* <!-- <span class="property-status">For Rent</span><span class="property-condo">New</span> --> */}
                                </div>
                                <div class="property-info">
                                    <div class="property-status-wrap">
                                        <p class="property-price">$500.00/ <span>month</span></p>
                                    </div>
                                    <h3><a href="#">Home in Delaware</a></h3>
                                    <ul class="property-metainfo list-style">
                                        <li>
                                            <i class="flaticon-double-bed"></i>3 Br
                                        </li>
                                        <li>
                                            <i class="flaticon-bath-tub"></i>3 Ba
                                        </li>
                                        <li>
                                            <i class="flaticon-square"></i>2300 Sq.Ft
                                        </li>
                                        <li>
                                            <i class="flaticon-home"></i>3 Gr
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 text-center">
                        <button type="button" class="btn style1 button_custom">Discover More Property</button>
                    </div>
                </div>
            </section>
        </>
    )
}