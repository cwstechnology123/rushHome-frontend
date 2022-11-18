import Image from 'next/image'

export default function AboutUs() {
  return (
    <>
      <section className="pt-50 pb-75 text-center citybanner_box">
        <Image width={100} height={100} layout="responsive" src="/assets/img/city_banner.jpg" alt="About US" />
        <div className="container">
          <div className="welcome_box">
            <div className="col-xl-10 col-lg-10 offset-xl-1 offset-lg-1">
              <div className="section-title style2 text-center mb-40">
                <h1>Welcome To Rushhome</h1>
                <h2>We see change as opportunity, not a threat &amp; start with the belief that there is a better way.</h2>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut lab </p>
                <span>JUMP TO</span>
                <div className="state_tabs">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="btn style1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="btn style1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Delaware</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="btn style1" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Maryland</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="btn style1" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Pennsylvania</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="advantage-wrap ptb-50 bg-seashell property_wraper">
        <div className="container">
          <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2">
            <div className="section-title style2 text-center mb-40">
              <h2>Our Services</h2>
              <hr className="center" />
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="adv-card">
                <div className="adv-img">
                  <img src="assets/img/ourservice1.jpg" alt="Image" />
                </div>
                <div className="adv-info">
                  <h3>Property Management</h3>
                  <p>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem. Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="adv-card">
                <div className="adv-img">
                  <img src="assets/img/ourservice2.jpg" alt="Image" />
                </div>
                <div className="adv-info">
                  <h3>Mortgage Service</h3>
                  <p>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem. Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="adv-card">
                <div className="adv-img">
                  <img src="assets/img/ourservice3.jpg" alt="Image" />
                </div>
                <div className="adv-info">
                  <h3>Consulting Service</h3>
                  <p>Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem. Lorem ipsum dolor sit amet, cons ectetur adip isci ngelit, sed do eiusmod tem.</p>
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
              <div className="section-title style2 text-center mb-40">
                <h2>We're always eager to hear from you!</h2>
                <hr className="center" />
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p>
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
                  <p>SB Howard Street #2 San Francisco<br />SB Howard Street</p>
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
                  <p>+5854 8845 8555 <br />+5854 8845 8555</p>
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
                  <p>Mon - Fri 10.00 AM to 6.00 PM<br />
                    Set - Sun 10.00 AM to 6.00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd">
          </iframe>
        </div>
      </section>
      <section className="hw-wrap pt-50 pb-75 whychoose_wraper join_team">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10 offset-xl-1 offset-lg-1">
              <div className="section-title style2 text-center mb-40">
                <h2>RushHome is an estate agency that helps people live in more thoughtful and beautiful ways.</h2>
                <hr className="center" />
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <button type="button" className="btn style1 button_custom">Join Our Team</button>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/city/city-1.jpg" alt="Image" />
                </div>
              </div>
            </div>	
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/city/city-1.jpg" alt="Image" />
                </div>
              </div>
            </div>	
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/city/city-1.jpg" alt="Image" />
                </div>
              </div>
            </div>	
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/city/city-1.jpg" alt="Image" />
                </div>
              </div>
            </div>	
          </div>
        </div>
      </section>
    </>
  )
}
