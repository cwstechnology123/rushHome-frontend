import stateNames from "../../utils/states_hash.json"

export default function PropertyHeader({ price, area, address, tag, handlePrint }) {

    return (
        <>
        <div className="top_slide_nav">
            <div className="left_nav_slide">
            {tag && <button type="submit" className="btn style2 excl_button">{tag}</button>}
            <span>
                <i className="fa fa-clock-o" aria-hidden="true" /> Month Ago </span>
            <span>
                <i className="fa fa-eye" aria-hidden="true" /> 15892 Views </span>
            </div>
            <div className="right_slide_nav">
            <button type="button" className="btn style3 button_top">
                <i className="fa fa-heart-o" aria-hidden="true" /> Saved </button>
            <button type="button" className="btn style3 button_top">
                <i className="fa fa-share" aria-hidden="true" /> Share </button>
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