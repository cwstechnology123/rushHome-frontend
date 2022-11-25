import Router from "next/router"
import { signIn } from "next-auth/react"

export default function Agent({ csrfToken }) {
  
  return (
    <>
      <section className="pt-100 pb-75 agent_wraper">
        <div className="col-md-4 col-lg-4 col-xl-4 offset-lg-4">
          <h2><span onClick={() => Router.back()}><i className="flaticon-left-arrow" /></span> Agent Sign In</h2>
          <div className="col-md-12 text-center">
            <button type="submit" className="btn style1 button_agent" onClick={() => signIn("google", { callbackUrl: '/sell' })}>Login with Email</button>
          </div> 
        </div>
      </section>
    </>
  )
}