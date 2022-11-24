import Image from 'next/image'

export default function Favorites() {
  return (
    <>
        <section className="client_favorites">
            <div className="container">
            <div className="client_favbox">
                <div className="left_client">
                <select className="form-select" id="inlineFormSelectPref">
                    <option selected>Showing all</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
                </div>
                <div className="right_client">
                <select className="form-select" id="inlineFormSelectPref">
                    <option selected>By date added</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
                <span><i className="fa fa-bars" aria-hidden="true" /></span>
                <span><i className="fa fa-bars" aria-hidden="true" /></span>
                <span><i className="fa fa-bars" aria-hidden="true" /></span>
                <button type="submit" className="btn style3 removeall"><i className="fa fa-trash" aria-hidden="true" /> Remove all</button>
                </div>
            </div>
            </div>
        </section>
        <section className="list_clientbox">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="property-card style3">
                    <div className="property-img">
                    <img src="../../assets/img/property/property-26.jpg" alt="Image" />
                    <span className="property-status">Exclusive</span>
                    {/* <span class="property-condo">New</span> */}
                    </div>
                    <div className="property-info">
                    <div className="property-status-wrap">
                        <p className="property-price">$8,587.00/<span>month</span></p>
                        <p className="property-price property_name">123 Main Street</p>
                    </div>
                    <h3><a href="listing-details.html">Home in Delaware</a></h3>
                    <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
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
                        <p className="property-price">$8,587.00/<span>month</span></p>
                        <p className="property-price property_name">123 Main Street</p>
                    </div>
                    <h3><a href="listing-details.html">Home in Delaware</a></h3>
                    <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
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
                        <p className="property-price">$8,587.00/<span>month</span></p>
                        <p className="property-price property_name">123 Main Street</p>
                    </div>
                    <h3><a href="listing-details.html">Home in Delaware</a></h3>
                    <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
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
                        <p className="property-price">$8,587.00/<span>month</span></p>
                        <p className="property-price property_name">123 Main Street</p>
                    </div>
                    <h3><a href="listing-details.html">Home in Delaware</a></h3>
                    <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
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
                        <p className="property-price">$8,587.00/<span>month</span></p>
                        <p className="property-price property_name">123 Main Street</p>
                    </div>
                    <h3><a href="listing-details.html">Home in Delaware</a></h3>
                    <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
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
                        <p className="property-price">$8,587.00/<span>month</span></p>
                        <p className="property-price property_name">123 Main Street</p>
                    </div>
                    <h3><a href="listing-details.html">Home in Delaware</a></h3>
                    <ul className="property-metainfo list-style">
                        <li><i className="flaticon-double-bed" />3 Br</li>
                        <li><i className="flaticon-bath-tub" />3 Ba</li>
                        <li><i className="flaticon-square" />2300 Sq.Ft</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}