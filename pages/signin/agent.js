import Router from "next/router"

export default function Agent() {
  return (
    <>
        <section className="pt-100 pb-75 agent_wraper">
            <div className="col-md-4 col-lg-4 col-xl-4 offset-lg-4">
                <h2><span onClick={() => Router.back()}><i className="flaticon-left-arrow" /></span> Agent Sign In</h2>
                <div className="col-md-12 text-center">
                    <button type="button" className="btn style1 button_agent">Login with Email</button>
                </div>
            </div>
        </section>
    </>
  )
}