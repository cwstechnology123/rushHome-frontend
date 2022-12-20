export default function PropertyHeader({ price, area, address }) {

    return (
        <>
        <div className="top_slide_nav">
            <div className="left_nav_slide">
            <button type="submit" className="btn style2 excl_button">Exclusive</button>
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
            <button type="button" className="btn style3 button_top">
                <i className="fa fa-print" aria-hidden="true" /> Print </button>
            </div>
        </div>
        <div className="slide_content">
            <div className="slide_content_left">
                <h2>{address.fullAddress}</h2>
                <p>{address.county}, {address.city}, {address.stateCode} {address.postalCode}</p>
            </div>
            <div className="slide_content_right">
                <h2>{Number(price).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0 })}</h2>
                <p>{Number(area).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 2 })}/SqFt</p>
            </div>
        </div>
        {/* <div className="row">
            <div className="col-7">
                <button type="button" className="btn style2 excl_button">Exclusive</button>
                <span> <i className="fa fa-clock-o" /> Month Ago </span>
                <span> <i className="fa fa-eye"  /> 15892 Views </span>
            </div>
            <div className="col-5 text-right">
                <div className="d-none d-sm-block">
                    <button type="button" className="btn style3 button_top"><i className="fa fa-heart-o"  /> Saved</button>
                    <button type="button" className="btn style3 button_top"><i className="fa fa-share"  /> Share</button>
                    <button type="button" className="btn style3 button_top"><i className="fa fa-print"  /> Print</button>
                </div>

                <ul className="property-share d-block d-sm-none">
                    <li>
                    <a href="#"><i className="fa fa-heart-o"  /></a>
                    </li>
                    <li>
                    <a href="#"><i className="fa fa-share"  /></a>
                    </li>
                    <li>
                    <a href="#"><i className="fa fa-print"  /></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="row my-4">
            <div className="col-6">
                <h2>{address.fullAddress}</h2>
                <span>{address.county}, {address.city}, {address.stateCode} {address.postalCode}</span>
            </div>
            <div className="col-6 text-right">
                <h2>{Number(price).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0 })}</h2>
                <span>${area}/SqFt</span>
            </div>
        </div> */}
        </>
    )
}