import Skeleton from 'react-loading-skeleton'

export default function PropertyOtherLoader() {
    return (
        <div className="heading_line mt-4">
            <div className="col-xl-12 col-lg-12">
                <div className="section-title style1 text-left mb-40">
                    <h2><Skeleton variant="text"/></h2>
                    <hr />
                    <Skeleton variant="rect" width={'100%'} height={250} borderRadius={15} />
                </div>
            </div>
        </div>
    )
}