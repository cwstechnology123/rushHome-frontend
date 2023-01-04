import Link from 'next/link'
import { useRouter } from "next/router";

export default function BuyFooter(){
    const router = useRouter();
    if(router.pathname != '/auth' && router.pathname != '/auth/client-signin' && router.pathname != '/auth/agent-signin' && router.pathname != '/signup'){
        return (
            <>
              <footer className="footer-wrap style1 pt-100 byfooter">
                  <div className="footer-top">
                  <div className="container">
                      <div className="row pb-75">
                      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div className="footer-widget">
                            <Link href="/" className="footer-logo">
                                <span className="logo_wraper"><img src="../assets/img/Black Rush home.png" alt="Black Rush home" /></span>
                            </Link>
                            <div className="bx_wraper">
                                <div className="left_box">
                                <h6>Email</h6>
                                <p>info@rushhomes.com</p>
                                </div>
                                <div className="right_box">
                                <h6>Call</h6>
                                <p>+1 (302) 219-6707</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <ul className="social-profile list-style style1">
                                <li>
                                    <Link target="_blank" href="https://facebook.com/">
                                    <i className="ri-facebook-fill" />
                                    </Link>
                                </li>
                                <li>
                                    <Link target="_blank" href="https://twitter.com/">
                                    <i className="ri-twitter-fill" />
                                    </Link>
                                </li>
                                <li>
                                    <Link target="_blank" href="https://instagram.com/">
                                    <i className="ri-instagram-line" />
                                    </Link>
                                </li>
                                <li>
                                    <Link target="_blank" href="https://linkedin.com/">
                                    <i className="ri-linkedin-fill" />
                                    </Link>
                                </li>
                                </ul>
                            </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mb-2">
                          <div className="footer-widget cities">
                            <h3 className="footer-widget-title">Search by City</h3>
                            <ul className="footer-menu list-style">
                                <li>
                                <Link href="/homes-for-sale/dover-de" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    Dover
                                </Link>
                                </li>
                                <li>
                                <Link href="/homes-for-sale/middletown-de" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    Middletown
                                </Link>
                                </li>
                                <li>
                                <Link href="/homes-for-sale/newark-de" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    Newark
                                </Link>
                                </li>
                                <li>
                                <Link href="/homes-for-sale/ocean-city-md" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    Ocean City
                                </Link>
                                </li>
                                <li>
                                <Link href="/homes-for-sale/philadelphia-pa" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    Philadelphia
                                </Link>
                                </li>
                                <li>
                                <Link href="/homes-for-sale/wilmington-de" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    Wilmington
                                </Link>
                                </li>
                            </ul>
                            <ul className="footer-menu list-style">
                                <li>
                                <Link href="/homes-for-sale/annapolis-md" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    Annapolis
                                </Link>
                                </li>
                                <li>
                                <Link href="/homes-for-sale/rehoboth-beach-de" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    Rehoboth
                                </Link>
                                </li>
                                <li>
                                <Link href="/homes-for-sale/new-castle-de" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    New Castle
                                </Link>
                                </li>
                            </ul>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                          <div className="footer-widget">
                            <h3 className="footer-widget-title">Quick Links</h3>
                            <ul className="footer-menu list-style">
                                <li>
                                <Link href="/" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    Home
                                </Link>
                                </li>
                                <li>
                                <Link href="/homes-for-sale/delaware-de" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    Buy Property
                                </Link>
                                </li>
                                <li>
                                <Link href="/sell" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    Sell Property
                                </Link>
                                </li>
                                <li>
                                <Link href="/about-us" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    About Us
                                </Link>
                                </li>
                                <li>
                                <Link href="/contact-us" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    Contact Us
                                </Link>
                                </li>
                                <li>
                                <Link href="/" target="_blank">
                                    <i className="ri-arrow-right-s-line" />
                                    Others
                                </Link>
                                </li>
                            </ul>
                          </div>
                      </div>
                      </div>
                  </div>
                  </div>
                  <div className="container">
                    <div className="footer-bottom">
                        {/* <p className="text_content"> Lorem ipsum dolor sit amet consec tetur aditonsi soom isotope elit esumo tempo incidunt labore dolore magna aliqu core tetur adip iscing eliteous sedun amet. </p> */}
                        <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="copyright-text">
                            <span>#FINDYOUR</span>WAYHOME.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p className="copyright-text text-right logo_copyright">
                            <span><img src="../assets/img/Black Rush home.png" alt="Black Rush home" /></span>
                            </p>
                        </div>
                        </div>
                    </div>
                  </div>
              </footer>
            </>
        )
    }
    else{
        return (
        <>
            <footer className="footer-wrap style1">
                <div className="container">
                    <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                        <p className="copyright-text">
                            <span>#FINDYOUR</span>WAYHOME.
                        </p>
                        </div>
                        <div className="col-md-6">
                        <p className="copyright-text text-right logo_copyright">
                            <span><img src="../assets/img/Black Rush home.png" alt="Black Rush home" /></span>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </>
        )
    }
}