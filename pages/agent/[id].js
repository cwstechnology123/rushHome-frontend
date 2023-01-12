import Link from "next/link"
import { fetchFubApi, fubApiBaseUrl } from "../../utils/fubFetchApi";
import defaultAgentImage from "../../public/assets/img/default-profile-pic.png";
import blurImage from "../../public/assets/img/placeholder.png";
import agentList from "../../utils/fub_numbers.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import AgentActiveListing from "../../components/agent/AgentActiveListing";

export default function AgentDetail({ agent: { name, firstName, lastName, email, phone, picture } }) {
    const [src, setSrc] = useState(picture.original);
    const [activeCount, setActiveCount] = useState(0);
    const phoneBlk = agentList.find(person => (person.email === email.toLowerCase()));

    return (
        <>
            <section className="style3 singalagent_box pt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 aos-init aos-animate">
                            <div className="about-img-wrap img_box">
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
                                        {phoneBlk?.email && (<p>
                                            <img src="../assets/img/agentemail.jpg" /> {phoneBlk.email}
                                        </p>)}
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
                                            <h2>{activeCount}</h2>
                                            <p>Active Listing</p>
                                        </li>
                                        {/* <li>
                                        <h2>4.9</h2>
                                        <p>Ratings</p>
                                        </li> */}
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <AgentActiveListing firstName={firstName} email={email} setActiveCount={setActiveCount} />                       
        </>
    )
}
//{ params: { id }}
export async function getServerSideProps({ params: { id }}) {
    const res = await fetchFubApi({url : `${fubApiBaseUrl}/users/${id}`, method : 'GET'});
    // console.log("Query:", res)
    return {
        props: {
            agent : res.message,
        },
    };
}