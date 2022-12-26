
export default function PropertyAssociation({association}) {
    // {
    //     "associationYN": "Y",
    //     "associationFee": "220.00",
    //     "associationFeeFrequency": "Semi-Annually"
    //      associationFeeIncludes
    // }
    return (
        <div className="location_box heading_line">
            <div className="col-xl-12 col-lg-12">
                <div className="section-title style1 text-left mb-40">
                    <h2>Association / Community Info</h2>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <table className="tabel table-borderless table-line" width={`100%`}>
                                <tbody>
                                    <tr>
                                        <td width={'25%'}>HOA:</td>
                                        <th width={'25%'} className="text-left">{association.associationYN!=""? (association.associationYN=='Y'? 'Yes' : 'No') : '-'}</th>
                                        <td width={'25%'}>HOA Fee:</td>
                                        <th width={'25%'} className="text-left">
                                        {association.associationFee && (
                                            Number(association.associationFee).toLocaleString('en-US', { style: 'currency', currency: 'USD'})
                                        )}
                                        {association.associationFeeFrequency!=""? (`/${association.associationFeeFrequency}`) : '-'}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td width={'25%'}>Association Fee Inc.:</td>
                                        <th colSpan={3} className="text-left" style={{wordBreak:'break-all'}}>{association.associationFeeIncludes? association.associationFeeIncludes : '-'}</th>
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