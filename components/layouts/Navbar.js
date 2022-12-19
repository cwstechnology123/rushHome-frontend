import Link from 'next/link'
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react"
import { useState, useEffect } from "react";

export default function Navbar() {
  const { data: session } = useSession()
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }

  const router = useRouter();
  const handleClick = async (e, path) => {
    e.preventDefault()
    if (path === "/signup") {
      router.push(path)
    }
    else if (path === "/auth") {
      router.push(path)
    }
    else if (path === "/signout") {
      toggle()
      localStorage.removeItem('user')
      const data = await signOut({redirect: false, callbackUrl: "/"})
      router.push(data.url)
    }
  };

  useEffect(() => {
    if(showMe){
      setShowMe(false)
      setShowMe(false)
    }
  }, [router]);

  return (
    <>
        <header className="header-wrap">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" href="/" passHref>
                <span className="logo_wraper"><img src="../assets/img/Black Rush home.png" alt="Black Rush home" /></span>
              </Link>
              <div className="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
                <div className="menu-close d-lg-none">
                  <Link href="#"> <i className="ri-close-line" /></Link>
                </div>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link href="/buy" className={"nav-link" + (router.pathname == '/buy' ? " active" : "")} passHref>
                      Buy
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/sell" className={"nav-link" + (router.pathname == '/sell' ? " active" : "")} passHref>
                      Sell
                    </Link>
                  </li>
                {(session) ?
                  <>
                  <li className="nav-item">
                    <Link href="/client/dashboard" className={"nav-link" + (router.pathname == '/client/dashboard' ? " active" : "")} passHref>
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/client/favorites" className={"nav-link" + (router.pathname == '/client/favorites' ? " active" : "")} passHref>
                      Favorites
                    </Link>
                  </li>
                  <li className="nav-item d-lg-none">
                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                    <span></span>
                  </li>
                  <li className="nav-item d-lg-none">
                      <button type="button" className="btn style1" onClick={(e) => handleClick(e, "/signout")} >Sign out</button>
                  </li>
                  </>
                :
                  <>
                    <li className="nav-item">
                      <Link href="#" className={"nav-link" + (router.pathname == '/find-an-agent' ? " active" : "")} passHref>
                        Agents
                        <i className="ri-add-line" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link href="/find-an-agent" className={"nav-link" + (router.pathname == '/find-an-agent' ? " active" : "")} passHref>Find an Agent</Link>
                        </li>
                        <li className="nav-item">
                          <Link href='/about-us?link=become-an-agent' className={"nav-link"} passHref>Become and Agent</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link href="/about-us" className={"nav-link" + (router.pathname == '/about-us' ? " active" : "")} passHref>
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact-us" className={"nav-link" + (router.pathname == '/contact-us' ? " active" : "")} passHref>
                        Contact
                      </Link>
                    </li>
                    <li className="nav-item d-lg-none">
                      <button type="button" className={"btn" + (router.pathname == '/auth' || router.pathname == '/auth/client-signin' || router.pathname == '/auth/agent-signin' ? " style1" : " style3")} onClick={(e) => handleClick(e, "/auth")}>Sign In</button>
                    </li>
                    <li className="nav-item d-lg-none">
                      <button type="button" className={"btn" + (router.pathname != '/signup' && (router.pathname == '/auth' || router.pathname == '/auth/client-signin' || router.pathname == '/auth/agent-signin') ? " style3" : " style1")} onClick={(e) => handleClick(e, "/signup")}>Sign Up</button>
                    </li>
                  </>
                }
                </ul>
                <div className="others-options  md-none">
                  {(session) ?
                    <>
                      <div className="header-btn">
                        <div className="bell_box">
                          <i className="fa fa-bell-o" aria-hidden="true"></i>
                          <span></span>
                        </div>
                        <div className="profile_wraper">
                          <button onClick={toggle} type="button" className="btn profile_button style3"><span>{session.user.name?session.user.name.charAt(0):'-'}</span>{session.user.name?session.user.name:''} <i className="fa fa-angle-down" aria-hidden="true" /></button>
                            <div className="profile_sub" style={{
                              display: showMe?"block":"none"
                            }}>
                            <ul>
                              <li><Link href="/client/my-profile">My Profile</Link></li>
                              <li><Link href="/client/my-account">My Account</Link></li>
                              <li onClick={(e) => handleClick(e, "/signout")}><a href="#">Logout</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
                    :
                    <>
                      <div className="header-btn">
                        <button type="button" className={"btn" + (router.pathname == '/auth' || router.pathname == '/auth/client-signin' || router.pathname == '/auth/agent-signin' ? " style1" : " style3")} onClick={(e) => handleClick(e, "/auth")}>Sign In</button>
                        <button type="button" className={"btn" + (router.pathname != '/signup' && (router.pathname == '/auth' || router.pathname == '/auth/client-signin' || router.pathname == '/auth/agent-signin') ? " style3" : " style1")}  onClick={(e) => handleClick(e, "/signup")}>Sign Up</button>
                      </div>
                    </>
                  }
                </div>
              </div>
            </nav>
            <div className="mobile-bar-wrap">
              <div className="mobile-menu d-lg-none">
                <Link href="#"><i className="ri-menu-line" /></Link>
              </div>
            </div>
          </div>
        </header>
    </>
  )
}