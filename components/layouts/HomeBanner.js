import React from 'react';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { apiBaseUrl, fetchApi } from '../../utils/fetchApi';
import { useRouter } from "next/router";
import Link from 'next/link';

export default function HomeBanner() {
  const router = useRouter();
  const [searchList, setSearchList] = useState({});
  const loadOptions = async (inputValue) => {
    [];
    if(inputValue.length > 1) {
      // perform a request
      try {
        const payload = {url : `${apiBaseUrl}/properties/search-autocomplete`, method : 'POST', data : {search_key : inputValue}}
        const res = await fetchApi(payload)
        if (res && res.data) {
          let searchList = res.data?.searchList;
          setSearchList(searchList)
        }
        else{
          setSearchList({})
        }
        
      } catch (e) {
        console.log(e)
      }
    }else{
      setSearchList({})
    }
  };

  const handleOnChange = async (selectedOption) => {
    const path = selectedOption.value
    console.log(path)
    router.push(path)
  };
  console.log(searchList)
  return (
    <>
      <section className="hero-wrap style3">
        <div className="hero-slider-two owl-carousel">
          <div className="hero-slide-item hero-slide-4 bg-f"></div>
        </div>
        <div className="hero-content home-search">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
              <h1>Get Home Faster</h1>
              <form action="#" className="property-search-form">
                  <div className="input-group mb-3">
                      {/* <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions placeholder="Address, City, Zip, School District" classNamePrefix={'react-select'}
                        onChange={handleOnChange} />
                        onChange={(ev)=>handleOnChange(ev.target.value)} 
                        */}
                      <input type="text" className="form-control" onChange={(ev)=>loadOptions(ev.target.value)} placeholder="Address, City, Zip, School District" />
                      <div className="input-group-append">
                          <button className="btn style_button" type="button">Search</button>
                      </div>
                  </div>
                  {(searchList.length > 0) && (<div style={{
                    width: '100%',
                    height: '50vh',
                    backgroundColor: '#fff',
                    position: 'absolute',
                    top: 60,
                    padding: 10,
                    overflowY: 'auto',
                    textAlign: 'left',
                    border: '1px solid #eee'
                  }}>
                    {searchList.map((items, index) => (
                      <>
                      <label key={`label-${index}`}>{items.label}</label>
                      <ul className='list-group list-group-flush mb-2'>
                        {items.options.map((item, i) => {
                          let hrefLink = JSON.parse(item.value).path;
                          return (<li key={`li-${index}-${i}`} className='list-group-item'><Link key={`link-${index}-${i}`} href={hrefLink} style={{}}>{item.label}</Link></li>)
                        })}
                      </ul>
                      </>
                    ))}
                  </div>)}
                  {/* <div className="form-group-wrap">
                      <div className="form-group">
                        <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions placeholder="Address, City, Zip, School District" classNamePrefix="react-select"
                        onChange={handleOnChange} />
                      </div>
                      <button type="button" className="btn style2 search_button">Search</button>
                  </div> */}
                  
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}