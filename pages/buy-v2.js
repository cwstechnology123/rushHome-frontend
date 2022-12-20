import { useEffect, useState } from "react";
// import useSWR from "swr";
import { apiBaseUrl, fetchApi } from "../utils/fetchApi";
import SearchFilter from "../components/buy/SearchFilter";
import BuyPropertyList from "../components/buy/BuyPropertyList";
import Footer from "../components/layouts/BuyFooter";
import useWindowDimensions from "../components/buy/useWindowDimensions";
import BuyMap from "../components/buy/BuyMap";

const Buy = ({ properties }) => { 

    const windowDimensions = useWindowDimensions();
    const [mapHeight, setMapHeight] = useState(windowDimensions?.height || 500);
    useEffect(() => {
        if(windowDimensions && (windowDimensions.width <= 768)){
            setMapHeight('auto');
        }else{
            let mh = (windowDimensions?.height)? windowDimensions.height : (window?.innerHeight || 500);
            setMapHeight(Math.round(mh * 0.7915));
        }
        
    }, [windowDimensions])
    // console.log(windowDimensions)
    const [searchFilter, setSerachFilter] = useState(false);
    const [highlight, setHighlight] = useState(null);
    const [bounds, setBounds] = useState(null);
    const [center, setCenter] = useState({
        lat: 39.2587655033923,
        lng: -76.78864682699246,
    })
    // const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
    // const { data, error, isLoading, isValidating } = useSWR({url : `${apiBaseUrl}/properties/all/1/1000`, method : 'GET'}, fetcher);

    const [filterData, setFilterData] = useState([]);
    useEffect(()=>{
        setFilterData(properties)
    }, [properties]);

    return (
        <>
            {searchFilter && <SearchFilter searchFilter={searchFilter} setSerachFilter={setSerachFilter}/>}
            <section className="bye_topnav">
                <div className="container-fluid">    
                    <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center">
                        <div className="col-12">
                            <div className="input-group">
                                <div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg></div>
                                <input type="text" className="form-control" id placeholder="Enter an address neighborhood" />
                            </div>
                        </div>
                        <div className="col-12">
                            <select className="form-select" id="inlineFormSelectPref">
                                <option selected disabled >Status</option>
                                <option value={1}>Active</option>
                                <option value={2}>Coming Soon</option>
                                <option value={3}>pending</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <select className="form-select" id="inlineFormSelectPref">
                                <option selected disabled >Bed</option>
                                <option value={1}>1+</option>
                                <option value={2}>2+</option>
                                <option value={3}>3+</option>
                                <option value={3}>4+</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <select className="form-select" id="inlineFormSelectPref">
                                <option selected disabled>Bath</option>
                                <option value={1}>1+</option>
                                <option value={2}>2+</option>
                                <option value={3}>3+</option>
                                <option value={3}>4+</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <select className="form-select" id="inlineFormSelectPref">
                                <option selected>Price</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button type="button" className="btn refresh_button" onClick={() => setSerachFilter(!searchFilter)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </button>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn style2 search_top">Search</button>
                        </div>
                        <div className="col-12">
                        <button type="reset" className="btn refresh_button">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                            </svg>
                        </button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="listing_wraper mt-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6 col-md-6 p-0 d-none d-sm-block d-sm-none d-md-block">
                            {/* FOR MAP */}
                            <div id="mapBox" style={{width:'100%', height: mapHeight, position: 'relative'}}>
                                <BuyMap
                                center={center}
                                setCenter={setCenter}
                                bounds={bounds}
                                setBounds={setBounds}
                                filterData={filterData}
                                setFilterData={setFilterData}
                                highlight={highlight}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-md-6" style={{height: mapHeight, overflowY: 'auto'}}>
                            {/* FOR PROPERTIES */}
                            <BuyPropertyList properties={filterData} setHighlight={setHighlight} />
                            <Footer />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
Buy.layout = 1;
export default Buy;

export async function getServerSideProps() {
    const payload = {url : `${apiBaseUrl}/properties/all/1/10000`, method : 'GET'}
    const res = await fetchApi(payload)
    // Pass data to the page via props

    if(res.data){
        return {
            props: {
                properties : res && res.data?.properties,
            },
        };
    }
    return {
        props: {
            properties : null,
        },
    };
}