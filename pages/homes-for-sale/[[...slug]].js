import { useEffect, useState } from "react";
// import useSWR from "swr";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import SearchFilter from "../../components/buy/SearchFilter";
import BuyPropertyList from "../../components/buy/BuyPropertyList";
import BuyLayout from "../../components/layouts/BuyLayout";
import Footer from "../../components/layouts/BuyFooter";
import useWindowDimensions from "../../components/buy/useWindowDimensions";
import BuyMap from "../../components/buy/BuyMap";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function HomesForSale({ properties }) { 
    
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

    const [filterData, setFilterData] = useState(properties);
    // useEffect(()=>{
    //     setFilterData(properties)
    // }, [properties]);
    // console.log(filterData.length)
    return (
        <>
            <SearchFilter bounds={bounds}/>
            
            <section className="listing_wraper mt-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-6 p-0 d-none d-sm-block d-sm-none d-md-block">
                            {/* FOR MAP */ }
                            <div id="mapBox" style={{width:'100%', height: mapHeight, position: 'relative'}}>
                                <BuyMap
                                    center={center}
                                    setCenter={setCenter}
                                    bounds={bounds}
                                    setBounds={setBounds}
                                    filterData={filterData || []}
                                    propertyList={properties || []}
                                    setFilterData={setFilterData}
                                    highlight={highlight}
                                />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-6" style={{height: mapHeight, overflowY: 'auto'}}>
                            {/* FOR PROPERTIES */}
                            <BuyPropertyList properties={filterData || []} setHighlight={setHighlight} />
                            <Footer />
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export async function getServerSideProps({ query }) {
    const payload = {url : `${apiBaseUrl}/properties/all/1/10000`, method : 'GET'}
    const res = await fetchApi(payload)
    // Pass data to the page via props
    // console.log(res)
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

HomesForSale.getLayout = function(page) {
  return <BuyLayout>{page}</BuyLayout>;
};