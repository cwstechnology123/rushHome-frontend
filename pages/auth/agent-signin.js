import Router from "next/router"
import { useRouter } from "next/router";
import { getCsrfToken } from "next-auth/react"

export default function Agent({ csrfToken }) {
  
  return (
    <>
      <section className="pt-100 pb-75 agent_wraper">
        <div className="col-md-4 col-lg-4 col-xl-4 offset-lg-4">
          <h2><span onClick={() => Router.back()}><i className="flaticon-left-arrow" /></span> Agent Sign In</h2>
          <div className="col-md-12 text-center">
            <form className="g-3" method="post" action="/api/auth/signin/email">
              <input name="csrfToken" type="hidden" value={csrfToken} />
              <button type="submit" className="btn style1 button_agent">Login with Email</button>
            </form>
          </div> 
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  const data = csrfToken ? csrfToken : {}
  return {
    props: { data }
  }
}