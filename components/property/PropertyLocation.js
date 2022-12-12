const PropertyLocation = () => {
    
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
                                        <td>Country:</td>
                                        <th className="text-right">Kent, DE</th>
                                    </tr>
                                    <tr>
                                        <td>In City Limit:</td>
                                        <th className="text-right">No</th>
                                    </tr>
                                    <tr>
                                        <td>MLS Area:</td>
                                        <th className="text-right">Capital - Kent, Country (3423423)</th>
                                    </tr>
                                    <tr>
                                        <td>Legal Supervision:</td>
                                        <th className="text-right">Winding Ridge</th>
                                    </tr>
                                    <tr>
                                        <td>Subdiv/Neigh:</td>
                                        <th className="text-right">Winding Ridge</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-6">
                            <table className="tabel table-borderless table-line" width={`100%`}>
                                <tbody>
                                    <tr>
                                        <td>School District:</td>
                                        <th className="text-right">Capital</th>
                                    </tr>
                                    <tr>
                                        <td>High School:</td>
                                        <th className="text-right">Dover</th>
                                    </tr>
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