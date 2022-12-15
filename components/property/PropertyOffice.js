
export default function PropertyOffice({agent, office}) {

    return (
        <div className="location_box heading_line">
            <div className="col-xl-12 col-lg-12">
                <div className="section-title style1 text-left mb-40">
                    <h2>Listing Office</h2>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <table className="tabel table-borderless table-line" width={`100%`}>
                                <tbody>
                                    <tr>
                                        <td width={'25%'}>Listing Agent:</td>
                                        <th className="text-left">{agent.listAgentFullName} ({agent.listAgentMlsId}) (LIC#{agent.listAgentStateLicenseNumber})</th>
                                        <td>Phone:</td>
                                        <th className="text-left">{agent.listAgentOfficePhoneExt!="" && (`(${agent.listAgentOfficePhoneExt}) `)}{agent.listAgentOfficePhone}</th>
                                    </tr>
                                    <tr>
                                        <td width={'25%'}>Listing Agent Email:</td>
                                        <th className="text-left" colSpan={3}>{agent.listAgentEmail}</th>
                                    </tr>
                                    <tr>
                                        <td width={'25%'}>Responsible Broker</td>
                                        <th className="text-left" colSpan={3}></th>
                                    </tr>
                                    <tr>
                                        <td width={'25%'}>Listing Office:</td>
                                        <th className="text-left" colSpan={3}>{office.listOfficeName}{office.listOfficeMlsId!="" && (` (${office.listOfficeMlsId}) `)}<br />{office.listOfficeCounty}</th>
                                    </tr>
                                    <tr>
                                        <td width={'25%'}>Office Phone:</td>
                                        <th className="text-left" colSpan={3}>{office.listOfficePhoneExt!="" && (`(${office.listOfficePhoneExt}) `)}{office.listOfficePhone}</th>
                                    </tr>
                                    <tr>
                                        <td width={'25%'}>Office Email:</td>
                                        <th className="text-left">{office.listOfficeEmail}</th>
                                        <td>Office Fax:</td>
                                        <th className="text-left">{office.listOfficeFax}</th>
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