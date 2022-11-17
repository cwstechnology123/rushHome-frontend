import { signIn } from "next-auth/react"
import { useRouter, Router } from "next/router"
import Link from "next/link"

export default function SignInOpt() {
    const router = useRouter();
    const handleClick = (e, path) => {
        e.preventDefault()
        if (path === "/signin/client") {
            router.push(path)
        }
        else if (path === "/signin/agent") {
            router.push(path)
        }
        else{
            router.push('/')
        }
    };
    
    return (
      <>
        <section className="pt-100 pb-75">
            <div className="col-md-4 col-lg-4 col-xl-4 offset-lg-4">
                <div className="heading_login">
                <h2><Link href="/" onClick={() => Router.back()}><i className="flaticon-left-arrow" /></Link>Login / Sign up <span className="close_button" onClick={(e) => handleClick(e, "/")}><i className="flaticon-close" /></span></h2>
                </div>
                <div className="Login_img">
                <img src="assets/img/login_signupbg.png" />
                </div>
                <div className="col-md-12 text-center">
                    <button type="button" className="btn style1 button_agent" onClick={(e) => handleClick(e, "/signin/agent")}>Rush Home Agent</button>
                </div>
                <div className="col-md-12 text-center">
                    <button type="button" className="btn style1 button_agent" onClick={(e) => handleClick(e, "/signin/client")}>Buyer or Seller</button>
                </div>
                <p className="policy_content">I accept Rush Home Terms of Service &amp; Privacy Policy</p>
            </div>
        </section>
      </>
    )
}