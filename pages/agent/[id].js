import Link from "next/link"
import { fetchFubApi, fubApiBaseUrl } from "../../utils/fubFetchApi";
import defaultAgentImage from "../../public/assets/img/default-profile-pic.png";
import blurImage from "../../public/assets/img/placeholder.png";
import agentList from "../../utils/fub_numbers.json";
import { useEffect, useState } from "react";
import Image from "next/image";
import AgentActiveListing from "../../components/agent/AgentActiveListing";
import { useRouter } from "next/router";
import AgentDetailLoader from "../../components/skeletonLoader/AgentDetailLoader";

export default function AgentDetail() {
    const { query } = useRouter();
    const [loader, setLoader] = useState(false);
    const [agent, setAgent] = useState({});
    const [src, setSrc] = useState(defaultAgentImage.src);
    const [activeCount, setActiveCount] = useState(0);
    // const phoneBlk = agentList.find(person => (person.email === email.toLowerCase()));
    const handleAgentDetails = async (id) => {
        setLoader(true);
        try {
            let res = await fetchFubApi({url : `${fubApiBaseUrl}/users/${id}`, method : 'GET'});
            if(res.status){
                let email = res.message.email;
                let phoneBlk = agentList.find(person => (person.email === email.toLowerCase()))
                setSrc(res.message.picture?.original)
                setAgent({...res.message, ...phoneBlk})
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
        }
    }
    useEffect(()=> {handleAgentDetails(query.id)}, [query.id]);
    console.log(agent)
    return (
        <>
            {loader? <AgentDetailLoader/> : (
                <>
                <section className="style3 singalagent_box pt-50">
                    <div className="container">
                        <div className="row justify-content-center">
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
                                        <h2>{agent.name}</h2>
                                        <div className="callemail_box">
                                            <p><img src="../assets/img/callus.jpg" /> + {agent.contact}</p>
                                            <p><img src="../assets/img/agentemail.jpg" /> {agent.email}</p>
                                        </div>
                                        <p dangerouslySetInnerHTML={{__html: agent.details}}></p>
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
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <AgentActiveListing firstName={agent.firstName} email={agent.email} setActiveCount={setActiveCount} />
                </>
            )}
        </>
    )
}
