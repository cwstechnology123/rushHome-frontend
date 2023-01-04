import Router from "next/router"
import { signIn } from "next-auth/react"

export default function Agent() {
  
  return (
    <>
    {/* agent_wraper */}
      <section className="pt-100 pb-75 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <h2><span onClick={() => Router.back()}><i className="flaticon-left-arrow" /></span> Agent Sign In</h2>
              <div className="col-md-12 text-center">
                <button type="submit" className="btn style1 button_agent" onClick={() => signIn("google", { callbackUrl: '/sell' })}>Login with Email</button>
              </div> 
            </div>
          </div>
        </div>
        
      </section>
    </>
  )
}