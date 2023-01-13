import Skeleton from 'react-loading-skeleton';

export default function AgentDetailLoader(){

    return (
        <>
        <section className="style3 singalagent_box pt-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 aos-init aos-animate">
                        <div className="about-img-wrap img_box">
                        <Skeleton variant="circle" width={300} height={300}/>
                        </div>
                    </div>
                    <div className="col-lg-8 aos-init aos-animate">
                        <div className="about-content">
                            <div className="content-title style1 whatwe_Box">
                                <h2><Skeleton variant="text" width={500} height={25}/></h2>
                                <div className="callemail_box">
                                    <p><img src="../assets/img/callus.jpg" /><Skeleton variant="text" width={200} height={25}/></p>
                                    <p><img src="../assets/img/agentemail.jpg" /><Skeleton variant="text" width={200} height={25}/></p>
                                </div>
                                <p><Skeleton variant="text" width={800} height={10} count={15} /></p>
                                <div className="ratting_box">
                                <ul>
                                    <li>
                                        <h2><Skeleton variant="text"/></h2>
                                        <p><Skeleton variant="text"/></p>
                                    </li>
                                    <li>
                                        <h2><Skeleton variant="text"/></h2>
                                        <p><Skeleton variant="text"/></p>
                                    </li>
                                    <li>
                                        <h2><Skeleton variant="text"/></h2>
                                        <p><Skeleton variant="text"/></p>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}