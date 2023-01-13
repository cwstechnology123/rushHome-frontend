import Skeleton from 'react-loading-skeleton';

export default function AgentCardLoader() {

    return (
        <>
            <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img mx-auto">
                    <Skeleton variant="circle" width={145} height={145} borderRadius={'50%'}/>
                    </div>
                    <div className="agent-info-wrap">
                        <div className="agent-info">
                            <h5><Skeleton variant="text" count={1}/></h5>
                            <span>Real Estate Agent</span>
                        </div>
                        <div className="mail_Box">
                            <Skeleton variant="text" count={2}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img mx-auto">
                    <Skeleton variant="circle" width={145} height={145} borderRadius={'50%'}/>
                    </div>
                    <div className="agent-info-wrap">
                        <div className="agent-info">
                            <h5><Skeleton variant="text" count={1}/></h5>
                            <span>Real Estate Agent</span>
                        </div>
                        <div className="mail_Box">
                            <Skeleton variant="text" count={2}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img mx-auto">
                    <Skeleton variant="circle" width={145} height={145} borderRadius={'50%'}/>
                    </div>
                    <div className="agent-info-wrap">
                        <div className="agent-info">
                            <h5><Skeleton variant="text" count={1}/></h5>
                            <span>Real Estate Agent</span>
                        </div>
                        <div className="mail_Box">
                            <Skeleton variant="text" count={2}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="agent-card style1">
                    <div className="agent-img mx-auto">
                    <Skeleton variant="circle" width={145} height={145} borderRadius={'50%'}/>
                    </div>
                    <div className="agent-info-wrap">
                        <div className="agent-info">
                            <h5><Skeleton variant="text" count={1}/></h5>
                            <span>Real Estate Agent</span>
                        </div>
                        <div className="mail_Box">
                            <Skeleton variant="text" count={2}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}