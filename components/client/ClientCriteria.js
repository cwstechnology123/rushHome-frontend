
export default function ClientCriteria() {

    return (
        <>
        <div className="criteria_box">
            <h2>Criteria <button type="button" className="btn style1 criteria_edit">Edit Criteria</button></h2>
            <ul>
            <li>
                <i className="flaticon-double-bed" />
                3 Beds
            </li>
            <li>
                <i className="flaticon-bath-tub" />
                Bathrooms
            </li>
            <li>
                <i className="flaticon-square" />
                1,300 Sqft
            </li>
            <li>
                <i className="fa fa-usd" aria-hidden="true" />
                $750k - $1.2M
            </li>
            <li>
                <i className="fa fa-map-marker" aria-hidden="true" />
                Philadelphia
            </li>
            </ul>
        </div>
        </>
    )
}