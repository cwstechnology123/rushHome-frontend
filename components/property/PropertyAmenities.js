
export default function PropertyAmenities({ amenities }) {
    // console.log(amenities)
    return (
        <div className="offices_box heading_line">
            <div className="section-title style1 text-left mb-40">
                <h2>Additional Features</h2>
                <hr />
                <div className="offices_features">
                    <ul>
                        {(amenities?.associationAmenities!="") && amenities.associationAmenities.split(',').map((item, i) => (
                            <li key={`aa-${i}`}>
                            <i className="fa fa-check"  />
                            {item}s
                            </li>
                        ))}
                        {(amenities?.interiorFeatures!="") && amenities.interiorFeatures.split(',').map((item, i) => (
                            <li key={`inf-${i}`}>
                            <i className="fa fa-check"  />
                            {item}
                            </li>
                        ))}
                        {(amenities?.exteriorFeatures!="") && amenities.exteriorFeatures.split(',').map((item, i) => (
                            <li key={`exf-${i}`}>
                            <i className="fa fa-check"  />
                            {item}
                            </li>
                        ))}
                        {(amenities?.buildingFeatures!="") && amenities.buildingFeatures.split(',').map((item, i) => (
                            <li key={`bldf-${i}`}>
                            <i className="fa fa-check"  />
                            {item}
                            </li>
                        ))}
                        {(amenities?.garageYN && amenities.garageYN==='Y') && (
                            <li key={`garage-yn`}>
                            <i className="fa fa-check"  />
                            Garage
                            </li>
                        )}
                        {(amenities?.cooling!="") && amenities.cooling.split(',').map((item, i) => (
                            <li key={`clng-${i}`}>
                            <i className="fa fa-check"  />
                            {item}
                            </li>
                        ))}
                        {(amenities?.basementYN && amenities.basementYN=='Y') && (
                            <li key={`bsemnt-yn`}>
                            <i className="fa fa-check"  />
                            Basement
                            </li>
                        )}
                        {(amenities?.centralAirYN && amenities.centralAirYN=='Y') && (
                            <li key={`cntrl-yn`}>
                            <i className="fa fa-check"  />
                            Central Air
                            </li>
                        )}
                        {(amenities?.poolPrivateYN && amenities.poolPrivateYN=='Y') && (
                            <li key={`pool-yn`}>
                            <i className="fa fa-check"  />
                            Private Pool
                            </li>
                        )}
                        {(amenities?.spaYN && amenities.spaYN=='Y') && (
                            <li key={`span-yn`}>
                            <i className="fa fa-check"  />
                            SPA
                            </li>
                        )}
                        {(amenities?.fireplaceYN && amenities.fireplaceYN=='Y') && (
                            <li key={`fireplc-yn`}>
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