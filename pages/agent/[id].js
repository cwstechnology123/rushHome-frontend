import Link from "next/link"
import useSWR from "swr";
import { fetchFubApi, fubApiBaseUrl } from "../../utils/fubFetchApi";
import defaultAgentImage from "../../public/assets/img/default-profile-pic.png";
import blurImage from "../../public/assets/img/placeholder.png";
import agentList from "../../utils/fub_numbers.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import Grid from "../../components/skeletonLoader/Grid";
import PropertyCard from "../../components/property/PropertyCard";

export default function AgentDetail({ agent: { name, firstName, lastName, email, phone, picture } }) {
    const [src, setSrc] = useState(picture.original);
    const [activeCount, setActiveCount] = useState(0);
    const phoneBlk = agentList.find(person => (person.email === email.toLowerCase()));

    const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
    const { data, error, isLoading, isValidating } = useSWR({url : `${apiBaseUrl}/properties/agent`, method : 'POST', data: {listAgentEmail: email, mlsStatus: "ACTIVE"}}, fetcher);
    useEffect(()=>{
        if(data){
            setActiveCount(data.properties.length)
        }
    }, [data]);
    // console.log(data)
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
                {
                    (isLoading)?
                        <section className="property-slider-wrap pt-100 pb-75 property_wraper">
                            <div className="container">
                            <Grid item={3} />
                            </div>
                        </section>
                    :
                    ((data && data.properties.length) && (
                        <section className="property-slider-wrap pt-100 pb-75 property_wraper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12">
                                        <div className="section-title style1 text-left mb-40">
                                        <h2>{firstName} Listings</h2>
                                        <hr />
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                {data.properties && data.properties.slice(0, 6).map((property, i) => (
                                    <div key={`first${i}`} className="col-xl-4 col-lg-6 col-md-6">
                                        <PropertyCard property={property}/>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </section>
                    ))
                }                        
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