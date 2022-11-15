import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>RushHome</title>
      </Head>
      <div className="page-wrapper">
        <header className="header-wrap">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <span className="logo_wraper"><img src="assets/img/Black Rush home.png" alt="Black Rush home" /></span>
              </a>
              <div className="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
                <div className="menu-close d-lg-none">
                  <a href="#"> <i className="ri-close-line" /></a>
                </div>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a href="buyscreensearch.html" className="nav-link active">
                      Buy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="sell.html" className="nav-link">
                      Sell
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Agents
                      <i className="ri-add-line" />
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href className="nav-link">Find an Agent</a>
                      </li>
                      <li className="nav-item">
                        <a href className="nav-link">Become and Agent</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="aboutus.html" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item d-lg-none">
                    <button type="button" className="btn style3" onclick="window.location.href='client_signin.html';">Sign In</button>
                  </li>
                  <li className="nav-item d-lg-none">
                    <button type="button" className="btn style1" onclick="window.location.href='client_signup.html';">Sign Up</button>
                  </li>
                </ul>
                <div className="others-options  md-none">
                  <div className="header-btn">
                    <button type="button" className="btn style3" onclick="window.location.href='client_signin.html';">Sign In</button>
                    <button type="button" className="btn style1" onclick="window.location.href='client_signup.html';">Sign Up</button>
                  </div>
                </div>
              </div>
            </nav>
            <div className="mobile-bar-wrap">
              <div className="mobile-menu d-lg-none">
                <a href="#"><i className="ri-menu-line" /></a>
              </div>
            </div>
          </div>
        </header>
        <section className="hero-wrap style3">
          <div className="hero-slider-two owl-carousel">
            <div className="hero-slide-item hero-slide-4 bg-f" />
          </div>
          <div className="hero-content">
            <div className="row">
              <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                <h1>Get Home Faster</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <form action="#" className="property-search-form">
                  {/* <div class="form-group col-md-12">
        <button type="submit" class="btn style1 find_hm">Find Home</button>
      </div>	 */}
                  <div className="form-group-wrap">
                    <div className="form-group">
                      <input type="text" placeholder="Enter an Address, Neighbarhood" />
                    </div>
                  </div>
                  <button type="submit" className="btn style2 search_button">Search</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="property-slider-wrap pt-100 pb-75 property_wraper">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title style1 text-left mb-40">
                  <div className="state_tabs">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="btn style1 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="btn style1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Delaware</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="btn style1" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Maryland</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="btn style1" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Pennsylvania</button>
                      </li>
                    </ul>
                  </div>	
                  <h2>Popular Properties</h2>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p>
                </div>
              </div>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
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
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
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
                </div>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
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
              </div>
            </div>
            <div className="col-md-12 text-center">
              <button type="button" className="btn style1 button_custom">See All Properties <i className="flaticon-right-arrow" /></button>
            </div>
          </div>
        </section>
        <section className="hw-wrap pt-100 pb-75">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2">
                <div className="section-title style2 text-center mb-40">
                  <h2>We have the most listings &amp; constant updates. So you'll never miss out.</h2>
                  <hr className="center" />
                  <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-left">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="hw-card">
                  <div className="hw-img">
                    <img src="assets/img/Buy a New Home.jpg" alt="Image" />
                  </div>
                  <div className="hw-info">
                    <h3>Buy a New Home</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="hw-card">
                  <div className="hw-img">
                    <img src="assets/img/Sell a Home.jpg" alt="Image" />
                  </div>
                  <div className="hw-info">
                    <h3>Sell a Home</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="city-wrap pt-100 pb-75 bg-seashell">
          <img src="assets/img/shape-2.png" alt="Image" className="city-shape-one" />
          <div className="container">
            <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2">
              <div className="section-title style2 text-center mb-40">
                <h2>Explore Cities</h2>
                <hr className="center" />
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                  <div className="city-card style1 city_height">
                    <img src="assets/img/city/city-1.jpg" alt="Image" />
                    <div className="city-info">
                      <h3><a href="city.html">New York City</a></h3>
                      <p>+5231 properties</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                  <div className="city-card style1">
                    <img src="assets/img/city/city-1.jpg" alt="Image" />
                    <div className="city-info">
                      <h3><a href="city.html">New York City</a></h3>
                      <p>+5231 properties</p>
                    </div>
                  </div>
                </div>
              </div>	
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                  <div className="city-card style1">
                    <img src="assets/img/city/city-1.jpg" alt="Image" />
                    <div className="city-info">
                      <h3><a href="city.html">New York City</a></h3>
                      <p>+5231 properties</p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="city-card style1">
                      <img src="assets/img/city/city-1.jpg" alt="Image" />
                      <div className="city-info">
                        <h3><a href="city.html">New York City</a></h3>
                        <p>+5231 properties</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div className="city-card style1">
                      <img src="assets/img/city/city-1.jpg" alt="Image" />
                      <div className="city-info">
                        <h3><a href="city.html">New York City</a></h3>
                        <p>+5231 properties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>	
              <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                  <div className="city-card style1">
                    <img src="assets/img/city/city-1.jpg" alt="Image" />
                    <div className="city-info">
                      <h3><a href="city.html">New York City</a></h3>
                      <p>+5231 properties</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                  <div className="city-card style1 city_height">
                    <img src="assets/img/city/city-1.jpg" alt="Image" />
                    <div className="city-info">
                      <h3><a href="city.html">New York City</a></h3>
                      <p>+5231 properties</p>
                    </div>
                  </div>
                </div>
              </div>	
            </div>
          </div>
        </section>
        <div className="video-wrap video-bg-1 style2 bg-f ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="content-title">
                  <h2>Need Help! Contact Us.</h2>
                  <hr className="center left" />
                  <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p>
                </div>
                <div className="contact-form">
                  <form className="form-wrap" id="contactForm">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" name="name" placeholder="Name*" id="name" required data-error="Please enter your name" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" name="email" id="email" required placeholder="Email*" data-error="Please enter your email" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="text" name="msg_subject" placeholder="Subject*" id="msg_subject" required data-error="Please enter your subject" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group v1">
                          <textarea name="message" id="message" placeholder="Your Messages.." cols={30} rows={10} required data-error="Please enter your message" defaultValue={""} />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      {/* <div class="form-group">
      <div class="form-check checkbox">
      <input name="gridCheck" value="I agree to the terms and privacy policy." class="form-check-input" type="checkbox" id="gridCheck" required>
      <label class="form-check-label" for="gridCheck">
      I agree to the <a class="link style1" href="terms-of-service.html">terms &amp; conditions</a> and <a class="link style1" href="privacy-policy.html">privacy policy</a>
      </label>
      <div class="help-block with-errors gridCheck-error"></div>
      </div>
      </div> */}
                      <div className="col-md-12">
                        <button type="submit" className="btn style1 send_mess">Send Message</button>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer-wrap style1 pt-100">
          <div className="footer-top">
            <div className="container">
              <div className="row pb-75">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 pe-xl-5">
                  <div className="footer-widget">
                    <a href="index.html" className="footer-logo">
                      <span className="logo_wraper"><img src="assets/img/Black Rush home.png" alt="Black Rush home" /></span>
                    </a>
                    <p className="comp-desc">
                      Lorem ipsum dolor sit amet consec tetur aditonsi soom isotope elit esumo tempo incidunt labore dolore magna aliqu core tetur adip iscing eliteous sedun amet.
                    </p>
                    <div className="bx_wraper">
                      <div className="left_box">
                        <h6>Email</h6>
                        <p>info@rushhomes.com</p>
                      </div>
                      <div className="right_box">
                        <h6>Call</h6>
                        <p>+845 5884 5845</p>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <ul className="social-profile list-style style1">
                        <li>
                          <a target="_blank" href="https://facebook.com/">
                            <i className="ri-facebook-fill" />
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="https://twitter.com/">
                            <i className="ri-twitter-fill" />
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="https://instagram.com/">
                            <i className="ri-instagram-line" />
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="https://linkedin.com/">
                            <i className="ri-linkedin-fill" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer-widget cities">
                    <h3 className="footer-widget-title">Search by City</h3>
                    <ul className="footer-menu list-style">
                      <li>
                        <a href="listings-one.html" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Delaware Real Estate
                        </a>
                      </li>
                      <li>
                        <a href="listings-one.html" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Florida Real Estate
                        </a>
                      </li>
                      <li>
                        <a href="listings-one.html" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Istambul Real Estate
                        </a>
                      </li>
                      <li>
                        <a href="listings-one.html" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Sanfransisco Real Estate
                        </a>
                      </li>
                      <li>
                        <a href="listings-one.html" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          London Real Estate
                        </a>
                      </li>
                      <li>
                        <a href="listings-one.html" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          New York City Real Estate
                        </a>
                      </li>
                    </ul>
                    <ul className="footer-menu list-style">
                      <li>
                        <a href="listings-one.html" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Delaware Real Estate
                        </a>
                      </li>
                      <li>
                        <a href="listings-one.html" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Delaware Real Estate
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Delaware Real Estate
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 ps-xl-5">
                  <div className="footer-widget">
                    <h3 className="footer-widget-title">Quick Links</h3>
                    <ul className="footer-menu list-style">
                      <li>
                        <a href="index.html" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Buy Property
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Sell Property
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Others
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-bottom">
              <p className="text_content"> Lorem ipsum dolor sit amet consec tetur aditonsi soom isotope elit esumo tempo incidunt labore dolore magna aliqu core tetur adip iscing eliteous sedun amet. </p>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <p className="copyright-text">
                    <span>#FINDYOUR</span>WAYHOME.
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="copyright-text text-right logo_copyright">
                    <span><img src="assets/img/Black Rush home.png" alt="Black Rush home" /></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
