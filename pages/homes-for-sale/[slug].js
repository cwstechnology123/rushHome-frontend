import { useEffect, useState } from 'react';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import Footer from "../../components/layouts/BuyFooter";
import BuyLayout from "../../components/layouts/BuyLayout";
import SearchFilter from "../../components/buy/SearchFilter";
import BuyPropertyList from "../../components/buy/BuyPropertyList";
import useWindowDimensions from "../../components/buy/useWindowDimensions";
import stateCodes from "../../utils/states_hash.json";
import { apiBaseUrl, fetchApi } from '../../utils/fetchApi';
import { Toaster } from 'react-hot-toast';
import BuyMap from '../../components/buy/BuyMap';
import Geocode from "react-geocode";

const HomesForSale = ({
    properties,
    address,
    refKey,
    sendData,
    deviceType
}) => {
    Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN);
    Geocode.setLanguage("en");
    Geocode.setRegion("us"); 
    const [geoaddress, setGeoaddress] = useState(address);
    const [uikey, setUikey] = useState(refKey)
    const [zoom, setZoom] = useState(5);
    const [bounds, setBounds] = useState(null);
    const [mapView, setMapView] = useState(null)
    const [center, setCenter] = useState({
        lat: 39.000000,
        lng: -75.500000,
    })
    const [propertyList, setPropertyList] = useState(properties);
    const [filterList, setFilterList] = useState();
    const [highlight, setHighlight] = useState(null);
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
    useEffect(()=>setFilterList(propertyList), [propertyList]);
    useEffect(()=>{
        Geocode.fromAddress(geoaddress).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                setCenter({
                    lat: lat,
                    lng: lng,
                });
                setZoom((uikey==='county' || uikey==='stateOrProvince')? 8 : 11);
            },
            (error) => {
              console.error(error);
            }
        );
    }, [geoaddress, uikey]);
    return (
        <>
        <Toaster/>
        <SearchFilter mapView={mapView} setMapView={setMapView} sendData={sendData} propertyList={propertyList} setPropertyList={setPropertyList} setGeoaddress={setGeoaddress} setUikey={setUikey}/>
        <section className="listing_wraper mt-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 d-md-none d-lg-block p-0 d-none d-sm-block d-sm-none d-md-block">
                        {(deviceType==='desktop') && (
                            <div id="mapBox" style={{width:'100%', height: mapHeight, position: 'relative'}}>
                                <BuyMap 
                                    zoom={zoom}
                                    setZoom={setZoom}
                                    bounds={bounds}
                                    setBounds={setBounds}
                                    mapView={mapView}
                                    setMapView={setMapView}
                                    center={center}
                                    setCenter={setCenter}
                                    highlight={highlight}
                                    propertyList={propertyList || []} 
                                    filterList={filterList || []}
                                    setFilterList={setFilterList}
                                    deviceType={deviceType}
                                />
                            </div>
                        )}
                        
                    </div>
                    <div className="col-xl-7 col-lg-7 col-12" style={{height: mapHeight, overflowY: 'auto'}}>
                        <BuyPropertyList properties={propertyList || []} setHighlight={setHighlight} />
                        <Footer />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

HomesForSale.getLayout = function(page) {
    return <BuyLayout>{page}</BuyLayout>;
};

export async function getServerSideProps({ query, req, res }){
    let slug = query.slug;
    const UA = req.headers['user-agent'];
    const isMobile = Boolean(UA.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ));
    let refKey= 'city';
    let refVal = null;
    let address=(slug.substring(0, slug.lastIndexOf('-'))).replace('-', ' ');
    let stateCode=slug.substring(slug.lastIndexOf('-')+1);
    
    const searchStr = JSON.parse(getCookie('search', { req, res}));
    if(searchStr){
        refKey = searchStr.refKey;
        refVal = searchStr.refVal;
    }
    else{
        refVal = address;
        setCookie('search', {refKey, refVal});
    }
    let sendData = {
        stateOrProvince : stateCode,
        // page_limit: 1500 
    }
    if(refKey !== "stateOrProvince"){
        sendData = {...sendData, [refKey]: refVal};
        if(refVal){
            address = stateCode.toUpperCase()+", USA, "+address+" "+refKey;
        }
    }else{
        address = stateCodes[stateCode.toUpperCase()]+", USA";
    }
    // const response = await fetchApi({url: `${apiBaseUrl}/properties/search`, method: 'POST', data: sendData});
    return {
        props: {
            properties : null, //response && response.data?.properties,
            address: address,
            refKey: refKey,
            sendData: sendData,
            deviceType: isMobile ? 'mobile' : 'desktop',
        },
    };
}

export default HomesForSale;