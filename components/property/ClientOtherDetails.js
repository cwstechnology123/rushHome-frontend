import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import useSWR from "swr";
import Mortgage from "./Mortgage";
import PropertyMap from "./PropertyMap";
import VirtualTour from "./VirtualTour";
import PropertyTax from "./PropertyTax";
import PropertyAssociation from "./PropertyAssociation";

export default function ClientOtherDetails({
    propertyId,
    address,
    position,
    tourLink,
    price,
    hoa,
    ptax
}){
    const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
    const { data, error, isLoading, isValidating } = useSWR({url : `${apiBaseUrl}/properties/additional-details/${propertyId }`, method : 'GET'}, fetcher)

    return (
        <>
        {(tourLink!='') && <VirtualTour tourLink={tourLink?.replace(/^http:\/\//i, 'https://')} />}
        {/* <div className="pagebreak" /> */}
        <PropertyMap address={address} position={position}/>
        <Mortgage price={price} hoa={hoa} ptax={ptax}/>
        {/* <div className="pagebreak" /> */}
        {data?.propertyAdditionalDetails.association && (
            <PropertyAssociation association={data.propertyAdditionalDetails.association} />
        )}
        {data?.propertyAdditionalDetails.tax && (
            <PropertyTax tax={data.propertyAdditionalDetails.tax} />
        )}
        </>
    )
}