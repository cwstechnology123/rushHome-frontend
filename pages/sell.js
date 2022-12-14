import Image from 'next/image'
import ContactUs from '../components/ContactUs'
import Link from 'next/link'

export default function Sell() {
    const handleScrollTo = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"})
    }

    return (
    <>
        <section className="about-wrap style1 ptb-100 sell_wraper">
            <img src="assets/img/about/shape-3.png" alt="Image" className="about-shape-three" />
            <div className="container">
            <div className="row gx-5 align-items-center">
                <div className="col-lg-7">
                <div className="about-content">
                    <div className="content-title style1">
                    <h2>Sell Home With Rush Home Expert.</h2>
                    {/* <p> Lorem ipsum dolor sit amet consec tetur aditonsi soom isotope elit esumo tempo incidunt labore dolore magna aliqu core tetur adip iscing eliteous sedun amet. </p> */}
                    </div>
                    <button type="button" onClick={()=>handleScrollTo('contact')} className="btn style1">Get Started</button>
                </div>
                </div>
                <div className="col-lg-5">
                <div className="about-img-wrap img_box">
                    <img src="assets/img/about/about-img-1.jpg" alt="Iamge" className="about-img-one" />
                    <div className="shadow_box" />
                    <span className="plus_icon">+</span>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* <section className="advantage-wrap ptb-50 bg-seashell property_wraper">
            <div className="container">
            <div className="col-xl-12 col-lg-12">
                <div className="section-title style1 text-left mb-40">
                <h2>Popular Properties</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi du </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="adv-card">
                    <div className="adv-img">
                    <img src="assets/img/simple-2.jpg" alt="Image" />
                    </div>
                    <div className="adv-info">
                    <h3>Get an Offer Just a Minutes</h3>
                    <p>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
                    </div>
                </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="adv-card">
                    <div className="adv-img">
                    <img src="assets/img/simple-2.jpg" alt="Image" />
                    </div>
                    <div className="adv-info">
                    <h3>Do a Videos Walkthrough</h3>
                    <p>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
                    </div>
                </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="adv-card">
                    <div className="adv-img">
                    <img src="assets/img/simple-2.jpg" alt="Image" />
                    </div>
                    <div className="adv-info">
                    <h3>Close and Move, Stress-Free</h3>
                    <p>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section> */}
        <section className="hw-wrap pt-100 pb-75 whychoose_wraper">
            <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2">
                <div className="section-title style2 text-center mb-40">
                    <h2>Why Choose Us</h2>
                    <hr className="center" />
                    {/* <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p> */}
                </div>
                </div>
            </div>
            <div className="row gx-5 align-items-center bg-seashell">
                <div className="col-lg-5">
                <div className="about-img-wrap img_box">
                    <img src="assets/img/about/about-img-1.jpg" alt="Iamge" className="about-img-one" />
                </div>
                </div>
                <div className="col-lg-7">
                <div className="about-content">
                    <div className="content-title style1 whatwe_Box">
                    <h2>What We do!</h2>
                    <p> Research the comps in your area & complete a competitive market analysis to determine the best list price for the sale of your property.</p>
                    <p> Make recommendations on potential repairs and cleaning of your property, in order to make your home more attractive to buyers.</p>
                    <p> Suggest quality professionals, including attorneys, handymen and inspectors.</p>
                    <p> Guide you in making informed decisions leading to a satisfactory sale.</p>
                    <p> Present and respond to all offers in a timely manner.</p>
                    <p> Negotiate the best price & terms available, always keeping your specific needs in mind.</p>
                    <Link href="#">Learn More</Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="hw-wrap pt-100 pb-75 whychoose_wraper">
            <div className="container">
            <div className="row gx-5 ">
                <div className="col-lg-7">
                <div className="about-content">
                    <div className="content-title style1 download_box">
                    <h2>Download Our Complete Seller Resource Guide</h2>
                    <hr />
                    {/* <p> Lorem ipsum dolor sit amet consec tetur aditonsi soom isotope elit esumo tempo incidunt labore dolore magna aliqu core tetur adip iscing eliteous sedun amet.  Lorem ipsum dolor sit amet consec tetur aditonsi soom isotope elit esumo tempo incidunt labore dolore magna aliqu core tetur ad</p> */}
                    </div>
                    <Link href="/files/Seller_Guide.pdf" rel="noopener noreferrer" target="_blank" locale={false} className="btn style1">Download Now</Link>
                    {/* <Link href="/about-us" className="how_button"><span className="arow_how"><i className="fa fa-caret-right" aria-hidden="true" /></span>How it Works?</Link> */}
                </div>
                </div>
                <div className="col-lg-5">
                <div className="about-img-wrap img_box seller_box">
                    <img src="assets/img/sellerguide.jpg" alt="Iamge" className="about-img-one shadow" />
                </div>
                </div>
            </div>
            </div>
        </section>
        <div id="contact">
        <ContactUs type={'Seller Inquiry'}/>
        </div>
        
    </>
  )
}