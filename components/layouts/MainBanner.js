import React from 'react';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { apiBaseUrl, fetchApi } from '../../utils/fetchApi';
import { useRouter } from "next/router";

export default function MainBanner() {
  const router = useRouter();
  const loadOptions = async (inputValue, callback) => {
    if(inputValue.length > 1) {
      // perform a request
      try {
        const payload = {url : `${apiBaseUrl}/properties/search-autocomplete`, method : 'POST', data : {search_key : inputValue}}
        const res = await fetchApi(payload)
        if (res && res.data) {
          const searchList = res.data?.searchList;
          callback(searchList)
        }
        else{
          callback([])
        }
        
      } catch (e) {
        console.log(e)
      }
    }
  };

  const handleOnChange = async (selectedOption) => {
    const path = selectedOption.value
    console.log(path)
    router.push(path)
  };

  return (
    <>
      <section className="hero-wrap style3">
        <div className="hero-slider-two owl-carousel">
          <div className="hero-slide-item hero-slide-4 bg-f"></div>
        </div>
        <div className="hero-content">
          <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1">
              <h1>Get Home Faster</h1>
              <form action="#" className="property-search-form">
                  <div className="form-group-wrap">
                      <div className="form-group">
                        <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions placeholder="Address, City, Zip, School District" classNamePrefix="react-select"
                        onChange={handleOnChange} />
                      </div>
                  </div>
                  <button type="button" className="btn style2 search_button">Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}