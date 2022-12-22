import defaultProperty from "../../public/default_home.jpg";
import noImage from "../../public/no_picture_available.png";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import useSWR from "swr";
import { apiBaseUrl, fetchApi } from "../../utils/fetchApi";
import PropertyBannerLoader from "../skeletonLoader/PropertyBannerLoader";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PropertyImages = ({
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
    return (
        <>
            {(isLoading && isValidating)? <PropertyBannerLoader/ > : <ImageGallery items={images} showPlayButton={false} lazyLoad={true} showFullscreenButton={false} useBrowserFullscreen={false} renderLeftNav={leftButton} renderRightNav={rightButton} />}
            
        </>
    )
}

export default PropertyImages;