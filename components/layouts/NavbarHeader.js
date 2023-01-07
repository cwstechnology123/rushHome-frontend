import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Dropdown, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { setCookie, deleteCookie } from 'cookies-next';

export default function NavbarHeader() {
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
      deleteCookie('rh_user');
      const data = await signOut({redirect: false, callbackUrl: "/"})
      router.push(data.url)
    }
  };
  const profileTitle = session? (session.user.name? (<><span>{session.user.name.charAt(0)}</span>{session.user.name}</>) : '') : '';
  const shortProfileTitle = session? (session.user.name? (<><span>{session.user.name.charAt(0)}</span></>) : '') : '';
  const [Sty, setSty] = useState({});
  const toggleArrow = () => {
    setSty({class : "add-rotate-cls"})
    if (Sty.class === "add-rotate-cls") {
      setSty({class : ""})
    }
  }
  const handleBuyClick = async (e, path) => {
    e.preventDefault()
    setCookie('search', {refKey: "stateOrProvince", refVal: 'de'});
    router.push(path) 
  }

  return (
    <>
    <header className="header-wrap">
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" passHref={true}>
            <span className="logo_wraper"><img src="../assets/img/Black Rush home.png" alt="Black Rush home" /></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} style={{cursor: 'pointer'}}>
            <div className="mobile-menu"><i className="ri-menu-line" /></div>
          </Navbar.Toggle>
          
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav as={'ul'} className="mx-auto">
                <Nav.Item as={'li'}><Nav.Link as={'a'} href="/homes-for-sale/delaware-de" className={(router.pathname == '/homes-for-sale/delaware-de' ? " active" : "")} onClick={(ev)=>handleBuyClick(ev, '/homes-for-sale/delaware-de')} passHref={true}>Buy</Nav.Link></Nav.Item>
                <Nav.Item as={'li'}><Nav.Link as={'a'} href="/sell" className={(router.pathname == '/sell' ? " active" : "")} passHref={true}>Sell</Nav.Link></Nav.Item>
                {
                  (session)?
                  (
                    <>
                    {/* <Nav.Item as={'li'}><Nav.Link href="/client/dashboard" className={"nav-link" + (router.pathname == '/client/dashboard' ? " active" : "")} passHref={true}>Dashboard</Nav.Link></Nav.Item> */}
                    <Nav.Item as={'li'}><Nav.Link as={'a'} href="/client/favorites" className={(router.pathname == '/client/favorites' ? " active" : "")} passHref={true}>Favorites</Nav.Link></Nav.Item>
                    </>
                  )
                  :
                  (
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
                    <Nav.Item as={'li'}><Nav.Link as={'a'} href="/about-us" className={"nav-link" + (router.pathname == '/about-us' ? " active" : "")} passHref={true}>About Us</Nav.Link></Nav.Item>
                    <Nav.Item as={'li'}><Nav.Link as={'a'} href="/about-us?link=contact-us" className={"nav-link"} passHref={true}>Contact</Nav.Link></Nav.Item>
                    <Nav.Item as={'li'} className="d-lg-none">
                      <button type="button" className={"btn" + (router.pathname == '/auth' || router.pathname == '/auth/client-signin' || router.pathname == '/auth/agent-signin' ? " style1" : " style3")} onClick={(e) => handleClick(e, "/auth")}>Sign In</button>
                    </Nav.Item>
                    <Nav.Item as={'li'} className="d-lg-none">
                      <button type="button" className={"btn" + (router.pathname != '/signup' && (router.pathname == '/auth' || router.pathname == '/auth/client-signin' || router.pathname == '/auth/agent-signin') ? " style3" : " style1")} onClick={(e) => handleClick(e, "/signup")}>Sign Up</button>  
                    </Nav.Item>
                    </>
                  )
                }
              </Nav>
              <div className="others-options">
                {(session) ?
                  <>
                    <div className="header-btn">
                      <div className="bell_box">
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                        <span></span>
                      </div>
                      <div className="profile_wraper headerbtn-toggle" onClick={toggleArrow}>
                        <Dropdown>
                          <Dropdown.Toggle id="dropdown-button-profile" className="profile_button style3">{profileTitle} <div id="moon" className={Sty.class}></div></Dropdown.Toggle>
                          <Dropdown.Menu variant="white" className="profile_sub dropdown-class">
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
                    <div className="header-btn md-none">
                      <button type="button" className={"btn" + (router.pathname == '/auth' || router.pathname == '/auth/client-signin' || router.pathname == '/auth/agent-signin' ? " style1" : " style3")} onClick={(e) => handleClick(e, "/auth")}>Sign In</button>
                      <button type="button" className={"btn" + (router.pathname != '/signup' && (router.pathname == '/auth' || router.pathname == '/auth/client-signin' || router.pathname == '/auth/agent-signin') ? " style3" : " style1")}  onClick={(e) => handleClick(e, "/signup")}>Sign Up</button>
                    </div>
                  </>
                }
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
    </>
  )
}