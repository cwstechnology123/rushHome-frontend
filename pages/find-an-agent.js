import Link from "next/link";
import AgentCard from "../components/agent/AgentCard";
import { fetchFubApi, fubApiBaseUrl } from "../utils/fubFetchApi";

export default function FindAnAgent({agentList}) {
    //console.log("agentList: ",props)
    const total_agents = agentList._metadata.total;
    const agents = agentList.users;
    //console.log("Agents: ",agents)
    return (
      <>
        <section className="hero-wrap style3 findagent_banner">
            <div className="hero-slider-two owl-carousel">
                <div className="hero-slide-item hero-slide-4 bg-f"></div>
            </div>
            <div className="hero-content">
                <div className="row">
                    <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
                        <h1>Find an agent for you.</h1>
                        <form action="#" className="property-search-form">
                            {/* <div class="form-group col-md-12">
                                <button type="submit" class="btn style1 find_hm">Find Home</button>
                            </div>	 */}
                            <div className="form-group-wrap">
                                <div className="form-group">
                                    <input type="text" placeholder="Enter an Address, Neighbourhood" />
                                </div>
                            </div>
                            <button type="submit" className="btn style2 search_button">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section className="agent-wrap ptb-50">
            <div className="container">
                <div className="row align-items-center mb-25">
                    <div className="col-xl-6 col-lg-8 col-md-8">
                        <div className="profuct-result">
                            <p>We found <span>{total_agents}</span> agents available for you</p>
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
                                <option value={1}>Alphabet</option>
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
                <div className="row justify-content-center">
                    {agents.map((agent, i) => (
                        <div key={"list-card-"+i} className="col-xl-3 col-lg-6 col-md-6">
                            <AgentCard key={"agent-card-"+i} agent={agent} index={(i+1)}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </>
    )
}

export async function getServerSideProps() {
    //users?limit=10&offset=0&role=Agent&includeDeleted=false',
    let limit = 25;
    let offset = 0;
    const type = 'Agent';
    const payload = {url : `${fubApiBaseUrl}/users/?limit=${limit}&offset=${offset}&role=${type}&includeDeleted=false`, method : 'GET', data: []}
    const res = await fetchFubApi(payload);
    // Pass data to the page via props
    // console.log("res:", res)
    return {
        props: {
            agentList : res,
        },
    };
}