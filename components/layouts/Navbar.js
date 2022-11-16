import Link from 'next/link'

export default function Navbar() {
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
                  <li className="nav-item d-lg-none">
                    <button type="button" className="btn style3">Sign In</button>
                  </li>
                  <li className="nav-item d-lg-none">
                    <button type="button" className="btn style1">Sign Up</button>
                  </li>
                </ul>
                <div className="others-options  md-none">
                  <div className="header-btn">
                    <button type="button" className="btn style3">Sign In</button>
                    <button type="button" className="btn style1">Sign Up</button>
                  </div>
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