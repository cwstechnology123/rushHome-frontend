import Skeleton from 'react-loading-skeleton'

export default function PropertyBannerLoader() {
    return (
        <>
            <div className="slider_wraper">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1"><Skeleton variant="rect" width={140} height={110} borderRadius={'15px'}/></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Skeleton variant="rect" width={'100%'} height={350} borderRadius={'15px'}/>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" ><i className="fa fa-angle-left"  /></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" ><i className="fa fa-angle-right"  /></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </>
    )
}