
export default function PropertyCompensation({ compensation }) {
    // {
    //     "buyerAgencyCompensationType": "% Of Gross",
    //     "buyerAgencyCompensation": "2.5",
    //     "subAgencyAdditionalCompensation": "",
    //     "subAgencyCompensation": "0",
    //     "subAgencyCompensationType": "% Of Gross",
    //     "dualVariableCompensationYN": "N",
    //     "compensationList": ""
    // }
    return (
        <div className="location_box heading_line">
            <div className="col-xl-12 col-lg-12">
                <div className="section-title style1 text-left mb-40">
                    <h2>Compensation</h2>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <table className="tabel table-borderless table-line" width={`100%`}>
                                <tbody>
                                    <tr>
                                        <td width={'50%'}>Buyer Agency Comp:</td>
                                        <th width={'50%'} className="text-left">
                                        {compensation.buyerAgencyCompensation? (`${compensation.buyerAgencyCompensation}${compensation.buyerAgencyCompensationType}`) : '-'}
                                        </th>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <table className="tabel table-borderless table-line" width={`100%`}>
                                <tbody>
                                    <tr>
                                        <td width={'50%'}>Sub Agency Comp:</td>
                                        <th width={'50%'} className="text-left">
                                        {compensation.subAgencyCompensation? (`${compensation.subAgencyCompensation}${compensation.subAgencyCompensationType}`) : '-'}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Dual/Var Comm:</td>
                                        <th width={'50%'} className="text-left">
                                        {compensation.dualVariableCompensationYN!=""? (compensation.dualVariableCompensationYN=='Y'? 'Yes' : 'No') : '-'}
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}