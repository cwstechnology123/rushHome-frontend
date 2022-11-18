export default function Buy() {
  return (
    <>
        <section className="pt-50 bye_topnav">
            <div className="container">
            <form className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                <div className="input-group">
                    <div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></div>
                    <input type="text" className="form-control" id placeholder="Enter an address neighborhood" />
                </div>
                </div>
                <div className="col-12">
                <select className="form-select" id="inlineFormSelectPref">
                    <option selected>Status</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
                </div>
                <div className="col-12">
                <select className="form-select" id="inlineFormSelectPref">
                    <option selected>Bed</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
                </div>
                <div className="col-12">
                <select className="form-select" id="inlineFormSelectPref">
                    <option selected>Bath</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
                </div>
                <div className="col-12">
                <select className="form-select" id="inlineFormSelectPref">
                    <option selected>Price</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
                </div>
                <div className="col-12">
                <button type="button" className="btn refresh_button">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
                </div>
                <div className="col-12">
                <button type="submit" className="btn style2 search_top">Search</button>
                </div>
                <div className="col-12">
                <button type="button" className="btn refresh_button">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>
                </button>
                </div>
            </form>
            </div>
        </section>
        <section className="listing_wraper">
            <div className="container">
            <div className="row">
                <div className="col-md-5 col-xl-5 col-lg-5">
                <div className="footer-widget">
                    <div className="comp-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd">
                    </iframe>
                    </div>
                </div>
                </div>
                <div className="col-md-7 col-xl-7 col-lg-7">
                <section className="listing-wrap">
                    <div className="container">
                    <div className="row align-items-center mb-25">
                        <div className="col-xl-6 col-lg-8 col-md-8">
                        <div className="profuct-result">
                            <p>We found <span>45</span> properties available for you</p>
                        </div>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4">
                        <p className="sort_by">
                            <span className="sorted_list"><i className="fa fa-list-ul" aria-hidden="true" /></span>
                            &nbsp;Sorted By
                        </p>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4">
                        <div className="filter-item-cat">
                            <select>
                            <option value={1}>Top Selling</option>
                            <option value={2}>Sort By High To Low</option>
                            <option value={3}>Sort By Low To High</option>
                            </select>
                        </div>
                        </div>
                        <div className="lising_icons">
                        <span className="list_icon"><i className="fa fa-th-list" aria-hidden="true" /></span>
                        <span className="list_th_icon"><i className="fa fa-th" aria-hidden="true" /></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="property-card style4">
                            <div className="property-img">
                            <img src="assets/img/property/property-20.jpg" alt="Image" />
                            <span className="property-status">Exclusive</span>
                            </div>
                            <div className="property-info">
                            <h3><a href="listing-details.html">Home in Delaware</a></h3>
                            <p>1421 San Pedro St. Los Angeles</p>
                            <p className="property-price">$500.00/<span>month</span></p>
                            <ul className="property-metainfo list-style">
                                <li><i className="flaticon-double-bed" />3 Br</li>
                                <li><i className="flaticon-bath-tub" />3 Ba</li>
                                <li><i className="flaticon-square" />2300 Sq Ft</li>
                                <li><i className="flaticon-home" />3 Gr</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="property-card style4">
                            <div className="property-img">
                            <img src="assets/img/property/property-20.jpg" alt="Image" />
                            <span className="property-status">Exclusive</span>
                            </div>
                            <div className="property-info">
                            <h3><a href="listing-details.html">Home in Delaware</a></h3>
                            <p>1421 San Pedro St. Los Angeles</p>
                            <p className="property-price">$500.00/<span>month</span></p>
                            <ul className="property-metainfo list-style">
                                <li><i className="flaticon-double-bed" />3 Br</li>
                                <li><i className="flaticon-bath-tub" />3 Ba</li>
                                <li><i className="flaticon-square" />2300 Sq Ft</li>
                                <li><i className="flaticon-home" />3 Gr</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="property-card style4">
                            <div className="property-img">
                            <img src="assets/img/property/property-20.jpg" alt="Image" />
                            <span className="property-status">Exclusive</span>
                            </div>
                            <div className="property-info">
                            <h3><a href="listing-details.html">Home in Delaware</a></h3>
                            <p>1421 San Pedro St. Los Angeles</p>
                            <p className="property-price">$500.00/<span>month</span></p>
                            <ul className="property-metainfo list-style">
                                <li><i className="flaticon-double-bed" />3 Br</li>
                                <li><i className="flaticon-bath-tub" />3 Ba</li>
                                <li><i className="flaticon-square" />2300 Sq Ft</li>
                                <li><i className="flaticon-home" />3 Gr</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="property-card style4">
                            <div className="property-img">
                            <img src="assets/img/property/property-20.jpg" alt="Image" />
                            <span className="property-status">Exclusive</span>
                            </div>
                            <div className="property-info">
                            <h3><a href="listing-details.html">Home in Delaware</a></h3>
                            <p>1421 San Pedro St. Los Angeles</p>
                            <p className="property-price">$500.00/<span>month</span></p>
                            <ul className="property-metainfo list-style">
                                <li><i className="flaticon-double-bed" />3 Br</li>
                                <li><i className="flaticon-bath-tub" />3 Ba</li>
                                <li><i className="flaticon-square" />2300 Sq Ft</li>
                                <li><i className="flaticon-home" />3 Gr</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="property-card style4">
                            <div className="property-img">
                            <img src="assets/img/property/property-20.jpg" alt="Image" />
                            <span className="property-status">Exclusive</span>
                            </div>
                            <div className="property-info">
                            <h3><a href="listing-details.html">Home in Delaware</a></h3>
                            <p>1421 San Pedro St. Los Angeles</p>
                            <p className="property-price">$500.00/<span>month</span></p>
                            <ul className="property-metainfo list-style">
                                <li><i className="flaticon-double-bed" />3 Br</li>
                                <li><i className="flaticon-bath-tub" />3 Ba</li>
                                <li><i className="flaticon-square" />2300 Sq Ft</li>
                                <li><i className="flaticon-home" />3 Gr</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="property-card style4">
                            <div className="property-img">
                            <img src="assets/img/property/property-20.jpg" alt="Image" />
                            <span className="property-status">Exclusive</span>
                            </div>
                            <div className="property-info">
                            <h3><a href="listing-details.html">Home in Delaware</a></h3>
                            <p>1421 San Pedro St. Los Angeles</p>
                            <p className="property-price">$500.00/<span>month</span></p>
                            <ul className="property-metainfo list-style">
                                <li><i className="flaticon-double-bed" />3 Br</li>
                                <li><i className="flaticon-bath-tub" />3 Ba</li>
                                <li><i className="flaticon-square" />2300 Sq Ft</li>
                                <li><i className="flaticon-home" />3 Gr</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <ul className="page-nav list-style mt-10">
                        <li><a href="listings-one.html"><i className="flaticon-back" /> Prev</a></li>
                        <li><a className="active" href="listings-one.html">1</a></li>
                        <li><a href="listings-one.html">2</a></li>
                        <li><a href="listings-one.html">3</a></li>
                        <li><a href="listings-one.html">4</a></li>
                        <li><a href="listings-one.html">5</a></li>
                        <li><a href="listings-one.html">6</a></li>
                        <li><a href="listings-one.html"><i className="flaticon-next-1" /> Next</a></li>
                    </ul>
                    </div>
                </section>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}