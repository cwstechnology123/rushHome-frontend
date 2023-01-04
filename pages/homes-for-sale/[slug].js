import { useEffect, useState } from "react";
// import useSWR from "swr";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import stateCodes from "../../utils/states_hash.json";
import SearchFilter from "../../components/buy/SearchFilter";
import BuyPropertyList from "../../components/buy/BuyPropertyList";
import BuyLayout from "../../components/layouts/BuyLayout";
import Footer from "../../components/layouts/BuyFooter";
import useWindowDimensions from "../../components/buy/useWindowDimensions";
import BuyMap from "../../components/buy/BuyMap";
import { useRouter } from "next/router";
import Geocode from "react-geocode";

export default function HomesForSale({ properties, stateCode, city }) { 

    Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN);
    Geocode.setLanguage("en");
    Geocode.setRegion("us"); 

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
    const [highlight, setHighlight] = useState(null);
    const [mapView, setMapView] = useState(null);
    const [bounds, setBounds] = useState(null);
    const [center, setCenter] = useState({
        lat: 39.000000,
        lng: -75.500000,
    })
    // const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
    // const { data, error, isLoading, isValidating } = useSWR({url : `${apiBaseUrl}/properties/all/1/1000`, method : 'GET'}, fetcher);
    useEffect(() => {
        if(stateCode && city){
            Geocode.fromAddress(`${stateCode}, ${city}`).then(
                (response) => {
                //   console.log("Rsponse",response.results[0])
                  const { lat, lng } = response.results[0].geometry.location;
                //   console.log(lat, lng);
                  setCenter({
                    lat: lat,
                    lng: lng,
                  });
                },
                (error) => {
                  console.error(error);
                }
            );
        }
        
    }, []);
    const [filterData, setFilterData] = useState(properties);
    return (
        <>
            <SearchFilter mapView={mapView}/>
            
            <section className="listing_wraper mt-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 d-md-none d-lg-block p-0 d-none d-sm-block d-sm-none d-md-block">
                            {/* FOR MAP */}
                            <div id="mapBox" style={{width:'100%', height: mapHeight, position: 'relative'}}>
                                <BuyMap
                                    initZoom={stateCode? ((city)? 10 : 8) : 0}
                                    center={center}
                                    setCenter={setCenter}
                                    setMapView={setMapView}
                                    bounds={bounds}
                                    setBounds={setBounds}
                                    filterData={filterData || []}
                                    propertyList={properties || []}
                                    setFilterData={setFilterData}
                                    highlight={highlight}
                                />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-12" style={{height: mapHeight, overflowY: 'auto'}}>
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
    let city="";
    let stateCode = "";
    let slug = query.slug;
    // slug.lastIndexOf('-')
    if(slug){
        city = (slug.substring(0, slug.lastIndexOf('-'))).replace('-', ' ');
        stateCode = slug.substring(slug.lastIndexOf('-')+1);
        if(stateCodes[stateCode.toUpperCase()].toLowerCase() === city){
            city = "";
        }
    }
    
    let sendData = {
        stateOrProvince : stateCode,
        city: city,
        page_limit: 10000
    }
    
    const payload = {url: `${apiBaseUrl}/properties/search`, method: 'POST', data: sendData}
    const res = await fetchApi(payload)

    if(res && res.data){
        return {
            props: {
                properties : res && res.data?.properties,
                stateCode: stateCode,
                city: city
            },
        };
    }
    return {
        props: {
            properties : null,
            stateCode: stateCode,
            city: city
        },
    };
}

HomesForSale.getLayout = function(page) {
  return <BuyLayout>{page}</BuyLayout>;
};