import Link from "next/link";
import { signIn } from "next-auth/react"

export default function SignUp() {
  return (
    <>
        <section className="pt-50 pb-75 client_sign">
            <div className="col-md-4 col-lg-4 col-xl-4 offset-lg-4">
                <div className="heading_login">
                <h2>Sign Up</h2>
                </div>
                <form className="g-3">
                <div className="col-md-12">
                    <label htmlFor="full_name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="full_name" placeholder="Full Name" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Full Name"/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Create Password" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirm_password" placeholder="Create Password" />
                </div>
                <div className="col-md-12 text-center">
                    <button submit="button" className="btn style1 button_agent">Sign Up</button>
                </div>
                <div className="col-md-12 text-center">
                    <button type="button" className="btn style1 button_agent" onClick={() => signIn("google", { callbackUrl: '/client/dashboard' })}><span className="googleicon"><img src="assets/img/googleicon.png" /></span>Continue with Google</button>
                </div>
                <p className="policy_content">Already have an account? <Link href="/auth"> Login</Link></p>
                </form>
            </div>
        </section>
    </>
  )
}