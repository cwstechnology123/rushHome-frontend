import Link from "next/link"
import { fetchFubApi, fubApiBaseUrl } from "../../utils/fubFetchApi";
import defaultAgentImage from "../../public/assets/img/default-profile-pic.png";
import blurImage from "../../public/assets/img/placeholder.png";
import agentList from "../../utils/fub_numbers.json";
import { useState } from "react";
import Image from "next/image";

export default function AgentDetail({ agent: { name, firstName, lastName, email, phone, picture } }) {
    const [src, setSrc] = useState(picture.original);
    const phoneBlk = agentList.find(person => (person.email === email));
    return (
        <>
            <section className="style3 singalagent_box pt-50">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 aos-init aos-animate">
                        <div className="about-img-wrap img_box">
                            {/* <img src="../assets/img/agents/agent-1.jpg" alt="Iamge" className="about-img-one" /> */}
                            <Image 
                                placeholder="blur"
                                blurDataURL={blurImage.src}
                                src={src} 
                                width={150} height={150} 
                                onError={() => setSrc(defaultAgentImage.src)}
                                alt="Agent Image"
                            />
                        </div>
                    </div>
                    <div className="col-lg-8 aos-init aos-animate">
                        <div className="about-content">
                        <div className="content-title style1 whatwe_Box">
                            <h2>{name} <ul className="social-profile list-style style1">
                                <li>
                                <Link target="_blank" href="https://facebook.com/">
                                    <i className="ri-facebook-fill"></i>
                                </Link>
                                </li>
                                <li>
                                <Link target="_blank" href="https://twitter.com/">
                                    <i className="ri-twitter-fill"></i>
                                </Link>
                                </li>
                                <li>
                                <Link target="_blank" href="https://instagram.com/">
                                    <i className="ri-instagram-line"></i>
                                </Link>
                                </li>
                                <li>
                                <Link target="_blank" href="https://linkedin.com/">
                                    <i className="ri-linkedin-fill"></i>
                                </Link>
                                </li>
                            </ul>
                            </h2>
                            <div className="callemail_box">
                                {phoneBlk?.phone && (<p>
                                <img src="../assets/img/callus.jpg" /> + {phoneBlk.phone}
                            </p>)}
                            <p>
                                <img src="../assets/img/agentemail.jpg" /> {phoneBlk.phone}
                            </p>
                            </div>
                            <p dangerouslySetInnerHTML={{__html: phoneBlk.details}}></p>
                            <div className="ratting_box">
                            <ul>
                                <li>
                                <h2>182</h2>
                                <p>Transactions</p>
                                </li>
                                <li>
                                <h2>85</h2>
                                <p>Client Served</p>
                                </li>
                                <li>
                                <h2>54</h2>
                                <p>Active Listing</p>
                                </li>
                                <li>
                                <h2>4.9</h2>
                                <p>Ratings</p>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
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
                                <button className="btn style1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">For Sale</button>
                            </li>
                            </ul>
                        </div>
                        <h2>{firstName} Listings</h2>
                        <hr />
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p> */}
                        </div>
                    </div>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                        <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                        <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-12 text-center">
                        <button type="button" className="btn style1 button_custom">See All Properties <i className="flaticon-right-arrow"></i>
                        </button>
                    </div>
                </div>
                </section>
                <section className="property-slider-wrap pt-100 pb-75 property_wraper">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title style1 text-left mb-40">
                                <h2>Past Transections</h2>
                                <hr />
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p> */}
                            </div>
                        </div>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                        <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="property-card style3">
                            <div className="property-img">
                                <img src="../assets/img/property/property-26.jpg" alt="Image" />
                                <span className="hart_icon">
                                <i className="fa fa-heart" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price">$500.00/ <span>month</span>
                                    <span className="resi_button">Residental</span>
                                </p>
                                </div>
                                <h3>
                                <Link href={"/property/1"}>Home in Delaware</Link>
                                </h3>
                                <ul className="property-metainfo list-style">
                                <li>
                                    <i className="flaticon-double-bed"></i>3 Br
                                </li>
                                <li>
                                    <i className="flaticon-bath-tub"></i>3 Ba
                                </li>
                                <li>
                                    <i className="flaticon-square"></i>2300 Sq.Ft
                                </li>
                                <li>
                                    <i className="flaticon-home"></i>3 Gr
                                </li>
                                </ul>
                            </div>
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
//{ params: { id }}
export async function getServerSideProps({ params: { id }}) {
    const payload = {url : `${fubApiBaseUrl}/users/${id}`, method : 'GET', data: []}
    const res = await fetchFubApi(payload);
    // console.log("Query:", res)
    return {
        props: {
            agent : res.message,
        },
    };
}