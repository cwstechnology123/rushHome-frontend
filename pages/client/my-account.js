import Image from 'next/image'
import Sidebar from '../../components/client/Sidebar'

export default function MyAccount() {
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
                        <h2>My Account</h2>
                    </div>
                    <div className="form_wraper">
                        <form className="row g-3">
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="francis@gmail.com" />
                            <span className="verify input_in">Verify</span>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Change Password" />
                            <span className="input_in"><i className="fa fa-angle-right" aria-hidden="true" /></span>
                        </div>
                        <div className="col-12">
                            <div className="form-switch switch_button">
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable 2-steps verification</label>
                            <p>Make your account extra secure. Along with your password, you’ll need to enter a code that we text to your phone each time you sign in.</p>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form_content link_account">
                            <label className="form-check-label" htmlFor="gridCheck">
                                Linked Accounts
                            </label>
                            <p>Link your account for quicker sign in.</p>
                            <span> <img src="assets/img/googleicon.png" /> Sign in with Google</span>
                            <button type="submit" className="btn style3 remove_button">Remove</button>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form_content link_account delet_box">
                            <label className="form-check-label" htmlFor="gridCheck">
                                Delete Accounts
                            </label>
                            <p>Delete your account and all the data</p>
                            <button type="submit" className="btn style3 remove_button">Delete Account</button>
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