import moment from "moment";
import useSWR from "swr";
import { RWebShare } from "react-web-share";
import stateNames from "../../utils/states_hash.json"
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";

export default function PropertyHeader({ saved, mlsListDate, price, area, address, tag, handlePrint, handleSave, count, info, listingId }) {
    const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
    const { data, error, isLoading, isValidating } = useSWR({url : `${apiBaseUrl}/properties/views-count/${listingId }`, method : 'GET'}, fetcher);
    // console.log("count",data);
    const daysAgo = () => {
        let starts = moment(mlsListDate);
        let ends = moment();

        let diffs = moment.duration(ends.diff(starts));
        // console.log(diffs.days(), diffs.months(), diffs.years())
        if(diffs.years()){
            return diffs.years()+ ' Years Ago';
        }else if(diffs.months()){
            return diffs.months()+ ' Months Ago';
        }else if(diffs.days()){
            return diffs.days()+ ' Days Ago';
        }else{
            return '1 Day Ago'
        }
    }
    return (
        <>
        <div className="top_slide_nav new-top-slider-cls">
            <div className="left_nav_slide">
            {tag && <button type="submit" className="badge bg-dark p-2">{tag}</button>}
            <span>
                <i className="fa fa-clock-o" aria-hidden="true" /> {daysAgo()} </span>
            <span>
                <i className="fa fa-eye" aria-hidden="true" /> {isLoading? '-' : (data?.count | 0)} Views </span>
            </div>
            <div className="right_slide_nav">
            <button type="button" className="btn style3 button_top" onClick={handleSave}>
                <i className={`fa fa-heart${saved? '' : '-o'}`} aria-hidden="true" style={{color: saved? 'crimson !important' : 'white !important'}} /> Saved </button>
            <RWebShare
                data={info}
                onClick={() => console.log("shared successfully!")}
                sites={["facebook", "linkedin", "copy", "mail"]}
            >
                <button type="button" className="btn style3 button_top" ><i className="fa fa-share" aria-hidden="true" /> Share </button>
            </RWebShare>
            <button type="button" className="btn style3 button_top" onClick={handlePrint}>
                <i className="fa fa-print" aria-hidden="true" /> Print </button>
            </div>
        </div>
        <div className="slide_content">
            <div className="slide_content_left">
                <h2>{address.fullAddress}</h2>
                <p className="text-uppercase"> {address.city}, {stateNames[address.stateCode]} {address.postalCode}</p>
            </div>
            <div className="slide_content_right">
                <h2>{Number(price).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0 })}</h2>
                <p>{Number(area).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 2 })}/SqFt</p>
            </div>
        </div>
        </>
    )
}