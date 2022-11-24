import Image from 'next/image'

export default function Dashboard() {
  return (
    <>
        <section className="pt-50 pb-75 clinet_dashboard">
            <div className="container">
                <div className="row">
                <div className="col-md-9 col-xl-9 col-lg-9">
                    <form action="#" className="search_dahboard">
                    <div className="form-group-wrap">
                        <i className="fa fa-search" aria-hidden="true" />
                        <div className="form-group">
                        <input type="text" placeholder="Search" />
                        </div>
                    </div>
                    </form>
                    <div className="dashboard_box">
                    <div className="dashboard_nav_box">
                        <div className="row">
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <div className="overview">
                            <h2>Overview</h2>
                            <div className="col-md-12">
                                <select className="form-select">
                                <option selected>Last 7 Days</option>
                                <option>...</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4">
                            <div className="newhome">
                            <h2>New Homes</h2>
                            <p>12</p>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5 col-xl-5">
                            <div className="recomendhome">
                            <h2>Recommended Homes</h2>
                            <p>4</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="dashbaord_table">
                        <table className="table caption-top">
                        <thead>
                            <tr>
                            <th scope="col" />
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                            <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row"><img src="../../assets/img/dashboard/property-25.jpg" /></th>
                            <td>2699 Green Valley, Highland Lake, FL </td>
                            <td><button className="btn style2" type="button">Active</button></td>
                            <td><button className="btn style3 button_top view_details" type="button"><i className="fa fa-eye" aria-hidden="true" /> View detail</button></td>
                            </tr>
                            <tr>
                            <th scope="row"><img src="../../assets/img/dashboard/property-25.jpg" /></th>
                            <td>2699 Green Valley, Highland Lake, FL </td>
                            <td><button className="btn style2" type="button">Active</button></td>
                            <td><button className="btn style3 button_top view_details" type="button"><i className="fa fa-eye" aria-hidden="true" /> View detail</button></td>
                            </tr>
                            <tr className="table-active">
                            <th scope="row"><img src="../../assets/img/dashboard/property-25.jpg" /></th>
                            <td>2699 Green Valley, Highland Lake, FL </td>
                            <td><button className="btn style2" type="button">Active</button></td>
                            <td><button className="btn style3 button_top view_details" type="button"><i className="fa fa-eye" aria-hidden="true" /> View detail</button></td>
                            </tr>
                            <tr>
                            <th scope="row"><img src="../../assets/img/dashboard/property-25.jpg" /></th>
                            <td>2699 Green Valley, Highland Lake, FL </td>
                            <td><button className="btn style1" type="button">Pending</button></td>
                            <td><button className="btn style3 button_top view_details" type="button"><i className="fa fa-eye" aria-hidden="true" /> View detail</button></td>
                            </tr>
                            <tr>
                            <th scope="row"><img src="../../assets/img/dashboard/property-25.jpg" /></th>
                            <td>2699 Green Valley, Highland Lake, FL </td>
                            <td><button className="btn style2" type="button">Active</button></td>
                            <td><button className="btn style3 button_top view_details" type="button"><i className="fa fa-eye" aria-hidden="true" /> View detail</button></td>
                            </tr>
                            <tr>
                            <th scope="row"><img src="../../assets/img/dashboard/property-25.jpg" /></th>
                            <td>2699 Green Valley, Highland Lake, FL </td>
                            <td><button className="btn style2" type="button">Active</button></td>
                            <td><button className="btn style3 button_top view_details" type="button"><i className="fa fa-eye" aria-hidden="true" /> View detail</button></td>
                            </tr>
                            <tr>
                            <th scope="row"><img src="../../assets/img/dashboard/property-25.jpg" /></th>
                            <td>2699 Green Valley, Highland Lake, FL </td>
                            <td><button className="btn style2" type="button">Active</button></td>
                            <td><button className="btn style3 button_top view_details" type="button"><i className="fa fa-eye" aria-hidden="true" /> View detail</button></td>
                            </tr>
                            <tr>
                            <th scope="row"><img src="../../assets/img/dashboard/property-25.jpg" /></th>
                            <td>2699 Green Valley, Highland Lake, FL </td>
                            <td><button className="btn style2" type="button">Active</button></td>
                            <td><button className="btn style3 button_top view_details" type="button"><i className="fa fa-eye" aria-hidden="true" /> View detail</button></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="paginaion_wraper">
                        <div className="left_box_pagi text_pagi">
                        <p>1-</p>
                        <p>10</p>
                        <p>of</p>
                        <p>12</p>
                        </div>
                        <div className="right_box_pagi text_pagi">
                        <p>1</p>
                        <p>of</p>
                        <p>2</p>
                        <p className="prev_pagi"><i className="fa fa-angle-left" aria-hidden="true" /></p>
                        <p className="next_pegi"><i className="fa fa-angle-right" aria-hidden="true" /></p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-3 col-xl-3 col-lg-3">
                    <div className="right_dashboard">
                    <div className="rushhome_agent">
                        <h3>Your Rush Home Agent</h3>
                        <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6">
                            <h3>Felecia Brown</h3>
                            <p>Realtor</p>
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6">
                            <div className="rightrushome">
                            <p><a href><i className="fa fa-user-o" aria-hidden="true" /> Profile</a></p>
                            <p><a href><i className="fa fa-envelope-o" aria-hidden="true" /> Messages</a></p>
                            <p><a href><i className="fa fa-phone" aria-hidden="true" /> Call</a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="criteria_box">
                        <h2>Criteria <button type="button" className="btn style1 criteria_edit">Edit Criteria</button></h2>
                        <ul>
                        <li>
                            <i className="flaticon-double-bed" />
                            3 Beds
                        </li>
                        <li>
                            <i className="flaticon-bath-tub" />
                            Bathrooms
                        </li>
                        <li>
                            <i className="flaticon-square" />
                            1,300 Sqft
                        </li>
                        <li>
                            <i className="fa fa-usd" aria-hidden="true" />
                            $750k - $1.2M
                        </li>
                        <li>
                            <i className="fa fa-map-marker" aria-hidden="true" />
                            Philadelphia
                        </li>
                        </ul>
                    </div>
                    <div className="monthwise">
                        <h2>September 2022 
                        <span className="leftarow"><i className="fa fa-angle-right" aria-hidden="true" /></span>
                        <span className="rightarow"><i className="fa fa-angle-left" aria-hidden="true" /></span>
                        </h2>
                        <p>12 September</p>
                        <div className="datewise">
                        <ul>
                            <li>
                            <span>08:30PM</span>
                            <span className="addressdate">2699 Green Valley, Highland Lake, FL Home Showing</span>
                            </li>
                            <li>
                            <span>08:30PM</span>
                            <span className="addressdate">2699 Green Valley, Highland Lake, FL Home Showing</span>
                            </li>
                        </ul>
                        </div>
                        <p>19 September</p>
                        <div className="datewise">
                        <ul>
                            <li>
                            <span>08:30PM</span>
                            <span className="addressdate">2699 Green Valley, Highland Lake, FL Home Showing</span>
                            </li>
                            <li>
                            <span>08:30PM</span>
                            <span className="addressdate">2699 Green Valley, Highland Lake, FL Home Showing</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="recent_wraper">
                        <h2>Recent Activity <span>.View All</span></h2>
                        <p>Yesterday</p>
                        <div className="active_content">
                        <button className="btn style2 saved_button" type="button">Saved</button>
                        <p>ACTIVE | 1306 Flanders Way (7 views) - $220k </p>
                        <p>ACTIVE | 1306 Flanders Way (7 views) - $220k </p>
                        </div>
                        <div className="active_content">
                        <button className="btn style2 saved_button" type="button">Saved</button>
                        <p>ACTIVE | 1306 Flanders Way (7 views) - $220k </p>
                        <p>ACTIVE | 1306 Flanders Way (7 views) - $220k </p>
                        <p>ACTIVE | 1306 Flanders Way (7 views) - $220k </p>
                        <p>ACTIVE | 1306 Flanders Way (7 views) - $220k </p>
                        <p>ACTIVE | 1306 Flanders Way (7 views) - $220k </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}