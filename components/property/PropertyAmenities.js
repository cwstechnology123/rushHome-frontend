
export default function PropertyAmenities({ amenities }) {

    return (
        <div className="offices_box heading_line">
            <div className="section-title style1 text-left mb-40">
                <h2>Offices Amenities</h2>
                <hr />
                <div className="offices_wraper">
                    <ul>
                        {(amenities.associationAmenities!="") && amenities.associationAmenities.split(',').map(item => (
                            <li>
                            <i className="fa fa-check"  />
                            {item}
                            </li>
                        ))}
                        {(amenities.interiorFeatures!="") && amenities.interiorFeatures.split(',').map(item => (
                            <li>
                            <i className="fa fa-check"  />
                            {item}
                            </li>
                        ))}
                        {(amenities.exteriorFeatures!="") && amenities.exteriorFeatures.split(',').map(item => (
                            <li>
                            <i className="fa fa-check"  />
                            {item}
                            </li>
                        ))}
                        {(amenities.buildingFeatures!="") && amenities.buildingFeatures.split(',').map(item => (
                            <li>
                            <i className="fa fa-check"  />
                            {item}
                            </li>
                        ))}
                        {(amenities.garageYN && amenities.garageYN==='Y') && (
                            <li>
                            <i className="fa fa-check"  />
                            Garage
                            </li>
                        )}
                        {amenities.cooling && (
                            <li>
                            <i className="fa fa-check"  />
                            {amenities.cooling}
                            </li>
                        )}
                        {amenities.parkingTypes && (
                            <li>
                            <i className="fa fa-check"  />
                            {amenities.parkingTypes}
                            </li>
                        )}
                        {(amenities.basementYN && amenities.basementYN=='Y') && (
                            <li>
                            <i className="fa fa-check"  />
                            Basement
                            </li>
                        )}
                        {(amenities.centralAirYN && amenities.centralAirYN=='Y') && (
                            <li>
                            <i className="fa fa-check"  />
                            Central Air
                            </li>
                        )}
                        {(amenities.poolPrivateYN && amenities.poolPrivateYN=='Y') && (
                            <li>
                            <i className="fa fa-check"  />
                            Private Pool
                            </li>
                        )}
                        {(amenities.spaYN && amenities.spaYN=='Y') && (
                            <li>
                            <i className="fa fa-check"  />
                            SPA
                            </li>
                        )}
                        {(amenities.fireplaceYN && amenities.fireplaceYN=='Y') && (
                            <li>
                            <i className="fa fa-check"  />
                            Fireplace
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}