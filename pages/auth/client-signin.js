import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router";

export default function Client() {
    const router = useRouter()
    const handleClick = async (e, path) => {
        e.preventDefault()
        if (path === "/signIn") {
            const data = await signIn({redirect: false, callbackUrl: "/client/dashboard"})
            router.push(data.url)
        }
    };

    return (
      <>
        <section className="pt-50 pb-75 client_sign">
            <div className="col-md-4 col-lg-4 col-xl-4 offset-lg-4">
                <div className="heading_login">
                <h2>Sign In</h2>
                </div>
                <form className="g-3">
                <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-12">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Enter Password" />
                </div>
                <div className="forgot_box"><Link href="#">Forgot Password?</Link></div>
                <div className="col-md-12 text-center">
                    <button type="button" className="btn style1 button_agent">Login</button>
                </div>
                <div className="col-md-12 text-center">
                    <button type="button" className="btn style1 button_agent" onClick={(e) => handleClick(e, "/signIn")}><span className="googleicon"><img src="../../assets/img/googleicon.png" /></span>Continue with Google</button>
                </div>
                <p className="policy_content">Don’t have an account? <Link href="/signup">Sign up for free</Link></p>
                </form>
            </div>
        </section>
      </>
    )
}