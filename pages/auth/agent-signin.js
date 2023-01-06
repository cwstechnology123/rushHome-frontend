import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { setCookie } from 'cookies-next';

export default function Agent() {
  const router = useRouter();
  const handleClick = async (e, path) => {
    e.preventDefault()
    if (path === "/signin") {
      setCookie('rh_user', {role : 'agent'});
      const response = await signIn("google", { callbackUrl: '/sell' })
    }
  };
  
  return (
    <>
    {/*  */}
      <section className="pt-100 pb-75 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12 agent_wraper">
              <h2><span onClick={() => router.back()}><i className="flaticon-left-arrow" /></span> Agent Sign In</h2>
              <div className="col-md-12 text-center">
                <button type="submit" className="btn style1 button_agent" onClick={(e) => handleClick(e, "/signin")}>Login with Email</button>
              </div> 
            </div>
          </div>
        </div>
        
      </section>
    </>
  )
}