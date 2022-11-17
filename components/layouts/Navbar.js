import Link from 'next/link'
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()
  const router = useRouter();
  const handleClick = (e, path) => {
    e.preventDefault()
    if (path === "/signup") {
      router.push(path)
    }
    if (path === "/signin") {
      router.push(path)
    }
  };
  return (
    <>
        <header className="header-wrap">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" href="/">
                <span className="logo_wraper"><img src="assets/img/Black Rush home.png" alt="Black Rush home" /></span>
              </Link>
              <div className="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
                <div className="menu-close d-lg-none">
                  <Link href="#"> <i className="ri-close-line" /></Link>
                </div>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link href="/buy" className="nav-link">
                      Buy
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/sell" className="nav-link">
                      Sell
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#" className="nav-link">
                      Agents
                      <i className="ri-add-line" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/find-an-agent" className="nav-link">Find an Agent</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="#" className="nav-link">Become and Agent</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/about-us" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact-us" className="nav-link">
                      Contact
                    </Link>
                  </li>
                  {(session) ?
                    <>
                      Signed in as {session.user.email} <br />
                      <li className="nav-item d-lg-none">
                        <button type="button" className="btn style1" onClick={() => signOut()} >Sign out</button>
                      </li>
                    </>
                    :
                    <>
                      <li className="nav-item d-lg-none">
                        <button type="button" className="btn style3" onClick={(e) => handleClick(e, "/signin")}>Sign In</button>
                      </li>
                      <li className="nav-item d-lg-none">
                        <button type="button" className="btn style1" onClick={(e) => handleClick(e, "/signup")}>Sign Up</button>
                      </li>
                    </>
                  }
                </ul>
                <div className="others-options  md-none">
                  {(session) ?
                    <>
                      <div className="header-btn">
                        <button type="button" className="btn style1" onClick={() => signOut()}>Sign out</button>
                      </div>
                    </>
                    :
                    <>
                      <div className="header-btn">
                        <button type="button" className="btn style3" onClick={(e) => handleClick(e, "/signin")}>Sign In</button>
                        <button type="button" className="btn style1" onClick={(e) => handleClick(e, "/signup")}>Sign Up</button>
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