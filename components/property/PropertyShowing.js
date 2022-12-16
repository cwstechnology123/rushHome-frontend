import { BsClock } from "react-icons/bs";
export default function PropertyShowing({ showing, office, directions }) {
    // {
    //     "lockBoxLocation": "",
    //     "lockBoxType": "",
    //     "showingContactPhone": "",
    //     "showingRequirements": "",
    //     "showingContactName": "",
    //     "showingRepresentativeType": "",
    //     "showingDays": "",
    //     "showingTimeClose": "",
    //     "showingTimeOpen": "",
    //     "showingMethod": "In-Person and Live Video"
    // }
    return (
        <div className="location_box heading_line">
            <div className="col-xl-12 col-lg-12">
                <div className="section-title style1 text-left mb-40">
                    <h2>Showing</h2>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <table className="tabel table-borderless table-line" width={`100%`}>
                                <tbody>
                                    <tr>
                                        <td>Appointment Phone:</td>
                                        <th className="text-left">
                                        {office.listOfficePhone? (
                                            `${office.listOfficePhoneExt} ${office.listOfficePhone}`
                                        ) : '-'}    
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Showing Contact:</td>
                                        <th className="text-left">{showing.showingContactPhone? showing.showingContactPhone : '-'}</th>
                                    </tr>
                                    {/* <tr>
                                        <td>Responsible Broker</td>
                                        <th className="text-left"></th>
                                    </tr> */}
                                    <tr>
                                        <td>Contact Name:</td>
                                        <th className="text-left">{showing.showingContactName? showing.showingContactName : '-'}</th>
                                    </tr>
                                    <tr>
                                        <td>Showing Requirements:</td>
                                        <th className="text-left">
                                        {showing.showingRequirements? showing.showingRequirements : '-'}
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Showing Method:</td>
                                        <th className="text-left">{showing.showingMethod? showing.showingMethod : '-'}</th>
                                        
                                    </tr>
                                    <tr>
                                        <td>Directions:</td>
                                        <th className="text-left">{showing.directions? showing.directions : '-'}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <table className="tabel table-borderless table-line" width={`100%`}>
                                <tbody>
                                    <tr>
                                        <td colSpan={2}>
                                            <BsClock /> Schedule a Showing
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Lock Box Type:</td>
                                        <th className="text-left">
                                        {showing.lockBoxType? showing.lockBoxType : '-'}    
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Lock Box Location:</td>
                                        <th className="text-left">
                                        {showing.lockBoxLocation? showing.lockBoxLocation : '-'}    
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