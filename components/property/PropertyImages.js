import defaultProperty from "../../public/default_home.jpg";
import noImage from "../../public/no_picture_available.png";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import useSWR from "swr";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import PropertyBannerLoader from "../skeletonLoader/PropertyBannerLoader";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RWebShare } from "react-web-share";

const PropertyImages = ({
    info,
    saved,
    userSession,
    handlePrint, 
    handleSave,
    defaulImages,
    listingKey
}) => {
    // console.log("listingKey: ",listingKey)
    const fetcher = async (payload) => await fetchApi(payload).then(res => res.data);
    const { data: imageList, error, isLoading, isValidating } = useSWR({url : `${apiBaseUrl}/properties/images/${listingKey}`, method : 'GET'}, fetcher)
    // console.log("Images: ",imageList)

    if(!imageList){
        return <PropertyBannerLoader/ >;
    }

    const leftButton = (onClick, disabled) => (
        <button type="button" className="carousel-left-indicator" disabled={disabled} onClick={onClick}><FaAngleLeft /></button>
    )
    const rightButton = (onClick, disabled) => (
        <button type="button" className="carousel-right-indicator" disabled={disabled} onClick={onClick}><FaAngleRight /></button>
    )

    const images = imageList.propertyImages? imageList.propertyImages.map(item => (
        {
            original: item.Image.replace(/^http:\/\//i, 'https://'),
            thumbnail: item.Image.replace(/^http:\/\//i, 'https://'),
            originalClass: 'property-banner-original',
            thumbnailClass: 'property-banner-thumbnail'
        }
    )) : ((defaulImages.pictureURL!="")? ([{
        original: defaulImages.picture3URL.replace(/^http:\/\//i, 'https://'),
        thumbnail: defaulImages.pictureURL.replace(/^http:\/\//i, 'https://'),
        originalClass: 'property-banner-original',
        thumbnailClass: 'property-banner-thumbnail'
    }]) : ([{
        original: noImage.src,
        thumbnail: noImage.src,
        originalClass: 'property-banner-original',
        thumbnailClass: 'property-banner-thumbnail'
    }]));
    // console.log(saved)
    return (
        <>
        <div style={{position: 'relative'}}>
            {(userSession) && (<div className="carousel_icons">
                <ul>
                    <li>
                        <a href="javascript:void(0);" onClick={handleSave} style={{color: `${saved? 'red' : ''}`}}>
                            <i className={`fa fa-heart${saved? '' : '-o'}`} aria-hidden="true" ></i>
                        </a>
                    </li>
                    <li>
                    <RWebShare
                        data={info}
                        onClick={() => console.log("shared successfully!")}
                        sites='["facebook", "twitter", "mail", "linkedin", "copy"]'
                    >
                        <a href="javascript:void(0);"><i className="fa fa-share" aria-hidden="true" /> </a>
                    </RWebShare>
                    </li>
                    <li>
                        <a href="javascript:void(0);" onclick="{handlePrint}">
                            <i className="fa fa-print" aria-hidden="true" />
                        </a>
                    </li>

                </ul>
            </div>)}
            {(isLoading && isValidating)? <PropertyBannerLoader/ > : <ImageGallery items={images} showPlayButton={false} lazyLoad={true} showFullscreenButton={false} useBrowserFullscreen={false} renderLeftNav={leftButton} renderRightNav={rightButton} />}
        </div>
        </>
    )
}

export default PropertyImages;