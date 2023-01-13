import { useEffect } from "react";
import useSWR from "swr";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import Grid from "../skeletonLoader/Grid";
import PropertyCard from "../property/PropertyCard";

export default function AgentActiveListing({ firstName, email, setActiveCount }){

    const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
    const { data, error, isLoading, isValidating } = useSWR({url : `${apiBaseUrl}/properties/agent`, method : 'POST', data: {listAgentEmail: email, mlsStatus: "ACTIVE"}}, fetcher);
    useEffect(()=>{
        if(data){
            setActiveCount(data.properties.length)
        }
    }, [data]);

    return (
        <>
        {
            (isLoading)?
                <section className="property-slider-wrap pt-100 pb-75 property_wraper">
                    <div className="container">
                        <Grid item={3} />
                    </div>
                </section>
            :
            ((data && !!data.properties.length) && (
                <section className="property-slider-wrap pt-100 pb-75 property_wraper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="section-title style1 text-left mb-40">
                                <h2>{firstName} Listings</h2>
                                <hr />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                        {data.properties && data.properties.slice(0, 6).map((property, i) => (
                            <div key={`first${i}`} className="col-xl-4 col-lg-6 col-md-6">
                                <PropertyCard property={property}/>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>
            ))
        } 
        </>
    )
}