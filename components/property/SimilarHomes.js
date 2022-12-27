import { useEffect, useState } from "react";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import useSWR from "swr";
import Grid from "../skeletonLoader/Grid";
import List from "./List";
import PropertyCard from "./PropertyCard";

export default function SimilarHomes({
    stataCode,
    price,
    beds,
    baths
}) {

    const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
    const { data, error, isLoading, isValidating } = useSWR({url : `${apiBaseUrl}/properties/similar`, method : 'POST', data: {
        bedroomsTotal: beds,
        bathroomsTotalInteger: baths,
        listPrice: price,
        stateOrProvince: stataCode
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
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p> */}
                            </div>
                        </div>
                    </div>
                    {(isLoading)? <Grid item={3} /> : (
                        data? (<>
                        <div className="row justify-content-center">
                            {data.properties.slice(0, 3).map((property, i) => (
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