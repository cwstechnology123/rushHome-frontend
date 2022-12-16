
export default function PropertyOtherDetail({ listing }) {
    // {
    //     "originalListPrice": "",
    //     "vacationRentalYN": "N",
    //     "listingAgreementType": "Exclusive Right",
    //     "listingServiceType": "Full Service",
    //     "prospectsExcludedYN": "",
    //     "dualAgencyYN": "",
    //     "possession": "Settlement,0-30 Days CD",
    //     "acceptableFinancing": "FHA,Conventional,USDA,VA",
    //     "ownerName": "",
    //     "listingSourceRecordKey": "801954336022",
    //     "listingSourceBusinessPartner": "BRIGHT",
    //     "saleType": "Standard"
    //     "daysOnMarket": "31",
    //     "cumulativeDaysOnMarket": ""
    // }
    return (
        <div className="location_box heading_line">
            <div className="col-xl-12 col-lg-12">
                <div className="section-title style1 text-left mb-40">
                    <h2>Listing Details</h2>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <table className="tabel table-borderless table-line" width={`100%`}>
                                <tbody>
                                    <tr>
                                        <td width={'50%'}>Original Price:</td>
                                        <th width={'50%'} className="text-left">{listing.originalListPrice!=""? (
                                            Number(listing.originalListPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD'})
                                        ) : '-'}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Vacation Rental:</td>
                                        <th width={'50%'} className="text-left">{listing.vacationRentalYN!=""? (
                                            listing.vacationRentalYN=='Y'? 'Yes' : 'No'
                                        ) : '-'}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Listing Agreement Type:</td>
                                        <th width={'50%'} className="text-left">{listing.listingAgreementType? listing.listingAgreementType : '-'}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Prospects Excluded:</td>
                                        <th width={'50%'} className="text-left">{listing.prospectsExcludedYN!=""? (
                                            listing.prospectsExcludedYN=='Y'? 'Yes' : 'No'
                                        ) : '-'}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Listing Service Type:</td>
                                        <th width={'50%'} className="text-left">{listing.listingServiceType? listing.listingServiceType : '-'}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Dual Agency:</td>
                                        <th width={'50%'} className="text-left">{listing.dualAgencyYN!=""? (
                                            listing.dualAgencyYN=='Y'? 'Yes' : 'No'
                                        ) : '-'}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Sale Type:</td>
                                        <th width={'50%'} className="text-left">{listing.saleType? listing.saleType : '-'}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Listing Term Begins:</td>
                                        <th width={'50%'} className="text-left">-</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Listing Entry Date:</td>
                                        <th width={'50%'} className="text-left">-</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Possession:</td>
                                        <th width={'50%'} className="text-left">{listing.possession? listing.possession : '-'}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Acceptable Financing:</td>
                                        <th width={'50%'} className="text-left">{listing.acceptableFinancing? listing.acceptableFinancing : '-'}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <table className="tabel table-borderless table-line" width={`100%`}>
                                <tbody>
                                    <tr>
                                        <td width={'50%'}>Owner Name:</td>
                                        <th width={'50%'} className="text-left">{listing.ownerName? listing.ownerName : '-'}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>DOM/CDOM:</td>
                                        <th width={'50%'} className="text-left">
                                        {listing.daysOnMarket? listing.daysOnMarket : '-'} / 
                                        {listing.cumulativeDaysOnMarket? listing.cumulativeDaysOnMarket : '-'}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Original MLS Name:</td>
                                        <th width={'50%'} className="text-left">{listing.listingSourceBusinessPartner? listing.listingSourceBusinessPartner : '-'}</th>
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