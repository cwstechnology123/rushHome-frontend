import Link from 'next/link'
import MainBanner from '../components/layouts/MainBanner'
import ContactUs from '../components/ContactUs'
import List from '../components/property/List'
import { apiBaseUrl, fetchApi } from '../utils/fetchApi'
import { useState } from 'react'
import Grid from '../components/skeletonLoader/Grid'
import HomeBanner from '../components/layouts/HomeBanner'
import HomeCityList from '../components/layouts/HomeCityList'

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
                <h2>We clear the clutter, so you see more of what you want, and less of what you don&#39;t. </h2>
                <hr className="center" />
                {/* <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua adipiscing elit. </p> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-left">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <Link href={`/homes-for-sale/delaware-de`}>
                <div className="hw-card">
                  <div className="hw-img">
                    <img src="assets/img/Buy a New Home.jpg" alt="Image" />
                  </div>
                  <div className="hw-info">
                    <h3>Buy a New Home</h3>
                    <p>Find your new home faster with constant updates, and real recommendations from a live professional. </p>
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
                    <p>Whether you&#39;re ready to sell or looking for answers, we&#39;re here to guide you with expertise specific to your area.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <HomeCityList />
      <ContactUs type={'General Inquiry'}/>
    </>
  )
}

// This gets called on every request
export async function getStaticProps() {

  // const getProperties = new Promise(async (resolve, reject) =>{
  //   let type = 'all';
  //   let payload = {url : `${apiBaseUrl}/properties/${type}/1/12`, method : 'GET'}
  //   let res = await fetchApi(payload);
  //   resolve(res.data?.properties);
  // })
  // const getCountyCount = new Promise(async (resolve, reject) =>{
  //   let payload = {url : `${apiBaseUrl}/count`, method : 'POST'}
  //     let res = await fetchApi(payload);
  //     resolve(res.data);
  // })
  // const [properties, count] = await Promise.all(
  //   [getProperties, getCountyCount]
  // );
  let type = 'all';
  let payload = {url : `${apiBaseUrl}/properties/${type}/1/12`, method : 'GET'}
  let res = await fetchApi(payload);
  // console.log(properties, count)
  // Pass data to the page via props
  if(res && res.data){
    return {
      props: {
        properties : res.data.properties,
      },
      revalidate: 100
    };
  }
  return {
    props: {
      properties : null,
    },
    revalidate: 100
  };
}
