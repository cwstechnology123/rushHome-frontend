import Image from 'next/image'
import Sidebar from '../../components/client/Sidebar'

export default function MyProfile() {
  return (
    <>
        <section className="pt-50 pb-75 myprofile_box">
            <div className="container">
                <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-lg-9 col-xl-9">
                    <div className="personal_box">
                    <div className="personal_wrpaer">
                        <h2>Personal Info</h2>
                        <p>Avatar</p>
                        <div className="profile_box">
                        <ul>
                            <li className="profile_pic">
                            <i className="fa fa-user" aria-hidden="true" />
                            </li>
                            <li>
                            <button type="button" className="btn style1">Upload</button>
                            </li>
                            <li><button type="button" className="btn style3">Remove</button></li>
                        </ul>
                        </div>
                    </div>
                    <div className="form_wraper">
                        <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <div className="col-auto">
                            <label className="visually-hidden" htmlFor="autoSizingInputGroup">414-266-9847</label>
                            <div className="input-group">
                                <div className="col-auto">
                                <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
                                <select className="form-select" id="autoSizingSelect">
                                    <option selected>Cell</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                                </div>
                                <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="414-266-9847" />
                            </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Email Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="john.doe@gmail.com" />
                        </div>
                        <div className="col-12">
                            <div className="form_content">
                            <label className="form-check-label" htmlFor="gridCheck">
                                Reviews
                            </label>
                            <p>Manage the reviews you’ve written for professionals and more.</p>
                            <span>Manage</span>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn style1 button_save">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

    </>
  )
}