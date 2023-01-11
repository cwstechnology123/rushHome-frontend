import { useEffect, useState } from "react";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import stateCodes from "../../utils/states_hash.json";
import SearchFilter from "../../components/buy/SearchFilter";
import BuyPropertyList from "../../components/buy/BuyPropertyList";
import BuyLayout from "../../components/layouts/BuyLayout";
import Footer from "../../components/layouts/BuyFooter";
import useWindowDimensions from "../../components/buy/useWindowDimensions";
import BuyMap from "../../components/buy/BuyMap";
import Geocode from "react-geocode";
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { Toaster } from "react-hot-toast";

export default function HomesForSale({ properties, stateCode, city,refKey, refValue, sendData, deviceType }) { 
    // console.log(deviceType)
    const [propertyList, setPropertyList] = useState(properties);
    const [filterData, setFilterData] = useState([]);
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
        if(stateCode){
            Geocode.fromAddress(`${stateCode.toUpperCase()}, ${city}`).then(
                (response) => {
                // console.log("Rsponse",response.results[0])
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
    useEffect(()=>setFilterData(propertyList), [propertyList]);
    console.log(bounds)
    return (
        <>
            <Toaster/>
            <SearchFilter mapView={mapView} sendData={sendData} setPropertyList={setPropertyList}/>
            
            <section className="listing_wraper mt-0">
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className="col-xl-5 col-lg-5 d-md-none d-lg-block p-0 d-none d-sm-block d-sm-none d-md-block">
                            {/* FOR MAP */}
                            {deviceType==='desktop' && (
                                <div id="mapBox" style={{width:'100%', height: mapHeight, position: 'relative'}}>
                                    <BuyMap
                                        initZoom={stateCode? ((refKey==='city')? 10 : 8) : 0}
                                        center={center}
                                        setCenter={setCenter}
                                        setMapView={setMapView}
                                        bounds={bounds}
                                        setBounds={setBounds}
                                        filterData={filterData || []}
                                        propertyList={propertyList || []}
                                        setFilterData={setFilterData}
                                        highlight={highlight}
                                    />
                                </div>
                            )}
                            
                        </div>
                        
                        <div className="col-xl-7 col-lg-7 col-12" style={{height: mapHeight, overflowY: 'auto'}}>
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

export async function getServerSideProps({ query, req, res }) {
    const UA = req.headers['user-agent'];
    const isMobile = Boolean(UA.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ))
    const searchStr = getCookie('search', { req, res});
    let refKey= 'city';
    let refVal = null;
    let city="";
    let stateCode="";
    let slug = query.slug;
    city = (slug.substring(0, slug.lastIndexOf('-'))).replace('-', ' ');
    stateCode = slug.substring(slug.lastIndexOf('-')+1);
    if(searchStr){
        const searchObj = JSON.parse(searchStr);
        refKey = searchObj.refKey;
        refVal = searchObj.refVal;
        if(refVal){
            city = city+" "+refKey;
        }
        // console.log(refKey,refVal)
    }
    else{
        refVal = city;
        if(refVal){
            city = city+" "+refKey;
        }
        setCookie('search', {refKey, refVal});
    }
    let sendData = {
        stateOrProvince : stateCode,
        page_limit: 1500 
    }
    if(refKey !== "stateOrProvince"){
        sendData = {...sendData, [refKey]: refVal};
    }

    const payload = {url: `${apiBaseUrl}/properties/search`, method: 'POST', data: sendData}
    const response = await fetchApi(payload)
    // console.log(response)
    if(response && response.data){
        return {
            props: {
                properties : response && response.data?.properties,
                stateCode: stateCodes[stateCode.toUpperCase()],
                city: city,
                refKey: refKey,
                refValue: refVal,
                deviceType: isMobile ? 'mobile' : 'desktop',
            },
        };
    }
    return {
        props: {
            properties : null,
            stateCode: stateCodes[stateCode.toUpperCase()],
            city: city,
            refKey: refKey,
            refValue: refVal,
            deviceType: isMobile ? 'mobile' : 'desktop'
        },
    };
}

HomesForSale.getLayout = function(page) {
  return <BuyLayout>{page}</BuyLayout>;
};