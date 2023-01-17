import { NextSeo } from "next-seo";
import { useEffect, useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import AgentCard from "../components/agent/AgentCard";
import AgentCardLoader from "../components/skeletonLoader/AgentCardLoader";
import { fetchFubApi, fubApiBaseUrl } from "../utils/fubFetchApi";

export default function FindAnAgent() {
    const [loader, setLoader] = useState(false);
    const [agentList, setAgentList] = useState({});
    const handleAgentCalls = async (sortVal) => {
        setLoader(true);
        let limit = 25;
        let offset = 0;
        let sort = sortVal? (sortVal=='name-asc'? 'name' : '-name') : 'name';
        try {
            let res = await fetchFubApi({url : `${fubApiBaseUrl}/users/?limit=${limit}&offset=${offset}&sort=${sort}&role=Agent&includeDeleted=false`, method : 'GET'});
            if(res.status){
                setAgentList(res.message)
                setLoader(false);
            }
        } catch (error) {
            setLoader(false);
        }
    }
    useEffect(()=> {handleAgentCalls('name-asc')}, []);

    const options = [
        { value: 'name-asc', label: 'Ascending' },
        { value: 'name-desc', label: 'Descending' }
    ];
    const sortAgent = (filterValues) => {
        handleAgentCalls(filterValues);
    };
    return (
      <>
        <NextSeo
            title="Find an Agent | RushHome"
            description="We see change as opportunity, not a threat & start with the belief that there is a better way."
            canonical={`${process.env.NEXT_PUBLIC_HOST_NAME}/find-an-agent`}
            openGraph={{
                type: 'website',
                title: "Find an Agent | RushHome",
                description: "We see change as opportunity, not a threat & start with the belief that there is a better way.",
                url: `${process.env.NEXT_PUBLIC_HOST_NAME}/find-an-agent`,
                images: [
                    {
                        url: `${process.env.NEXT_PUBLIC_HOST_NAME}/assets/img/about_banner.jpg`,
                        width: 800,
                        height: 600,
                        alt: 'Photo of property',
                    }
                ],
                site_name: 'RushHome'
            }}
        />
        <section className="hero-wrap style3 findagent_banner">
            <div className="hero-slider-two owl-carousel">
                <div className="hero-slide-item hero-slide-4 bg-f"></div>
            </div>
            <div className="hero-content home-search">
                <div className="row">
                    <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                        <h1>Find an agent for you.</h1>
                        {/* <form action="#" className="property-search-form">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Agent Name, State" />
                                <div className="input-group-append">
                                    <button className="btn style_button" type="submit">Search</button>
                                </div>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>
        </section>
        <section className="agent-wrap ptb-50">
            <div className="container">
                <div className="row justify-content-between align-items-center mb-25">
                    <div className="col-xl-6 col-lg-8 col-md-8">
                        <div className="profuct-result">
                            <p>We found <span>{agentList._metadata?.total || 0}</span> agents available for you</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4">
                        <div className="filter-item-cat">
                            <Dropdown
                                options={options} placeholder={<span className="sorted_list"><i className="fa fa-list-ul"/> Sort By Alphabet</span>}
                                onChange={ev => sortAgent(ev.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loader? <AgentCardLoader/> : (
                        <>
                        {!!(agentList.users) && agentList.users.map((agent, i) => (
                            <div key={"list-card-"+i} className="col-xl-3 col-lg-6 col-md-6">
                                <AgentCard agent={agent}/>
                            </div>
                        ))}
                        </>
                    )}
                </div>
            </div>
        </section>
      </>
    )
}