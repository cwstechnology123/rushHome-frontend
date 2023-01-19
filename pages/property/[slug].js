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
import { getAgentFubDetails, sendFubLeads } from "../../utils/fubApiCall";
import noImage from "../../public/no_picture_available.png";
import defaultAgentImage from "../../public/assets/img/default-profile-pic.png";
import { NextSeo } from "next-seo";

export default function PropertyDetails({ 
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
 }){
    
    const router = useRouter();
    const componentRef = useRef();
    const { data: session, loading } = useSession();
    const [saved, setSaved] = useState(false);
    const [fubObj, setFubObj] = useState({});
    const [shareInfo, setShareInfo] = useState({});
    const [agentDetails, setAgentDetails] = useState({
        id: 0,
        src: defaultAgentImage.src,
        firstName: agent.listAgentFirstName,
        lastName: agent.listAgentLastName,
        email: agent.listAgentEmail,
        ext: agent.listAgentOfficePhoneExt,
        phone: agent.listAgentOfficePhone
    });
    async function findFubAgent(email){
        let res =  await getAgentFubDetails(email);
        if(res.status){
            let user = res.message.users;
            if(user.length){
                let agentImage = user[0].picture?.original;
                setAgentDetails({
                    id: user[0].role === 'Agent'? user[0].id : 0,
                    src: agentImage? agentImage : defaultAgentImage.src,
                    firstName: user[0].firstName,
                    lastName: user[0].lastName,
                    email: user[0].email,
                    ext: agent.listAgentOfficePhoneExt,
                    phone: agent.listAgentOfficePhone
                })
            }
        }
    }
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
        findFubAgent(agent.listAgentEmail)
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
                toast.dismiss(toastId);
                // console.log(isSaved, saved)
                if (res && res.type == 'success') {
                    toastId = toast.loading('Saving...');
                    let leadObj = {
                        person: {
                            emails: [{isPrimary: true, type: 'work', value: session.user.email}],
                            stage: 'Lead',
                            sourceUrl: fubObj.propertyURL
                        },
                        property: fubObj.property,
                        type: isSaved? 'Saved Property' : 'Unsubscribed',
                        system: 'NextJS',
                        source: 'RushHome',
                    };
                    await sendFubLeads(leadObj)
                    toast.dismiss(toastId);
                    toast.success(isSaved? 'Added to Favorites' : 'Removed from Favorites');
                    setSaved(!saved);
                }
                
            } catch (error) {
                console.log(error)
                toast.error('Failed to update');
                toast.dismiss();
                return false;
            };
        }else{
            toast.error('You need to sign in...');
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
                        agent={agentDetails}
                        fubObj={fubObj}
                    />
            }else if(session.user.role === 'agent'){
                return null;
            }
        }else{
            return (
            <>
                <NonAccount address={`${fullStreetAddress}, ${city}, ${stateOrProvince} ${postalCode}`} fubObj={fubObj}/>
                {(agent.listAgentEmail.endsWith("@rushhome.com")) && <PropertyAgentCard 
                    agent={agentDetails} 
                    address={`${fullStreetAddress}, ${city}, ${stateOrProvince} ${postalCode}`}
                    slug={slug}
                />}
            </>
            )
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
        if(session && !loading){
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
    if(!id){
        return (
            <>
            <section className="property-slider-wrap pb-75 property_wraper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 my-5 text-center">
                            <h3 className="font-weight-bold text-center text-danger">Property not found...</h3>
                            <button type="button" className="btn btn-info" onClick={()=>{router.push('/')}}>Go Back</button>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
    return (
        <>
            <NextSeo
                title={`${fullStreetAddress} | RushHome`}
                description={description}
                canonical={`${process.env.NEXT_PUBLIC_HOST_NAME}/property/${slug}`}
                openGraph={{
                    type: 'website',
                    title: `${fullStreetAddress} | RushHome`,
                    description: description,
                    url: `${process.env.NEXT_PUBLIC_HOST_NAME}/property/${slug}`,
                    images: [
                        {
                            url: listPictureURL? listPictureURL.replace(/^http:\/\//i, 'https://') : `${process.env.NEXT_PUBLIC_HOST_NAME}/assets/img/about_banner.jpg`,
                            width: 800,
                            height: 600,
                            alt: 'Photo of property',
                        }
                    ],
                    site_name: 'RushHome'
                }}
            />
            <Toaster />
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
                                    <h2>Description</h2>
                                    <hr />
                                    <div className="text-justify" dangerouslySetInnerHTML={{__html: description}} />
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
                                                <tr>
                                                    <th width={'50%'}>Size:</th>
                                                    <td width={'50%'} className="text-left">{areaTotal? Number(areaTotal).toLocaleString('en-US') : '-'} SqFt</td>
                                                </tr>
                                                <tr>
                                                    <th width={'50%'}>Garage:</th>
                                                    <td width={'50%'} className="text-left">{garageSpaces? parseInt(garageSpaces) : '-'}</td>
                                                </tr>
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
        <SimilarHomes 
            geography={geography}
            city={city}
            propertyId={id}
            stataCode={stateOrProvince}
            price={listPrice}
            beds={bedroomsTotal}
            baths={bathroomsTotalInteger}
        />
        </>
    )
}

export async function getServerSideProps({ query }){
    const payload = {url : `${apiBaseUrl}/properties/details/${query.slug}`, method : 'GET'}
    const res = await fetchApi(payload)
    // console.log(res)
    if(res?.data){
        return {
            props: {
                propertyDetails : res.data?.propertyDetails,
            }
        };
    }
    return {
        props: {
            propertyDetails : null,
        }
    };
}