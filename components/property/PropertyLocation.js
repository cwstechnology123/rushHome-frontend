const PropertyLocation = ({location, address}) => {
    // {
    //     "inCityLimitsYN": "N",
    //     "legalSubdivision": "SWAN POINT SUB",
    //     "subdivisionName": "SWAN POINT",
    //     "mlsAreaMinor": "",
    //     "mlsAreaMajor": "",
    //     "schoolDistrictName": "CHARLES COUNTY PUBLIC SCHOOLS",
    //     "elementarySchool": "",
    //     "highSchool": "LA PLATA",
    //     "middleOrJuniorSchool": ""
    // }
    return (
        <div className="location_box heading_line">
            <div className="col-xl-12 col-lg-12">
                <div className="section-title style1 text-left mb-40">
                    <h2>Locations</h2>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <table className="tabel table-borderless table-line" width={`100%`}>
                                <tbody>
                                    <tr>
                                        <td width={'50%'}>Country:</td>
                                        <th width={'50%'} className="text-left">{address.county}, {address.stateCode}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>In City Limit:</td>
                                        <th width={'50%'} className="text-left">{location.inCityLimitsYN=='Y'? 'Yes' : 'No'}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>MLS Area:</td>
                                        <th width={'50%'} className="text-left">{location.mlsAreaMajor}{`, ${location.mlsAreaMinor}`}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Legal Supervision:</td>
                                        <th width={'50%'} className="text-left">{location.legalSubdivision}</th>
                                    </tr>
                                    <tr>
                                        <td width={'50%'}>Subdiv/Neigh:</td>
                                        <th width={'50%'} className="text-left">{location.subdivisionName}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <table className="tabel table-borderless table-line" width={`100%`}>
                                <tbody>
                                    <tr>
                                        <td width={'50%'}>School District:</td>
                                        <th width={'50%'} className="text-left">{location.schoolDistrictName}</th>
                                    </tr>
                                    {location.highSchool && (
                                        <tr>
                                            <td width={'50%'}>High School:</td>
                                            <th width={'50%'} className="text-left">{location.highSchool}</th>
                                        </tr>
                                    )}
                                    {location.middleOrJuniorSchool && (
                                        <tr>
                                            <td width={'50%'}>Middle/Junior School:</td>
                                            <th width={'50%'} className="text-left">{location.middleOrJuniorSchool}</th>
                                        </tr>
                                    )}
                                    {location.elementarySchool && (
                                        <tr>
                                            <td width={'50%'}>Elementary School:</td>
                                            <th width={'50%'} className="text-left">{location.elementarySchool}</th>
                                        </tr>
                                    )}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PropertyLocation;