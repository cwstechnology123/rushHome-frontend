
export default function PropertyTax({tax}) {
    // {
    //     "cityTownTax": "",
    //     "countyTax": "5463.00",
    //     "countyTaxPaymentFrequency": "Annually",
    //     "assessmentYear": "2022",
    //     "taxAnnualAmount": "5790.00",
    //     "taxAssessmentAmount": "424833.00",
    //     "taxBlock": "",
    //     "taxLot": "4",
    //     "taxOtherAnnualAssessmentAmount": "",
    //     "taxYear": 2022,
    //     "schoolTax": "0.00",
    //     "schoolTaxPaymentFrequency": "",
    //     "landUseCode": "R",
    //     "landAssessmentAmount": "",
    //     "cleanGreenAssessedYN": "",
    //     "zoning": "RM",
    //     "zoningDescription": ""
    // }
    return (
        <div className="location_box heading_line">
            <div className="col-xl-12 col-lg-12">
                <div className="section-title style1 text-left mb-40">
                    <h2>Taxes and Assessment</h2>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <table className="tabel table-borderless table-line" width={`100%`}>
                                <tbody>
                                    <tr>
                                        <td width={'50%'}>Tax Annual Amt/Year:</td>
                                        <th width={'50%'} className="text-left">
                                        {tax.taxAnnualAmount? (
                                            Number(tax.taxAnnualAmount).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0})
                                        ) : '-'}
                                        {/* /{tax.taxYear? tax.taxYear : '-'} */}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>School Tax:</td>
                                        <th width={'50%'} className="text-left">
                                        {tax.schoolTax? (
                                            Number(tax.schoolTax).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0})
                                        ) : '-'}
                                        {tax.schoolTaxPaymentFrequency && (`/${tax.schoolTaxPaymentFrequency}`)}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>County Tax:</td>
                                        <th width={'50%'} className="text-left">
                                            {tax.countyTax? (
                                                Number(tax.countyTax).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0})
                                            ) : '-'}
                                            {/* {tax.countyTaxPaymentFrequency && (`/${tax.countyTaxPaymentFrequency}`)} */}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>City/Town Tax:</td>
                                        <th width={'50%'} className="text-left">{tax.cityTownTax? tax.cityTownTax : '-'}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Clean Green Assess:</td>
                                        <th width={'50%'} className="text-left">{tax.cleanGreenAssessedYN? (tax.cleanGreenAssessedYN=='Y'? 'Yes' : 'No') : '-'}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Zoning:</td>
                                        <th width={'50%'} className="text-left">{tax.zoning? tax.zoning : '-'}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <table className="tabel table-borderless table-line" width={`100%`}>
                                <tbody>
                                    <tr>
                                        <td width={'50%'}>Tax Assessed Value:</td>
                                        <th width={'50%'} className="text-left">
                                        {tax.taxAssessmentAmount? (
                                            Number(tax.taxAssessmentAmount).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0})
                                        ) : '-'}
                                        {/* {tax.assessmentYear && (`/${tax.assessmentYear}`)} */}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Land Use Code:</td>
                                        <th width={'50%'} className="text-left">{tax.landUseCode? tax.landUseCode : 0}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Block/Lot:</td>
                                        <th width={'50%'} className="text-left">
                                            {tax.taxBlock? tax.taxBlock : '-'} / {tax.taxLot? tax.taxLot : '-'}
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