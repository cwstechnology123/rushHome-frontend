import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import AgentCard from "../components/agent/AgentCard";
import { Pagination } from "react-headless-pagination";
import { fetchFubApi, fubApiBaseUrl } from "../utils/fubFetchApi";

export default function FindAnAgent() {
    // const router = useRouter();
    // const total_agents = agentList._metadata?.total || 0;
    // const agents = agentList?.users || [];
    const options = [
        { value: 'name', label: 'Ascending' },
        { value: '-name', label: 'Descending' }
    ];
    // const sortAgent = (filterValues) => {
    //     // console.log(filterValues)
        
    //     const path = router.pathname;
    //     const { query } = router;
    //     query['sort'] = filterValues;
    //     router.push({ pathname: path, query: query });
    // };
    const showPerPage = 5;
    const [agents, setAgents] = useState(null);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(1);
    const [totalAgent, setTotalAgent] = useState(0);
    const [sort, setSort] = useState('name');

    const handleShowAgent = async (page) => {
        let limit = showPerPage * page;
        try {
            const payload = {url : `${fubApiBaseUrl}/users/?limit=${limit}&offset=${showPerPage}&sort=${sort}&role=Agent&includeDeleted=false`, method : 'GET', data: []}
            const res = await fetchFubApi(payload);
            console.log("Respond",res)
            if(res.status){
                setTotalAgent(res.message._metadata.total);
                setAgents(res.message.users);
                setPage(page)
            }else{

            }
        } catch (error) {
            
        }
    }
    useEffect(() => {
        handleShowAgent(0);
        let total = totalAgent;
        
        if(total > showPerPage){
            if(total % showPerPage === 0){
                setPageCount(() =>(total/showPerPage));
                setPage(0);
            }else{
                setPageCount(() =>(Math.floor(total/showPerPage) + 1));
                setPage(0);
            }
        }else{
            setPage(0);
        }
        
    }, []);
    return (
      <>
        <Toaster />
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
                            <p>We found <span>{totalAgent}</span> agents available for you</p>
                        </div>
                    </div>
                    {/* <div className="col-xl-2 col-lg-4 col-md-4">
                        <p className="sort_by">
                            
                        </p>
                    </div> */}
                    <div className="col-xl-3 col-lg-4 col-md-4">
                        <div className="filter-item-cat">
                            <Dropdown
                                options={options} placeholder={<span className="sorted_list"><i className="fa fa-list-ul"/> Sort By Alphabet</span>}
                                onChange={ev => {setSort(ev.value); }}
                                // arrowClosed={<span className="arrow-closed" />}
                                // arrowOpen={<span className="arrow-open" />}
                            />
                        </div>
                    </div>
                    {/* <div className="lising_icons">
                        <span className="list_icon"><i className="fa fa-th-list" aria-hidden="true" /></span>
                        <span className="list_th_icon"><i className="fa fa-th" aria-hidden="true" /></span>
                    </div> */}
                </div>
                <div className="row justify-content-center">
                    {!!agents && agents.map((agent, i) => (
                        <div key={"list-card-"+i} className="col-xl-3 col-lg-6 col-md-6">
                            <AgentCard agent={agent}/>
                        </div>
                    ))}
                </div>
                <Pagination
                    currentPage={page}
                    setCurrentPage={handleShowAgent}
                    totalPages={pageCount}
                    edgePageCount={2}
                    middlePagesSiblingCount={2}
                    className="pagination list-style mt-10"
                    truncableText="..."
                    truncableClassName=""
                    >
                    <Pagination.PrevButton className=""><i className="fa fa-angle-left" style={{fontSize: 1.2+'rem'}} />  Prev</Pagination.PrevButton>

                    <div className="flex items-center justify-center flex-grow">
                        <Pagination.PageButton
                        activeClassName="active"
                        inactiveClassName=""
                        className=""
                        />
                    </div>

                    <Pagination.NextButton className="">Next  <i className="fa fa-angle-right" style={{fontSize: 1.2+'rem'}} /> </Pagination.NextButton>
                </Pagination>
            </div>
        </section>
      </>
    )
}
/*
export async function getServerSideProps({ query }) {
    //users?limit=10&offset=0&role=Agent&includeDeleted=false',
    let limit = 5;
    let offset = 0;
    const type = 'Agent';
    const sort = query.sort? (query.sort=='name-asc'? 'name' : '-name') : 'name';
    const payload = {url : `${fubApiBaseUrl}/users/?limit=${limit}&offset=${offset}&sort=${sort}&role=${type}&includeDeleted=false`, method : 'GET', data: []}
    const res = await fetchFubApi(payload);
    // Pass data to the page via props
    console.log("res:", res)
    if(res.status){
        
    }
    return {
        props: {
            agentList : res,
        },
    };
}
*/