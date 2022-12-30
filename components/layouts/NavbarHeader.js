import Link from 'next/link'
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiBell } from "react-icons/fi";
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

export default function NavbarHeader(){
  const { data: session } = useSession();
  const [showMe, setShowMe] = useState(false);
  const router = useRouter();
  function toggle(){
    setShowMe(!showMe);
  }
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
      const data = await signOut({redirect: false, callbackUrl: "/"})
      router.push(data.url)
    }
  };

  const profileTitle = session? (session.user.name? (<><span>{session.user.name.charAt(0)}</span>{session.user.name}</>) : '') : '';
  const shortProfileTitle = session? (session.user.name? (<><span>{session.user.name.charAt(0)}</span></>) : '') : '';

  return (
    <header className="header-wrap">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" passHref={true}>
            <span className="logo_wraper"><img src="../assets/img/Black Rush home.png" alt="Black Rush home" /></span>
          </Navbar.Brand>
          {(session) && (
            <div className="profile_wrap d-xl-none d-lg-none d-xl-block d-md-none d-lg-block">
              <Dropdown align={{ lg: 'end' }}>
                <Dropdown.Toggle id="dropdown-menu-button-profile" className="profile_icon style3">{shortProfileTitle}</Dropdown.Toggle>
                <Dropdown.Menu variant="white" className="profile_sub" style={{position:'absolute', padding: 5}}>
                  <Dropdown.Item href="/client/my-profile">My Profile</Dropdown.Item>
                  <Dropdown.Item href="/client/my-account">My Account</Dropdown.Item>
                  <Dropdown.Item href="#" onClick={(e) => handleClick(e, "/signout")}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
          <Navbar.Toggle as={'div'} aria-controls="navbarScroll" className="mobile-bar-wrap" style={{cursor: 'pointer'}}>
            <div className="mobile-menu d-lg-none"><i className="ri-menu-line" /></div>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav as={'ul'}
              className="navbar-nav mx-auto mobile-menu-box"
              navbarScroll
              collapseOnSelect={true}
            >
              <li className="nav-item">
                <Link href="/homes-for-sale/delaware-de" className={"nav-link" + (router.pathname == '/homes-for-sale/delaware-de' ? " active" : "")} passHref>
                  Buy
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/sell" className={"nav-link" + (router.pathname == '/sell' ? " active" : "")} passHref={true}>
                  Sell
                </Link>
              </li>
              {(session)? (
                <>
                  {/* <li className="nav-item">
                    <Link href="/client/dashboard" className={"nav-link" + (router.pathname == '/client/dashboard' ? " active" : "")} passHref={true}>
                      Dashboard
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link href="/client/favorites" className={"nav-link" + (router.pathname == '/client/favorites' ? " active" : "")} passHref={true}>
                      Favorites
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <Dropdown as={'li'} className="nav-item">
                    <Dropdown.Toggle as={'a'} className="nav-link" id="dropdown-autoclose-true">
                      Agent <i className="ri-add-line" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={'ul'}>
                      <Dropdown.Item as={'li'} className="nav-item"><Nav.Link href="/find-an-agent" className={(router.pathname == '/find-an-agent' ? " active" : "")} passHref={true}>Find an Agent</Nav.Link></Dropdown.Item>
                      <Dropdown.Item as={'li'} className="nav-item"><Nav.Link href="/about-us?link=become-an-agent" passHref={true}>Become an Agent</Nav.Link></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <li className="nav-item">
                    <Link href="/about-us" className={"nav-link" + (router.pathname == '/about-us' ? " active" : "")} passHref={true}>
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about-us?link=contact-us" className={"nav-link"} passHref={true}>
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
              )}
            </Nav>
            <div className="others-options md-none">
              {(session) ?
                <>
                  <div className="header-btn">
                    <div className="bell_box">
                      <i className="fa fa-bell-o" aria-hidden="true"></i>
                      <span></span>
                    </div>
                    <div className="profile_wraper">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-profile" className="profile_button style3">{profileTitle}</Dropdown.Toggle>
                        <Dropdown.Menu variant="white" className="profile_sub">
                          <Dropdown.Item href="/client/my-profile">My Profile</Dropdown.Item>
                          <Dropdown.Item href="/client/my-account">My Account</Dropdown.Item>
                          <Dropdown.Item href="#" onClick={(e) => handleClick(e, "/signout")}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    
  )
}