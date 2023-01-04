import { useRouter, Router } from "next/router"
import Link from "next/link"
import Image from "next/image";

export default function SignInOpt() {
    const router = useRouter()
    const handleClick = (e, path) => {
        e.preventDefault()
        if (path === "/auth/client-signin") {
            router.push(path)
        }
        else if (path === "/auth/agent-signin") {
            router.push(path)
        }
        else{
            router.push('/')
        }
    }
    
    return (
      <>
      {/* aut_wraper */}
        <section className="pt-100 pb-75 ">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                        <div className="heading_login">
                        <h2><Link href="/"><i className="flaticon-left-arrow" /></Link>Login / Sign up <span className="close_button" onClick={(e) => handleClick(e, "/")}><i className="flaticon-close" /></span></h2>
                        </div>
                        <div className="Login_img">
                        <Image width={100} height={100} layout="responsive" src="/assets/img/login_signupbg.png" alt="Login"/>
                        </div>
                        <div className="col-md-12 text-center">
                            <button type="button" className="btn style1 button_agent" onClick={(e) => handleClick(e, "/auth/agent-signin")}>Rush Home Agent</button>
                        </div>
                        <div className="col-md-12 text-center">
                            <button type="button" className="btn style1 button_agent" onClick={(e) => handleClick(e, "/auth/client-signin")}>Buyer or Seller</button>
                        </div>
                        <p className="policy_content">I accept Rush Home Terms of Service &amp; Privacy Policy</p>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
}