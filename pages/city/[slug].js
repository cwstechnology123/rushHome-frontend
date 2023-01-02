import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router"
import List from "../../components/property/List";
import Grid from "../../components/skeletonLoader/Grid";
import cityList from "../../utils/cityList.json"
import stateNames from "../../utils/states_hash.json"
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";

export default function CityDetails() {
    const router = useRouter();
    const { query } = router;
    const cityDetail = cityList.find(city => city.slug === query.slug);

    const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
    const { data, error, isLoading, isValidating } = useSWR({url : `${apiBaseUrl}/properties/search`, method : 'POST', data: {
        stateOrProvince: cityDetail?.state_code,
        city: cityDetail?.name,
        page_limit: 12
    }}, fetcher);

    if(cityDetail){
        return (
            <>
            <section className="pt-50 pb-75 text-center citybanner_box">
                <div className="container">
                <h1 className="aos-init aos-animate">{cityDetail.name}, {stateNames[cityDetail.state_code.toUpperCase()]}</h1>  
                <p className="aos-init">{cityDetail.description}</p>                     
                </div>
                {/* <img src={`../${cityDetail.main_image}`} /> */}
                <Image src={`/${cityDetail.main_image}`} width={1920} height={900} alt={cityDetail.name} loading="lazy" />
            </section>
            <section className="property-slider-wrap pt-50 pb-75 property_wraper demographi_box">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title style1 text-left mb-40">
                                <h2>{cityDetail.name} Demographics</h2>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="hw-card">
                                <div className="hw-img">
                                <img src="../assets/img/age.jpg" />
                                </div>
                                <div className="hw-info">
                                <h3>{cityDetail.demographics.median_age}</h3>
                                <p>Median Age</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="hw-card">
                                <div className="hw-img">
                                <img src="../assets/img/Household.jpg" />
                                </div>
                                <div className="hw-info">
                                <h3>{cityDetail.demographics.household_income}</h3>
                                <p>Median Household Income</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="hw-card">
                                <div className="hw-img">
                                <img src="../assets/img/Educated.jpg" />
                                </div>
                                <div className="hw-info">
                                <h3>{cityDetail.demographics.college_educated}</h3>
                                <p>College Educated</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="hw-card">
                                <div className="hw-img">
                                <img src="../assets/img/homeprice.jpg" />
                                </div>
                                <div className="hw-info">
                                <h3>{cityDetail.demographics.avg_home_price}</h3>
                                <p>Avg : Home Price</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="property-slider-wrap pt-50 pb-75 property_wraper">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title style1 text-left mb-40">
                                <h2>Recent Listings</h2>
                                <hr />
                            </div>
                        </div>
                        {(isLoading) ?<Grid item={3} /> : (data) ?
                            <>
                            <List properties={data.properties? data.properties : null} stateCode={cityDetail?.slug} />
                            </>
                            :
                            <>
                            <div className="col-md-12 text-center">
                                No Records...
                            </div>
                            </>
                        }
                    </div>
                    
                    {/*  */}
                </div>
            </section>
            <section className="property-slider-wrap pb-75 property_wraper map_box">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-title style1 text-left mb-40">
                                <h2>Location</h2>
                                <hr />
                                <div className="city_map" dangerouslySetInnerHTML={{ __html: cityDetail.location }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }else{
        return (<></>)
    }
}