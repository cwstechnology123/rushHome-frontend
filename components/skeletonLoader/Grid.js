import Skeleton from 'react-loading-skeleton'

export default function Grid({item}) {
  return (
    <>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                <div className="row justify-content-center">
                {[...new Array(item)].map(() => {
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="property-card style3">
                            <Skeleton variant="rect" width={350} height={250} />
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price"><Skeleton variant="text" /></p>
                                </div>
                                <h3><Skeleton variant="text" /></h3>
                                <ul className="property-metainfo list-style">
                                    <li key={`bed_x`}><i className="flaticon-double-bed" /><Skeleton variant="text"/> Br</li>
                                    <li key={`bath_x`}><i className="flaticon-bath-tub" /><Skeleton variant="text"/> Ba</li>
                                    <li key={`square_x`}><i className="flaticon-square" /><Skeleton variant="text"/> Sq.Ft</li>
                                    <li key={`home_x`}><i className="flaticon-home" /><Skeleton variant="text"/> Gr</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                })}
                <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="property-card style3">
                            <Skeleton variant="rect" width={350} height={250} />
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price"><Skeleton variant="text" width={350} /></p>
                                </div>
                                <h3><Skeleton variant="text" /></h3>
                                <ul className="property-metainfo list-style">
                                    <li key={`bed_x`}><i className="flaticon-double-bed" /><Skeleton variant="text"/> Br</li>
                                    <li key={`bath_x`}><i className="flaticon-bath-tub" /><Skeleton variant="text"/> Ba</li>
                                    <li key={`square_x`}><i className="flaticon-square" /><Skeleton variant="text"/> Sq.Ft</li>
                                    <li key={`home_x`}><i className="flaticon-home" /><Skeleton variant="text"/> Gr</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="property-card style3">
                            <Skeleton variant="rect" width={350} height={250} />
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price"><Skeleton variant="text" width={350} /></p>
                                </div>
                                <h3><Skeleton variant="text" /></h3>
                                <ul className="property-metainfo list-style">
                                    <li key={`bed_x`}><i className="flaticon-double-bed" /><Skeleton variant="text"/> Br</li>
                                    <li key={`bath_x`}><i className="flaticon-bath-tub" /><Skeleton variant="text"/> Ba</li>
                                    <li key={`square_x`}><i className="flaticon-square" /><Skeleton variant="text"/> Sq.Ft</li>
                                    <li key={`home_x`}><i className="flaticon-home" /><Skeleton variant="text"/> Gr</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="property-card style3">
                            <Skeleton variant="rect" width={350} height={250} />
                            <div className="property-info">
                                <div className="property-status-wrap">
                                <p className="property-price"><Skeleton variant="text" width={350} /></p>
                                </div>
                                <h3><Skeleton variant="text" /></h3>
                                <ul className="property-metainfo list-style">
                                    <li key={`bed_x`}><i className="flaticon-double-bed" /><Skeleton variant="text"/> Br</li>
                                    <li key={`bath_x`}><i className="flaticon-bath-tub" /><Skeleton variant="text"/> Ba</li>
                                    <li key={`square_x`}><i className="flaticon-square" /><Skeleton variant="text"/> Sq.Ft</li>
                                    <li key={`home_x`}><i className="flaticon-home" /><Skeleton variant="text"/> Gr</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}