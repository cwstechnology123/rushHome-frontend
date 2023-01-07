import Skeleton from 'react-loading-skeleton'

export default function ProfileLoader() {
  return (
    <>
        <section className="pt-50 pb-75 myprofile_box">
            <div className="container">
                <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3">
                    <Skeleton variant="text" count={2}/>
                </div>
                <div className="col-md-9 col-lg-9 col-xl-9">
                    <div className="personal_box">
                    <div className="personal_wrpaer">
                        <h2>Personal Info</h2>
                        <p>Photo</p>
                        <div className="profile_box">
                        <ul>
                            <li className="profile_pic">
                            <Skeleton variant="circle"/>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="form_wraper">
                        <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">First Name</label>
                            <Skeleton variant="text" count={1}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor className="form-label">Last Name</label>
                            <Skeleton variant="text" count={1}/>
                        </div>
                        <div className="col-12">
                            <div className="col-auto">
                            <label className="visually-hidden" htmlFor="autoSizingInputGroup"><Skeleton variant="text" count={1}/></label>
                            <div className="input-group">
                                <div className="col-auto">
                                <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
                                <Skeleton variant="text" count={1}/>
                                </div>
                                <Skeleton variant="text" count={1}/>
                            </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Email Address</label>
                            <Skeleton variant="text" count={1}/>
                        </div>
                        <div className="col-12">
                            <div className="form_content">
                            <Skeleton variant="text" count={2}/>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="col-12">
                        <Skeleton variant="text" count={1}/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}