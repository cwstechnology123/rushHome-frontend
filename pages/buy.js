import { useEffect, useRef, useState } from "react";
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Map from "../components/gmap/Map";
import PropertyCard from "../components/property/PropertyCard";
import SearchFilter from "../components/SearchFilter";
import { apiBaseUrl, fetchApi } from "../utils/fetchApi";
import useSupercluster from "use-supercluster";
import SingleMarker from '../components/gmap/CustomSingleMarker';
import ClusterMarker from '../components/gmap/ClusterMarkerr';
import MultiMarker from '../components/gmap/MultiMarker';

const render = (status) => {
    if (status === Status.FAILURE) {
      return <p>Map failed to load</p>;
    }
    return <p>Loading...</p>;
};

export default function Buy({ properties }) {
    const [searchFilter, setSerachFilter] = useState(false);
    const [filterProperties, setFilterProperties] = useState([]);
    const [highlight, setHighlight] = useState(null);
    const [draw, setDraw] = useState(false);
    useEffect(()=>{
        setFilterProperties(properties)
    }, [properties]);
    //SETUP MAP
    const poly = useRef(null);
    const [haspoly, setHaspoly] = useState(false);
    const [clicks, setClicks] = useState([]);
    const [bounds, setBounds] = useState(null);
    const [zoom, setZoom] = useState(5);
    const [center, setCenter] = useState({
        lat: 39.2587655033923,
        lng: -76.78864682699246,
    })
    const onMapClick = (e) => {
        //console.log(e)
        //infowindow.close();
        setClicks([...clicks, e.latLng]);
        //setHighlightedHotel(null);
    };
    const onMapIdle = (map) => {
        let bounds = map.getBounds();
        // bounds: { ne, nw, se, sw }\
        // console.log(map.getBounds().getNorthEast().lat())
        // console.log(map.getBounds().getNorthEast().lng())
        // console.log(map.getBounds().getSouthWest().lat())
        // console.log(map.getBounds().getSouthWest().lng())\
        // [westLng, southLat, eastLng, northLat]
        setBounds({
            ne: {
                lat: bounds.getNorthEast().lat(), //y2
                lng: bounds.getNorthEast().lng() //x2
            },
            nw: {
                lat: bounds.getNorthEast().lat(), //y2
                lng: bounds.getSouthWest().lng() //x1
            },
            se: {
                lat: bounds.getSouthWest().lat(), //y1
                lng: bounds.getNorthEast().lng() //x2
            },
            sw: {
                lat: bounds.getSouthWest().lat(), //y1
                lng: bounds.getSouthWest().lng() //x1
            },
        });
        setZoom(map.getZoom());
        setCenter(map.getCenter().toJSON());
    }
    //FILTER PROPERTY DATA
    useEffect(() => {
        // bounds: { ne, nw, se, sw }\
        let filterProps = {};

        if(bounds){
            filterProps = properties.filter(property => {
                let lat = parseFloat(property.geography.lat);
                let lng = parseFloat(property.geography.lng);
                if(
                    ((lat > bounds.se.lat && lat > bounds.sw.lat) &&
                    (lat < bounds.ne.lat && lat < bounds.nw.lat) &&
                    (lng > bounds.nw.lng && lng > bounds.sw.lng) &&
                    (lng < bounds.ne.lng && lng < bounds.se.lng) ) && 
                    containsInPolygon(property.geography)
                ){
                    return property;
                }
            })   
        }else{
            filterProps = properties
        }
        
        setFilterProperties(filterProps);
        //console.log("Inside: ",filterProperties)
        //console.log(bounds)
    }, [bounds, haspoly])
    //MARKER CLUSTERING
    const points = filterProperties.map(home => ({
        type: "Feature",
        properties: { cluster: false, homeId: home.id, hotel: home },
        geometry: {
          type: "Point",
          coordinates: [
            parseFloat(home.geography.lng),
            parseFloat(home.geography.lat)
          ]
        }
    }));
    //console.log(points)
    const { clusters, supercluster } = useSupercluster({
        points,
        bounds: bounds? [
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
        ] : [],
        zoom,
        options: { radius: 75, maxZoom: 20 }
    });
    //console.log(clusters)
    const clusterSets = clusters.map(cluster => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const {
        cluster: isCluster,
        point_count: pointCount
        } = cluster.properties;
        if (isCluster) {
            if(zoom>=17){
                //console.log(clusterChilds[0].properties.hotel)
                return (
                    <MultiMarker
                        key={`multicluster-${cluster.id}`}
                        position={{
                            lat: latitude,
                            lng: longitude
                        }}
                        clusterId={cluster.id}
                        pointCount={pointCount}
                        hotels={supercluster.getChildren(cluster.id)}
                    >
                    </MultiMarker>
                )
            }else{
                return (
                    <ClusterMarker
                        key={`cluster-${cluster.id}`}
                        clusterId={cluster.id}
                        position={{
                            lat: latitude,
                            lng: longitude
                        }}
                        pointCount={pointCount}
                        pointsLength={points.length}
                    />
                );
            }
        }
        return (
            <SingleMarker key={`hotel-marker-${cluster.properties.homeId}`} hotel={cluster.properties.hotel} highlight={highlight}/>
        );
    });
    //MAP DRAW
    const setMapDraw = (draw, map) => {
        //console.log(draw)
        setDraw(draw);
        if(draw){
            drawFreeHand(map)
        }else{
            clearMapDraw();
            enableMapOption(map);
        }
    }
    const clearMapDraw = () => {
        if(poly.current != null){
            setHaspoly(false);
            poly.current.setMap(null);
            poly.current = null;
        }
    }
    const drawFreeHand = (map) =>
    {
        if(poly.current){
            clearMapDraw();
        }
        
        disableMapOption(map);
        //the polygon
        
        google.maps.event.addListenerOnce(map, 'mousedown', function(e) {
            poly.current = new google.maps.Polyline({map:map,clickable:false, draggable: false});

            var move=google.maps.event.addListener(map,'mousemove',function(e){
                //console.log(polyDraw)
                poly.current?.getPath().push(e.latLng);
            });

            if(poly.current != null){
                //mouseup-listener
                google.maps.event.addListenerOnce(map,'mouseup',function(e){
                    google.maps.event.removeListener(move);
                    var path=poly.current?.getPath();
                    poly.current.setMap(null);
                    poly.current = new google.maps.Polygon({map:map,path:path, fillOpacity: 0});
                    google.maps.event.clearListeners(map, 'mousedown');
                    
                    enableMapOption(map);
                    setHaspoly(true);
                    setDraw(false);
                });
            }
        });     
    }
    const disableMapOption = (map) => {
        map.setOptions({
            draggable: false, 
            zoomControl: false, 
            scrollwheel: false, 
            disableDoubleClickZoom: false,
            draggableCursor: 'crosshair'
        });
    }
    const enableMapOption = (map) =>{
        google.maps.event.clearInstanceListeners(map);
        map.setOptions({
            draggable: true, 
            zoomControl: true, 
            scrollwheel: true, 
            disableDoubleClickZoom: true,
            draggableCursor:''
        });
    }
    function containsInPolygon(point) {

        if(poly.current != null){
            var crossings = 0,
            path = poly.current.getPath();

            // for each edge
            for (var i=0; i < path.getLength(); i++) {
                var a = path.getAt(i),
                    j = i + 1;
                if (j >= path.getLength()) {
                    j = 0;
                }
                var b = path.getAt(j);
                if (rayCrossesSegment(point, a, b)) {
                    crossings++;
                }
            }

            // odd number of crossings?
            return (crossings % 2 == 1);
        }else{
            return true;
        }

        function rayCrossesSegment(point, a, b) {
            var px = parseFloat(point.lng),
                py = parseFloat(point.lat),
                ax = a.lng(),
                ay = a.lat(),
                bx = b.lng(),
                by = b.lat();
            if (ay > by) {
                ax = b.lng();
                ay = b.lat();
                bx = a.lng();
                by = a.lat();
            }
            // alter longitude to cater for 180 degree crossings
            if (px < 0) { px += 360 };
            if (ax < 0) { ax += 360 };
            if (bx < 0) { bx += 360 };

            if (py == ay || py == by) py += 0.00000001;
            if ((py > by || py < ay) || (px > Math.max(ax, bx))) return false;
            if (px < Math.min(ax, bx)) return true;

            var red = (ax != bx) ? ((by - ay) / (bx - ax)) : Infinity;
            var blue = (ax != px) ? ((py - ay) / (px - ax)) : Infinity;
            return (blue >= red);

        }
    };
    
    console.log("center", center, zoom);
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
        <section className="listing_wraper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6">
                        <div style={{width: '100%', height:'170vh', position: 'relative'}}>
                            <Wrapper
                                apiKey={process.env.GOOGLE_API_TOKEN}
                                render={render}
                            >
                                <Map
                                    center={center}
                                    zoom={zoom}
                                    minZoom={3}
                                    maxZoom={20}
                                    onMapIdle={onMapIdle}
                                    onMapClick={onMapClick}
                                    draw={draw}
                                    setMapDraw={setMapDraw}
                                    fullscreenControl={false}
                                    streetViewControl={true}
                                    mapTypeControl={true}
                                    zoomControl={true}
                                    clickableIcons={false}
                                >
                                    {clusterSets}
                                </Map>
                            </Wrapper>
                            {haspoly && (<button type="button" className="btn btn-danger btn-sm" style={{position: 'absolute', top: '2%', left: '2%', zIndex: 9}} onClick={clearMapDraw}>Clear Map Boundary</button>)}
                        </div>
                        
                    </div>
                    <div className="col-md-6 col-xl-6 col-lg-6">
                        <section className="listing-wrap px-3 pt-3">
                            <div className="row align-items-center mb-25">
                                <div className="col-xl-6 col-lg-8 col-md-8">
                                    <div className="profuct-result">
                                        <p>We found <span>{filterProperties.length}</span> properties available for you</p>
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
                                        <option value={1}>Top Selling</option>
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
                            <div className="row" style={{height: '970px', overflowY: 'auto'}}>
                                {filterProperties.map(property => (
                                    <div className="col-xl-6 col-lg-6 col-md-6" key={`property-block-${property.id}`} onMouseEnter={()=>setHighlight(property.id)} onMouseLeave={()=>setHighlight(null)}>
                                        <PropertyCard property={property}/>
                                    </div>
                                ))}
                                {filterProperties.length === 0 && (
                                    <div className="col-12"><h4 className="text-danger text-center">No result found</h4></div>
                                )}
                            </div>
                            <ul className="page-nav list-style mt-10">
                                <li><a href="#"><i className="fa fa-angle-left" style={{fontSize: 1.2+'rem'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;Prev</a></li>
                                <li><a className="active" href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">6</a></li>
                                <li><a href="#">Next&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-angle-right" style={{fontSize: 1.2+'rem'}}></i></a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
export async function getServerSideProps() {
    const payload = {url : `${apiBaseUrl}/properties/all/1/1000`, method : 'GET'}
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