import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import AgentCard from "../components/agent/AgentCard";
import { fetchFubApi, fubApiBaseUrl } from "../utils/fubFetchApi";

export default function FindAnAgent({agentList}) {
    const router = useRouter();
    const total_agents = agentList._metadata.total;
    const agents = agentList.users;
    const options = [
        { value: 'name-asc', label: 'Ascending' },
        { value: 'name-desc', label: 'Descending' }
    ];
    const sortAgent = (filterValues) => {
        const path = router.pathname;
        const { query } = router;
        query['sort'] = filterValues;
        router.push({ pathname: path, query: query });
    };
    return (
      <>
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
                            <p>We found <span>{total_agents}</span> agents available for you</p>
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
                    {agents.map((agent, i) => (
                        <div key={"list-card-"+i} className="col-xl-3 col-lg-6 col-md-6">
                            <AgentCard agent={agent}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </>
    )
}

export async function getServerSideProps({ query }) {
    let limit = query?.limit || 25;
    let offset = query?.offset || 0;
    let sort = query.sort? (query.sort=='name-asc'? 'name' : '-name') : 'name';
    const payload = {url : `${fubApiBaseUrl}/users/?limit=${limit}&offset=${offset}&sort=${sort}&role=Agent&includeDeleted=false`, method : 'GET'}
    const res = await fetchFubApi(payload);
    if(res.status){
        return {
            props: {
                agentList : res.message,
            },
        };
    }
    return {
        props: {
            agentList : null,
        },
    };
}