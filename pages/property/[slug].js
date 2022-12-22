import { useSession } from "next-auth/react";
import { HiOutlineHomeModern, HiOutlineStar } from "react-icons/hi2";
import { GiCrane, GiBathtub, GiHomeGarage } from "react-icons/gi";
import { MdSquareFoot } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import PropertyHeader from "../../components/property/PropertyHeader";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import PropertyImages from "../../components/property/PropertyImages";
import { FaBath, FaHotTub } from "react-icons/fa";
import NonAccount from "./NonAccount";
import PropertyAgentCard from "../../components/property/PropertyAgentCard";
import PropertyAmenities from "../../components/property/PropertyAmenities";
import SimilarHomes from "../../components/property/SimilarHomes";
import AgentOtherDetails from "../../components/property/AgentOtherDetails";
import ClientBox from "./ClientBox";
import ClientOtherDetails from "../../components/property/ClientOtherDetails";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const PropertyDetails = ({
    propertyDetails: {
        id,
        listingId,
        listingKey,
        propertyType,
        yearBuilt,
        heatingYN,
        listPrice,
        description,
        bedroomsTotal,
        fireplacesTotal,
        bathroomsTotalInteger,
        roomsTotal,
        garageSpaces,
        totalGarageAndParkingSpaces,
        areaTotal,
        county,
        city,
        postalCode,
        stateOrProvince,
        fullStreetAddress,
        standardStatus,
        listPictureURL,
        listPicture2URL,
        listPicture3URL,
        pricePerSquareFoot,
        virtualTourURLUnbranded,
        geography,
        unparsedAddress,
        amenities,
        agent,
        directions,
        tag
    }
}) => {
    const componentRef = useRef();
    const { data: session } = useSession();
    const handlePrint = useReactToPrint({
        content: () => {
            const tableStat = componentRef.current.cloneNode(true);
            const AgentElm = document.getElementById('agent-com');
            const PrintElem = document.createElement('div');
            PrintElem.style.cssText = 'margin: 20px; width: 100%';
            // const statElem = <span>{fullStreetAddress}</span>;
            // PrintElem.innerHTML = statElem;
            PrintElem.appendChild(tableStat);
            // PrintElem.appendChild(AgentElm);
            return PrintElem;
        },
        copyStyles: true,
        documentTitle: fullStreetAddress
    })
    const SessionSideBox = () => {
        if(session){
            if(session.user.role === 'client'){
                return <ClientBox 
                        type={propertyType}
                        price={listPrice}
                        pricearea={pricePerSquareFoot}
                        address={unparsedAddress}
                        amenity={{
                            beds: bedroomsTotal,
                            baths: bathroomsTotalInteger,
                            garages: totalGarageAndParkingSpaces,
                            area: areaTotal
                        }}
                    />
            }else if(session.user.role === 'agent'){
                return <PropertyAgentCard 
                    agent={agent} 
                    address={`${fullStreetAddress}, ${city}, ${stateOrProvince} ${postalCode}`}
                />
            }
        }else{
            return <NonAccount address={`${fullStreetAddress}, ${city}, ${stateOrProvince} ${postalCode}`}/>
        }
        return null;
    }

    const ClientComponent = () => {
        if(session){
            if(session.user.role === 'client'){
                return (
                    <ClientOtherDetails 
                        propertyId={id} 
                        address={`${fullStreetAddress}\n${city}, ${stateOrProvince} ${postalCode}`}
                        position={geography}
                        tourLink={virtualTourURLUnbranded}
                        price={listPrice}
                    />
                )
            }else{
                return null
            }
        }
        return (
            <ClientOtherDetails 
                propertyId={id} 
                address={`${fullStreetAddress}\n${city}, ${stateOrProvince} ${postalCode}`}
                position={geography}
                tourLink={virtualTourURLUnbranded}
                price={listPrice}
            />
        )
    }
    return (
        <>
        <section className="style3 ptb-50 product_box">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-8 col-lg-8 col-12" ref={componentRef}>
                        <div className="slider_wraper">
                            {!session && (
                                <PropertyHeader 
                                    handlePrint={handlePrint}
                                    price={listPrice}
                                    area={pricePerSquareFoot}
                                    address={{
                                        fullAddress: fullStreetAddress,
                                        county: county,
                                        city: city,
                                        stateCode: stateOrProvince,
                                        postalCode: postalCode
                                    }}
                                    tag={tag}
                                />
                            )}
                            <PropertyImages 
                                defaulImages={{
                                    picture3URL: listPicture3URL,
                                    picture2URL: listPicture2URL,
                                    pictureURL: listPictureURL
                                }}
                                listingKey={listingKey}
                            />
                        </div>
      
                        <div className="descriptions_box heading_line mt-4">
                            <div className="col-xl-12 col-lg-12">
                            <div className="section-title style1 text-left mb-40">
                                <h2>Descriptions</h2>
                                <hr />
                                <p className="text-justify">{description}</p>
                            </div>
                            </div>
                        </div>
                        <div className="pagebreak" />
                        <div className="factfeature_box heading_line">
                            <div className="col-xl-12 col-lg-12">
                                <div className="section-title style1 text-left mb-40">
                                    <h2>Facts &amp; Features</h2>
                                    <hr />
                                    <div className="fact_iconbox">
                                        <ul>
                                            <li>
                                                <span><HiOutlineHomeModern/></span>
                                                <p>Type</p>
                                                <h3>Single</h3>
                                            </li>
                                            {yearBuilt!="" && (
                                                <li>
                                                <span><GiCrane/></span>
                                                <p>Build Year</p>
                                                <h3>{yearBuilt}</h3>
                                                </li>
                                            )}
                                            {heatingYN==="Y" && (
                                                <li>
                                                <span><FaHotTub/></span>
                                                <p>Heating</p>
                                                <h3>Radiant</h3>
                                                </li>
                                            )}
                                            {areaTotal!="" && (
                                                <li>
                                                <span><MdSquareFoot/></span>
                                                <p>SQFT</p>
                                                <h3>
                                                {areaTotal? Number(areaTotal).toLocaleString('en-US') : '-'}
                                                </h3>
                                                </li>
                                            )}
                                            {bedroomsTotal!="" && (
                                                <li>
                                                <span><IoBedOutline/></span>
                                                <p>Bedroom</p>
                                                <h3>{bedroomsTotal}</h3>
                                                </li>
                                            )}
                                            {bathroomsTotalInteger && (
                                                <li>
                                                <span><FaBath/></span>
                                                <p>Bathroom</p>
                                                <h3>{bathroomsTotalInteger}</h3>
                                                </li>
                                            )}
                                            {totalGarageAndParkingSpaces!="" && (
                                                <li>
                                                <span><GiHomeGarage/></span>
                                                <p>Garage</p>
                                                <h3>{totalGarageAndParkingSpaces}</h3>
                                                </li>
                                            )}
                                            {standardStatus!="" && (
                                                <li>
                                                <span><HiOutlineStar/></span>
                                                <p>Status</p>
                                                <h3>{standardStatus}</h3>
                                                </li>
                                            )}
                                        </ul>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="factfeature_box heading_line">
                            <div className="col-xl-12 col-lg-12">
                                <div className="section-title style1 text-left mb-40">
                                    <h2>Additional Details</h2>
                                    <hr />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <table className="tabel table-borderless table-line" width={`100%`}>
                                                <tbody>
                                                    <tr>
                                                        <th width={'50%'}>Property ID:</th>
                                                        <td width={'50%'} className="text-left">{listingId}</td>
                                                    </tr>
                                                    <tr>
                                                        <th width={'50%'}>Property Type:</th>
                                                        <td width={'50%'} className="text-left">{propertyType}</td>
                                                    </tr>
                                                    {/* <tr>
                                                        <th width={'50%'}>Rooms:</th>
                                                        <td width={'50%'} className="text-left">{roomsTotal? roomsTotal : '-'}</td>
                                                    </tr> */}
                                                    <tr>
                                                        <th width={'50%'}>Size:</th>
                                                        <td width={'50%'} className="text-left">{areaTotal? Number(areaTotal).toLocaleString('en-US') : '-'} SqFt</td>
                                                    </tr>
                                                    <tr>
                                                        <th width={'50%'}>Garage:</th>
                                                        <td width={'50%'} className="text-left">{totalGarageAndParkingSpaces? totalGarageAndParkingSpaces : '-'}</td>
                                                    </tr>
                                                    {/* <tr>
                                                        <th width={'50%'}>Garage Size:</th>
                                                        <td width={'50%'} className="text-left">{garageSpaces? garageSpaces : '-'} SqFt</td>
                                                    </tr> */}
                                                    <tr>
                                                        <th width={'50%'}>Year Build:</th>
                                                        <td width={'50%'} className="text-left">{yearBuilt}</td>
                                                    </tr>
                                                </tbody>
                                                
                                            </table>
                                        </div>
                                        <div className="col-md-6">
                                            <table className="tabel table-borderless table-line" width={`100%`}>
                                                <tbody>
                                                    <tr>
                                                        <th width={'50%'}>Price:</th>
                                                        <td width={'50%'} className="text-left">{Number(listPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD',minimumFractionDigits: 0 })}</td>
                                                    </tr>
                                                    <tr>
                                                        <th width={'50%'}>Property Status:</th>
                                                        <td width={'50%'} className="text-left">For Sale</td>
                                                    </tr>
                                                    <tr>
                                                        <th width={'50%'}>Bedrooms:</th>
                                                        <td width={'50%'} className="text-left">{bedroomsTotal? bedroomsTotal : '-'}</td>
                                                    </tr>
                                                    <tr>
                                                        <th width={'50%'}>Bathrooms:</th>
                                                        <td width={'50%'} className="text-left">{bathroomsTotalInteger? bathroomsTotalInteger : '-'}</td>
                                                    </tr>
                                                    <tr>
                                                        <th width={'50%'}>Fireplace:</th>
                                                        <td width={'50%'} className="text-left">{fireplacesTotal? fireplacesTotal : '-'}</td>
                                                    </tr>
                                                    {/* <tr>
                                                        <th width={'50%'}>Bath Size:</th>
                                                        <td width={'50%'} className="text-left">50 SqFt</td>
                                                    </tr>
                                                    <tr>
                                                        <th width={'50%'}>Label:</th>
                                                        <td width={'50%'} className="text-left">Bestseller</td>
                                                    </tr> */}
                                                </tbody>
                                                
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <PropertyAmenities amenities={amenities} /> 
                        <div className="pagebreak" />
                        <ClientComponent />                        
                    </div>
                    <div className="col-xl-4 col-lg-4 col-12">
                        <div className="right_box_listing" id="exTab3">
                            <SessionSideBox/>
                        </div>
                    </div>
                </div>
                <div id="agent-com">
                    <AgentOtherDetails 
                        propertyId={id} 
                        agent={agent} 
                        address={{
                            fullAddress: fullStreetAddress,
                            county: county,
                            city: city,
                            stateCode: stateOrProvince,
                            postalCode: postalCode
                        }}
                        position={geography}
                        directions={directions}
                    />
                {/* {(session && session.user.role === 'agent') && (
                    
                )}  */}
                </div>
            </div>
        </section>

        <SimilarHomes />
        </>
    )
}

export default PropertyDetails

export async function getServerSideProps({ params: { slug } }) {
    const propertyId = slug.substring(slug.lastIndexOf('-') + 1)
    const payload = {url : `${apiBaseUrl}/properties/details/${propertyId}`, method : 'GET'}
    const res = await fetchApi(payload)
    // Pass data to the page via props
    console.log(res.data)
    if(res.data){
        return {
            props: {
                propertyDetails : res && res.data?.propertyDetails,
            },
        };
    }
    return {
        props: {
            propertyDetails : null,
        },
    };
}