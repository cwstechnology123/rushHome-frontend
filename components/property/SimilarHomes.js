import { useEffect, useState } from "react";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import useSWR from "swr";
import Grid from "../skeletonLoader/Grid";
import PropertyCard from "./PropertyCard";

export default function SimilarHomes({
    geography,
    city,
    propertyId,
    stataCode,
    price,
    beds,
    baths
}) {

    const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
    const { data, error, isLoading, isValidating } = useSWR({url : `${apiBaseUrl}/properties/similar`, method : 'POST', data: {
        id: propertyId,
        bedroomsTotal: beds,
        bathroomsTotalInteger: baths,
        listPrice: price,
        city: city,
        latitude: geography.lat,
        longitude: geography.lng,
        page_limit: 3
    }}, fetcher);
    return (
        <section className="property-slider-wrap pb-75 property_wraper">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="simaler_house heading_line">
                            <div className="section-title style1 text-left mb-40">
                                <h2>Similar Homes You May Like</h2>
                                <hr />
                            </div>
                        </div>
                    </div>
                    {(isLoading)? <Grid item={3} /> : (
                        (data)? (<>
                        <div className="row">
                            {!!(data.properties.length) && data.properties.map((property, i) => (
                                <div key={`first${i}`} className="col-xl-4 col-lg-6 col-md-6">
                                    <PropertyCard property={property}/>
                                </div>
                            ))}
                        </div>
                        </>) : (<>
                        <div className="col-md-12 text-left">
                            No Records...
                        </div>
                        </>)
                        )
                    }
                </div>
            </div>
        </section>
    )
}