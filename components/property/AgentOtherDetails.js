import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import useSWR from "swr";
import PropertyOtherLoader from "../skeletonLoader/PropertyOtherLoader";
import PropertyLocation from "./PropertyLocation";
import PropertyAssociation from "./PropertyAssociation";
import PropertyTax from "./PropertyTax";
import PropertyOffice from "./PropertyOffice";
import PropertyCompensation from "./PropertyCompensation";
import PropertyOtherDetail from "./PropertyOtherDetail";
import PropertyMap from "./PropertyMap";

export default function AgentOtherDetails({ propertyId, agent, address, position }) {
    const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
    const { data, error, isLoading, isValidating } = useSWR({url : `${apiBaseUrl}/properties/additional-details/${propertyId }`, method : 'GET'}, fetcher)
    // console.log("Others: ",location, office, tax, compensation, association, otherDetails, attachment)

    if(!data){
        return <PropertyOtherLoader/ >;
    }

    return (
        <div className="row">
            <div className="col-12">
                {data.propertyAdditionalDetails.location && (
                    <PropertyLocation location={data.propertyAdditionalDetails.location} address={address} />
                )}
                {data.propertyAdditionalDetails.association && (
                    <PropertyAssociation association={data.propertyAdditionalDetails.association} />
                )}
                {data.propertyAdditionalDetails.tax && (
                    <PropertyTax tax={data.propertyAdditionalDetails.tax} />
                )}
                {data.propertyAdditionalDetails.office && (
                    <PropertyOffice office={data.propertyAdditionalDetails.office} agent={agent} />
                )}
                {data.propertyAdditionalDetails.compensation && (
                    <PropertyCompensation compensation={data.propertyAdditionalDetails.compensation}/>
                )}
                {data.propertyAdditionalDetails.otherDetails && (
                    <PropertyOtherDetail listing={data.propertyAdditionalDetails.otherDetails}/>
                )}
                <div className="row">
                    {/* <div className="col-md-6">

                    </div> */}
                    <div className="col-md-6">
                    <PropertyMap address={`${address.fullAddress}\n${address.city}, ${address.stateCode} ${address.postalCode}`} position={position}/>
                    </div>
                </div>
            </div>
        </div>
    )
}