import defaultProperty from "../../public/default_home.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function PropertyImages({
    images
}) {

    return (
        <>
        <Carousel
            centerMode={true}
            centerSlidePercentage={100}
            emulateTouch={true}
            showArrows={true}
            showThumbs={true}
            showStatus={false}
            showIndicators={false}
            // renderArrowPrev={}
            // renderArrowNext={}
            style={{height: '60vh'}}
        >
            {images.length?
                images.map((item, index) => (
                    <div key={index}>
                        <img key={`img-${index}`} src={item.Image} />
                    </div>
                ))
                :
                (
                    <div>
                        <img src={defaultProperty.src} />
                    </div>
                )
            }
        </Carousel>
        </>
    )
}