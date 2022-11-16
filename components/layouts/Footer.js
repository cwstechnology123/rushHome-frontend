import Link from 'next/link'

export default function Footer() {
    return (
      <>
        <footer className="footer-wrap style1 pt-100">
            <div className="footer-top">
            <div className="container">
                <div className="row pb-75">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 pe-xl-5">
                    <div className="footer-widget">
                    <Link href="/" className="footer-logo">
                        <span className="logo_wraper"><img src="assets/img/Black Rush home.png" alt="Black Rush home" /></span>
                    </Link>
                    <p className="comp-desc">
                        Lorem ipsum dolor sit amet consec tetur aditonsi soom isotope elit esumo tempo incidunt labore dolore magna aliqu core tetur adip iscing eliteous sedun amet.
                    </p>
                    <div className="bx_wraper">
                        <div className="left_box">
                        <h6>Email</h6>
                        <p>info@rushhomes.com</p>
                        </div>
                        <div className="right_box">
                        <h6>Call</h6>
                        <p>+845 5884 5845</p>
                        </div>
                    </div>
                    <div className="col-md-12">
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
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                    <div className="footer-widget cities">
                    <h3 className="footer-widget-title">Search by City</h3>
                    <ul className="footer-menu list-style">
                        <li>
                        <Link href="/" target="_blank">
                            <i className="ri-arrow-right-s-line" />
                            Delaware Real Estate
                        </Link>
                        </li>
                        <li>
                        <Link href="/" target="_blank">
                            <i className="ri-arrow-right-s-line" />
                            Florida Real Estate
                        </Link>
                        </li>
                        <li>
                        <Link href="/" target="_blank">
                            <i className="ri-arrow-right-s-line" />
                            Istambul Real Estate
                        </Link>
                        </li>
                        <li>
                        <Link href="/" target="_blank">
                            <i className="ri-arrow-right-s-line" />
                            Sanfransisco Real Estate
                        </Link>
                        </li>
                        <li>
                        <Link href="/" target="_blank">
                            <i className="ri-arrow-right-s-line" />
                            London Real Estate
                        </Link>
                        </li>
                        <li>
                        <Link href="/" target="_blank">
                            <i className="ri-arrow-right-s-line" />
                            New York City Real Estate
                        </Link>
                        </li>
                    </ul>
                    <ul className="footer-menu list-style">
                        <li>
                        <Link href="/" target="_blank">
                            <i className="ri-arrow-right-s-line" />
                            Delaware Real Estate
                        </Link>
                        </li>
                        <li>
                        <Link href="/" target="_blank">
                            <i className="ri-arrow-right-s-line" />
                            Delaware Real Estate
                        </Link>
                        </li>
                        <li>
                        <Link href="#" target="_blank">
                            <i className="ri-arrow-right-s-line" />
                            Delaware Real Estate
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 ps-xl-5">
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
                        <Link href="/buy" target="_blank">
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
                <p className="text_content"> Lorem ipsum dolor sit amet consec tetur aditonsi soom isotope elit esumo tempo incidunt labore dolore magna aliqu core tetur adip iscing eliteous sedun amet. </p>
                <div className="row align-items-center">
                <div className="col-md-6">
                    <p className="copyright-text">
                    <span>#FINDYOUR</span>WAYHOME.
                    </p>
                </div>
                <div className="col-md-6">
                    <p className="copyright-text text-right logo_copyright">
                    <span><img src="assets/img/Black Rush home.png" alt="Black Rush home" /></span>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </footer>
        <link href="/" className="back-to-top bounce" /><i className="ri-arrow-up-s-line" />
      </>
    )
}