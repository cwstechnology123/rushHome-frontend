import { NextSeo } from 'next-seo';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import OfficeMap from '../components/about/OfficeMap';

export default function AboutUs() {
  const router = useRouter();
  const { query } = router;
  
  const handleScrollTo = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"})
  }
  
  useEffect(() => {
    if(query?.link){
      if(query.link === 'become-an-agent'){
        handleScrollTo('join_us');
      }
      if(query.link === 'contact-us'){
        handleScrollTo('office_location');
      }
    }
  }, [query])

  return (
    <>
        <NextSeo
            title="About Us | RushHome"
            description="We see change as opportunity, not a threat & start with the belief that there is a better way."
            canonical={`${process.env.NEXT_PUBLIC_HOST_NAME}/about-us`}
            openGraph={{
                type: 'website',
                title: "About Us | RushHome",
                description: "We see change as opportunity, not a threat & start with the belief that there is a better way.",
                url: `${process.env.NEXT_PUBLIC_HOST_NAME}/about-us`,
                images: [
                    {
                        url: `${process.env.NEXT_PUBLIC_HOST_NAME}/assets/img/about_banner.jpg`,
                        width: 800,
                        height: 600,
                        alt: 'Photo of property',
                    }
                ],
                site_name: 'RushHome'
            }}
        />
      <section className="pb-75 text-center citybanner_box">
        <img src="assets/img/about_banner.jpg" />
        <div className="container">
          <div className="welcome_box">
            <div className="col-xl-10 col-lg-10 offset-xl-1 offset-lg-1">
              <div className="section-title style2 text-center mb-40">
                <h1>Welcome To Rushhome</h1>
                <h2>We see change as opportunity, not a threat &amp; start with the belief that there is a better way.</h2>
                <span>JUMP TO</span>
                <div className="state_tabs">
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-block"><button type="button" className='btn' onClick={()=>handleScrollTo('service')}>service</button></li>
                    <li className="list-group-block"><button type="button" className='btn' onClick={()=>handleScrollTo('office_location')}>office location</button></li>
                    <li className="list-group-block"><button type="button" className='btn' onClick={()=>handleScrollTo('join_us')}>work with us</button></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="advantage-wrap ptb-50 bg-seashell property_wraper" id="service">
        <div className="container">
          <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2">
            <div className="section-title style2 text-center mb-40">
              <h2>Our Services</h2>
              <hr className="center" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="adv-card">
                <div className="adv-img">
                  <img src="assets/img/Buy a New Home.jpg" alt="Image" style={{width: 100, height: 90}}/>
                </div>
                <div className="adv-info">
                  <h3>Home Buying</h3>
                  <p>We marry human power with technology and no how to help you find the right home for you faster.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="adv-card">
                <div className="adv-img">
                  <img src="assets/img/Sell a Home.jpg" alt="Image" style={{width: 100, height: 90}}/>
                </div>
                <div className="adv-info">
                  <h3>Selling A Home</h3>
                  <p>Our local experts know the area, and are ready to help you sell your home quicker and for more. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hw-wrap pt-100 pb-75 contact_box">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10 offset-xl-1 offset-lg-1">
              <div className="section-title style2 text-center mb-40" id="office_location">
                <h2>We are always eager to hear from you!</h2>
                <hr className="center" />
              </div>
            </div>
          </div>
          <div className="row justify-content-left">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 aos-init aos-animate">
              <div className="hw-card">
                <div className="hw-img">
                  <img src="assets/img/address.jpg" alt="Image" />
                </div>
                <div className="hw-info">
                  <h3>Address</h3>
                  <p>200 S. DuPont Blvd, Ste 105, Smyrna, DE 19977</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 aos-init aos-animate">
              <div className="hw-card">
                <div className="hw-img">
                  <img src="assets/img/callus.jpg" alt="Image" />
                </div>
                <div className="hw-info">
                  <h3>Call Us</h3>
                  <p>+1 (302) 219-6707</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 aos-init aos-animate">
              <div className="hw-card">
                <div className="hw-img">
                  <img src="assets/img/openhours.jpg" alt="Image" />
                </div>
                <div className="hw-info">
                  <h3>Open Hours</h3>
                  <p>Mon - Fri 8:30 AM to 5 PM<br />
                    Sat - 9 AM to 12 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OfficeMap address={`200 S. DuPont Blvd, Ste 105,\nSmyrna, DE 19977`} timing={`Mon - Fri 8:30 AM to 5 PM\nSat - 9 AM to 12 PM`} position={{
          lat: 39.29978446764322,
          lng: -75.60011688096353
        }}/>
      </section>
      <section className="hw-wrap pt-50 pb-75 whychoose_wraper join_team" id="join_us">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10 offset-xl-1 offset-lg-1">
              <div className="section-title style2 text-center mb-40">
                <h2>We focus on your success, because when you do more, we do more!</h2>
                <hr className="center" />
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <Link href="https://join.rushhome.com/" target="_blank" className="btn style1 button_custom">Join Our Team</Link>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/team/join-1.jpg" alt="Image" />
                </div>
              </div>
            </div>	
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/team/join-2.jpg" alt="Image" />
                </div>
              </div>
            </div>	
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/team/join-3.jpg" alt="Image" />
                </div>
              </div>
            </div>	
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/team/join-4.jpg" alt="Image" />
                </div>
              </div>
            </div>	
          </div>
        </div>
      </section>
    </>
  )
}