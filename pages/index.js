import Link from 'next/link'
import MainBanner from '../components/layouts/MainBanner'
import ContactUs from '../components/ContactUs'
import List from '../components/property/List'
import { apiBaseUrl, fetchApi } from '../utils/fetchApi'
import { useState } from 'react'
import Grid from '../components/skeletonLoader/Grid'
import HomeBanner from '../components/layouts/HomeBanner'

export default function Home({properties}) {
  const [loader, setLoader] = useState(false);

  const [activeTab, setActiveTab] = useState('all');
  const [propertiesData, setPropertiesData] = useState(properties);

  const handleTabClick = async (e, type) => {
    setLoader(true)
    setActiveTab(type)
    // console.log("type:", type)
    e.preventDefault();
    try{
      const stateCode = type.substring(type.lastIndexOf('-') + 1)
      const payload = {url : `${apiBaseUrl}/properties/${stateCode}/1/12`, method : 'GET'}
      const res = await fetchApi(payload)
      let resData = res && res.data ? res.data.properties : null
      setPropertiesData(resData)
      // console.log('resData',propertiesData)
      setLoader(false)
    } catch (error) {
      setLoader(false)
      // console.log(error)
      return null;
    };
  };

  return (
    <>
      {/* <MainBanner /> */}
      <HomeBanner />
      <section className="property-slider-wrap pt-100 pb-75 property_wraper">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title style1 text-left mb-40">
                <div className="state_tabs">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className={`btn style1 ${activeTab==='all'? 'active' : ''}`} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={(e)=> handleTabClick(e,'all')} >All</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className={`btn style1 ${activeTab==='delaware-de'? 'active' : ''}`} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={(e)=> handleTabClick(e,'delaware-de')}>Delaware</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className={`btn style1 ${activeTab==='maryland-md'? 'active' : ''}`} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={(e)=>handleTabClick(e,'maryland-md')}>Maryland</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className={`btn style1 ${activeTab==='pennsylvania-pa'? 'active' : ''}`} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={(e)=>handleTabClick(e,'pennsylvania-pa')}>Pennsylvania</button>
                    </li>
                  </ul>
                </div>	
                <h2>Popular Properties</h2>
                <hr />
              </div>
            </div>
          </div>
          {(loader) ?<Grid item={3} /> : (propertiesData) ?
            <>
              <List properties={propertiesData? propertiesData : null} stateCode={activeTab} />
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
              {/* <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p> */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-12">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1 city_height">
                  <img src="assets/img/city/Dover.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city/dover-de">Dover</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/city/Middletown.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city/middletown-de">Middletown</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
            </div>	
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/city/Wilmington.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city/wilmington-de">Wilmington</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="city-card style1">
                    <img src="assets/img/city/Newark.jpg" alt="Image" />
                    <div className="city-info">
                      <h3><Link href="/city/newark-de">Newark</Link></h3>
                      <p>+5231 properties</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <div className="city-card style1">
                    <img src="assets/img/city/Philly.jpg" alt="Image" />
                    <div className="city-info">
                      <h3><Link href="/city/philadelphia-pa">Philadelphia</Link></h3>
                      <p>+5231 properties</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>	
            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-12">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1">
                  <img src="assets/img/city/Rehoboth.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city/rehoboth-de">Rehoboth</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="city-card style1 city_height">
                  <img src="assets/img/city/Ocean City.jpg" alt="Image" />
                  <div className="city-info">
                    <h3><Link href="/city/ocean-city-md">Ocean City</Link></h3>
                    <p>+5231 properties</p>
                  </div>
                </div>
              </div>
            </div>	
          </div>
        </div>
      </section>
      <ContactUs type={'General Inquiry'}/>
    </>
  )
}

// This gets called on every request
export async function getStaticProps() {
  const type = 'all';
  const payload = {url : `${apiBaseUrl}/properties/${type}/1/12`, method : 'GET'}
  const res = await fetchApi(payload)
  // Pass data to the page via props
  if(res && res.data){
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
    revalidate: 100
  };
}
