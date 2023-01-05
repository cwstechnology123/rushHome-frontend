import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useReactToPrint } from "react-to-print";
import { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { MdSquareFoot } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { FaBath, FaHotTub } from "react-icons/fa";
import { HiOutlineHomeModern, HiOutlineStar } from "react-icons/hi2";
import { GiCrane, GiBathtub, GiHomeGarage } from "react-icons/gi";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import SimilarHomes from "../../components/property/SimilarHomes";
import ClientBox from "../../components/property/ClientBox";
import NonAccount from "../../components/property/NonAccount";
import PropertyHeader from "../../components/property/PropertyHeader";
import PropertyImages from "../../components/property/PropertyImages";
import PropertyAmenities from "../../components/property/PropertyAmenities";
import PropertyAgentCard from "../../components/property/PropertyAgentCard";
import ClientOtherDetails from "../../components/property/ClientOtherDetails";
import AgentOtherDetails from "../../components/property/AgentOtherDetails";

const PropertyDetails = ({
    propertyDetails: {
        id,
        slug,
        listingId,
        listingKey,
        listOfficeName,
        mlsListDate,
        propertyType,
        yearBuilt,
        heatingYN,
        listPrice,
        description,
        bedroomsTotal,
        fireplacesTotal,
        bathroomsTotalInteger,
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
        tag,
        count,
        associationFee,
        taxAnnualAmount
    }
}) => {
    const router = useRouter();
    const componentRef = useRef();
    const { data: session, loading } = useSession();
    const [saved, setSaved] = useState(false);
    const [fubObj, setFubObj] = useState(null);
    const [shareInfo, setShareInfo] = useState({});

    //  SETTING FUB DATA OBJ
    useEffect(() => {
        setFubObj({
            propertyURL: `${process.env.NEXT_PUBLIC_HOST_NAME}/property/${slug}`,
            property: {
                street: fullStreetAddress,
                city: city,
                state: stateOrProvince,
                code: postalCode,
                mlsNumber: listingId,
                price: listPrice,
                forRent: false,
                url: `${process.env.NEXT_PUBLIC_HOST_NAME}/property/${slug}`,
                type: propertyType,
                bedrooms: bedroomsTotal,
                bathrooms: bathroomsTotalInteger,
                area: areaTotal,
                lot: ''
            }
        });
        setShareInfo({
            text: 'Check out this property from RushHome.',
            url: `${process.env.NEXT_PUBLIC_HOST_NAME}/property/${slug}`,
            title: `${fullStreetAddress}, ${city}, ${stateOrProvince} ${postalCode}`,
        });
    }, []);
    //HANDLING PAGE PRINT
    const handlePrint = useReactToPrint({
        content: () => {
            const tableStat = componentRef.current.cloneNode(true);
            const AgentElm = document.getElementById('agent-com');
            const PrintElem = document.createElement('div');
            PrintElem.style.cssText = 'margin: 20px; width: 100%';
            PrintElem.appendChild(tableStat);
            return PrintElem;
        },
        copyStyles: true,
        documentTitle: fullStreetAddress
    })
    //HANDLING PROPERTY SAVED
    const handleSave = async () => {
        if(session){
            try{
                let toastId = toast.loading('Waiting...');
                const userId = session && session.user?.userId;
                const accessToken = session && session.user?.accessToken;
                const isSaved = !saved ? 1 : 0;
                const payload = {url : `${apiBaseUrl}/properties/fav-update`, accessToken: accessToken, method : 'POST', data : {userId: userId, propertyId: id.toString(), isSaved: isSaved.toString()}}
                const res = await fetchApi(payload)
                console.log(isSaved, saved)
                if (res && res.type == 'success') {
                    toast.success(isSaved? 'Added to Favorites' : 'Removed from Favorites');
                    setSaved(!saved);
                }
                toast.dismiss(toastId);
            } catch (error) {
                console.log(error)
                toast.error('Failed to update');
                return false;
            };
        }else{

            localStorage.setItem('overridePath', '/property/'+slug);
            router.push('/auth/client-signin')
        }
    }

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
                            garages: parseInt(garageSpaces),
                            area: areaTotal
                        }}
                        agent={agent}
                        fubObj={fubObj}
                    />
            }else if(session.user.role === 'agent'){
                return <PropertyAgentCard 
                    agent={agent} 
                    address={`${fullStreetAddress}, ${city}, ${stateOrProvince} ${postalCode}`}
                />
            }
        }else{
            return <NonAccount address={`${fullStreetAddress}, ${city}, ${stateOrProvince} ${postalCode}`} fubObj={fubObj}/>
        }
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
                        hoa={associationFee}
                        ptax={taxAnnualAmount}
                    />
                )
            }else{
                return null;
            }
        }
        return (
            <ClientOtherDetails 
                propertyId={id} 
                address={`${fullStreetAddress}\n${city}, ${stateOrProvince} ${postalCode}`}
                position={geography}
                tourLink={virtualTourURLUnbranded}
                price={listPrice}
                hoa={associationFee}
                ptax={taxAnnualAmount}
            />
        )
    }
    useEffect(() => {
        // console.log('check saved property')
        if(session && !loading){
            // console.log('===============')
            const userId = session && session.user?.userId;
            const accessToken = session && session.user?.accessToken;
            isSavedProperty(userId, accessToken) 
        }
    }, [session, loading, id]);

    async function isSavedProperty(userId, accessToken) {
        try{
            const payload = {url : `${apiBaseUrl}/users/profile/${userId}`, accessToken: accessToken, method : 'GET'}
            const res = await fetchApi(payload)
            if (res && res.type == 'success') {
                let propertyIds = res.data.profile && res.data.profile.propertyIds ? res.data.profile.propertyIds.split(',') : []
                // console.log(propertyIds)
                setSaved(propertyIds.includes(id.toString()))
            }
        } catch (error) {
            // console.log(error)
            return false;
        };
    }

    return (
        <>
        <Toaster />
        {/* MAIN BLOCK */}
        <section className="style3 ptb-50 product_box">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-12" ref={componentRef}>
                        <div className="slider_wraper">
                            {!session && (
                                <PropertyHeader 
                                    info={shareInfo}
                                    saved={saved}
                                    mlsListDate={mlsListDate}
                                    handlePrint={handlePrint}
                                    handleSave={handleSave}
                                    price={listPrice}
                                    area={pricePerSquareFoot}
                                    address={{
                                        fullAddress: fullStreetAddress,
                                        county: county,
                                        city: city,
                                        stateCode: stateOrProvince,
                                        postalCode: postalCode
                                    }}
                                    listingId={id}
                                    tag={tag}
                                    count={count}
                                />
                            )}
                            <PropertyImages 
                                info={shareInfo}
                                saved={saved}
                                userSession={session}
                                handlePrint={handlePrint}
                                handleSave={handleSave}
                                defaulImages={{
                                    picture3URL: listPicture3URL,
                                    picture2URL: listPicture2URL,
                                    pictureURL: listPictureURL
                                }}
                                listingKey={listingKey}
                            />
                        </div>
                        <div className="descriptions_box heading_line mt-4">
                            <div className="section-title style1 mb-40">
                                <h2>Descriptions</h2>
                                <hr />
                                <p className="text-justify">{description}</p>
                                <h6 className="mt-3">Listed by {listOfficeName || '-'}</h6>
                            </div>
                        </div>
                        <div className="factfeature_box heading_line">
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
                                            <h3>{parseInt(garageSpaces)}</h3>
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
                        <div className="factfeature_box heading_line">
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
                                                    <td width={'50%'} className="text-left">{garageSpaces? parseInt(garageSpaces) : '-'}</td>
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
                                                    <td width={'50%'} className="text-left">{standardStatus? standardStatus : '-'}</td>
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
                        <PropertyAmenities amenities={amenities} /> 
                        <ClientComponent />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-12">
                        <div className="right_box_listing">
                            <SessionSideBox />
                        </div>
                    </div>
                </div>
                <div id="agent-com">
                    {(session && session.user.role === 'agent') && (
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
                    )} 
                </div>
            </div>
        </section>

        {/* SIMILAR HOMES */}
        <SimilarHomes 
            listingKey={listingKey}
            stataCode={stateOrProvince}
            price={listPrice}
            beds={bedroomsTotal}
            baths={bathroomsTotalInteger}
        />
        </>
    );

}

export default PropertyDetails;

export async function getServerSideProps({ params: { slug } }) {
    // const propertyId = slug.substring(slug.lastIndexOf('-') + 1)
    const payload = {url : `${apiBaseUrl}/properties/details/${slug}`, method : 'GET'}
    const res = await fetchApi(payload)
    // Pass data to the page via props
    
    // console.log(res.data)
    if(res?.data){
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