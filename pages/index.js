import Link from 'next/link'
import MainBanner from '../components/layouts/MainBanner'
import ContactUs from '../components/ContactUs'
import List from '../components/property/List'
import { apiBaseUrl, fetchApi } from '../utils/fetchApi'

export default function Home({properties}) {

  return (
    <>
      <MainBanner />
      <section className="property-slider-wrap pt-100 pb-75 property_wraper">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title style1 text-left mb-40">
                <div className="state_tabs">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="btn style1 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
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
                <h2>Popular Properties</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p>
              </div>
            </div>
          </div>
          { (properties) ?
            <>
              <List properties={properties? properties : null} />
              <div className="col-md-12 text-center">
                <button type="button" className="btn style1 button_custom">See All Properties <i className="flaticon-right-arrow" /></button>
              </div>
            </>
            :
            <>
              <div className="col-md-12 text-center">
                No Records...
              </div>
            </>
          }
        </div>
      </section>
      <section className="hw-wrap pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2">
              <div className="section-title style2 text-center mb-40">
                <h2>We have the most listings &amp; constant updates. So you will never miss out.</h2>
                <hr className="center" />
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-left">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <Link href={`/buy`}>
                <div className="hw-card">
                  <div className="hw-img">
                    <img src="assets/img/Buy a New Home.jpg" alt="Image" />
                  </div>
                  <div className="hw-info">
                    <h3>Buy a New Home</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <Link href={`/sell`}>
                <div className="hw-card">
                  <div className="hw-img">
                    <img src="assets/img/Sell a Home.jpg" alt="Image" />
                  </div>
                  <div className="hw-info">
                    <h3>Sell a Home</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="city-wrap pt-100 pb-75 bg-seashell">
        <img src="assets/img/shape-2.png" alt="Image" className="city-shape-one" />
        <div className="container">
          <div className="col-xl-8 col-lg-8 offset-xl-2 offset-lg-2">
            <div className="section-title style2 text-center mb-40">
              <h2>Explore Cities</h2>
              <hr className="center" />
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1 city_height">
                  <img src="assets/img/city/city-1.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city">New York City</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/city/city-1.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city">New York City</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
            </div>	
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/city/city-1.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city">New York City</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="city-card style1">
                    <img src="assets/img/city/city-1.jpg" alt="Image" />
                    <div className="city-info">
                      <h3><Link href="/city">New York City</Link></h3>
                      <p>+5231 properties</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="city-card style1">
                    <img src="assets/img/city/city-1.jpg" alt="Image" />
                    <div className="city-info">
                      <h3><Link href="/city">New York City</Link></h3>
                      <p>+5231 properties</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>	
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/city/city-1.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city">New York City</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1 city_height">
                  <img src="assets/img/city/city-1.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city">New York City</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
            </div>	
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  )
}

// This gets called on every request
export async function getStaticProps() {
  const type = 'all';
  const payload = {url : `${apiBaseUrl}/properties/${type}/1/6`, method : 'GET'}
  const res = await fetchApi(payload)
  // Pass data to the page via props
  if(res.data){
    return {
      props: {
        properties : res && res.data?.properties,
      },
    };
  }
  return {
    props: {
      properties : null,
    },
  };
}
