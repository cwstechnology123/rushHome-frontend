import { useEffect, useState } from 'react';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import Footer from "../../components/layouts/BuyFooter";
import BuyLayout from "../../components/layouts/BuyLayout";
import SearchFilter from "../../components/buy/SearchFilter";
import BuyPropertyList from "../../components/buy/BuyPropertyList";
import useWindowDimensions from "../../components/buy/useWindowDimensions";
import stateCodes from "../../utils/states_hash.json";
import { apiBaseUrl, fetchApi } from '../../utils/fetchApi';
import { toast, Toaster } from 'react-hot-toast';
import BuyMap from '../../components/buy/BuyMap';
import Geocode from "react-geocode";
import { containsInPolygon, filterHomesByPolygon } from '../../utils/mapUtils';
import { GrMap, GrUnorderedList } from 'react-icons/gr';

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
    const [mapList, setMapList] = useState(true);
    const [isIdle, setIsIdle] = useState(false);
    const [polyBound, setPolyBound] = useState(null);
    const [geoaddress, setGeoaddress] = useState(address);
    const [uikey, setUikey] = useState(refKey)
    const [zoom, setZoom] = useState(5);
    const [bounds, setBounds] = useState(null);
    const [mapView, setMapView] = useState(null)
    const [center, setCenter] = useState({
        lat: 39.000000,
        lng: -75.500000,
    })
    const [form, setForm] = useState({
        mlsStatus: "",
        bedroomsTotal: "",
        bathroomsTotalInteger: "",
        minListPrice: 100000,
        maxListPrice: 25000000,
    })
    const [propertyList, setPropertyList] = useState(properties);
    const [filterList, setFilterList] = useState();
    const [highlight, setHighlight] = useState(null);
    const windowDimensions = useWindowDimensions();
    const [mapHeight, setMapHeight] = useState(windowDimensions?.height || 500);
    const handleMainSearch = () => {
        if(propertyList){        
            console.log("called")   
            let properties = JSON.parse( JSON.stringify( propertyList.filter(home=>(containsInPolygon(home.geography, polyBound))) ));
            if(properties){
                setFilterList(properties);
            }else{
                setFilterList(propertyList);
            }
        }
    }
    const handleBoundSearch = async () => {
        toast.dismiss();
        const toastId = toast.loading("Loading....");
        try {
            const response = await fetchApi({url: `${apiBaseUrl}/properties/search`, method: 'POST', data: {...form, ...mapView}});
            if(response && response.data){
                setPropertyList(response.data.properties);
                console.log("Response:", response.data.properties)
                toast.dismiss();
            }else{
                toast.dismiss(toastId);
            }
        } catch (error) {
            toast.dismiss();
        }
    }
    useEffect(()=>{
        if(mapView && isIdle){
            setIsIdle(false)
            handleBoundSearch();
        }
        return ()=>null
    }, [mapView, isIdle, setIsIdle])
    useEffect(() => {
        let mh = (windowDimensions?.height)? windowDimensions.height : (window?.innerHeight || 500);
        if(deviceType==='mobile'){
            //0.835616438
            setMapHeight(Math.round(mh * 0.7516129032));
        }else{
            
            setMapHeight(Math.round(mh * 0.776255708));
        }
        console.log(windowDimensions?.height)
    }, [windowDimensions])
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
    useEffect(()=>{
        handleMainSearch()
    }, [propertyList, polyBound]);
    console.log(deviceType)
    return (
        <>
        <Toaster/>
        <SearchFilter 
            form={form} setForm={setForm}
            handleBoundSearch={handleBoundSearch}
            setGeoaddress={setGeoaddress} setUikey={setUikey}
        />
        <section className="listing_wraper mt-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-12" style={{display: ( (deviceType==='desktop')? 'block' : (mapList? 'block' : 'none') )}}>
                        <div id="mapBox" style={{width:'100%', height: mapHeight, position: 'relative'}}>
                            <BuyMap 
                                zoom={zoom}
                                setZoom={setZoom}
                                bounds={bounds}
                                setBounds={setBounds}
                                mapView={mapView}
                                setMapView={setMapView}
                                setIsIdle={setIsIdle}
                                center={center}
                                setCenter={setCenter}
                                highlight={highlight}
                                setPolyBound={setPolyBound}
                                filterList={filterList || []}
                                deviceType={deviceType}
                            />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-12" style={{height: mapHeight, overflowY: 'auto', display: ( (deviceType==='desktop')? 'block' : (mapList? 'none' : 'block') )}}>
                        <BuyPropertyList properties={filterList || []} setHighlight={setHighlight} />
                        <Footer />
                    </div>
                </div>
                {(deviceType==='mobile') && (
                    <button type="button" onClick={()=>setMapList(!mapList)} style={{position: 'absolute', zIndex: '99', bottom: '5%', left: '50%', transform: 'translate(-50%, -50%)',borderColor: '#fff', borderRadius: 10, padding: 10}}>{mapList? <GrUnorderedList/> : <GrMap/>}</button>
                )}
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