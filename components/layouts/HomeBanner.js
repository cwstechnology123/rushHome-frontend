import React, { useRef } from 'react';
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { apiBaseUrl, fetchApi } from '../../utils/fetchApi';
import { useRouter } from "next/router";
import Link from 'next/link';
import { Button, Modal } from 'react-bootstrap';

const SearchModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Did you mean?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{maxHeight: '60vh', overflowY: 'auto'}}>
        <h5>You typed "{props.inputValue}" but did you mean</h5>
        {props.content}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function HomeBanner() {
  const router = useRouter();
  const [showList, setShowList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchList, setSearchList] = useState({});
  // const [inputValue, setInputValue] = useState("");
  const inputValue = useRef();
  const loadOptions = async (ev) => {
    inputValue.current = ev.target.value;
    // console.log("inputValue",inputValue.current)
    if(inputValue.current.length > 1) {
      // perform a request
      try {
        const payload = {url : `${apiBaseUrl}/properties/search-autocomplete`, method : 'POST', data : {search_key : inputValue.current}}
        const res = await fetchApi(payload)
        if (res && res.data) {
          let searchList = res.data?.searchList;
          setSearchList(searchList)
          setShowList(true);
        }
        else{
          setSearchList({})
          setShowList(false);
        }
      } catch (e) {
        console.log(e)
        setShowList(false);
      }
    }else{
      setSearchList({})
      setShowList(false);
    }
  };

  const handleOnSearch = () => {
    setShowList(false);
    setShowModal(true);
    console.log(showList, showModal)
  };
  const searchContent = (searchList.length)? searchList.map((items, index) => (
    <>
    <label key={`label-${index}`}>{items.label}</label>
    <ul className='list-group list-group-flush mb-2'>
      {items.options.map((item, i) => {
        let hrefLink = JSON.parse(item.value).path;
        return (<li key={`li-${index}-${i}`} className='list-group-item'><Link key={`link-${index}-${i}`} href={hrefLink} style={{}}>{item.label}</Link></li>)
      })}
    </ul>
    </>
  )) : ("<h6>No option found!</h6>");

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
                      <input type="text" className="form-control" onChange={loadOptions} placeholder="Address, City, Zip, School District" />
                      <div className="input-group-append">
                          <button className="btn style_button" type="button" onClick={handleOnSearch}>Search</button>
                      </div>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '50vh',
                    backgroundColor: '#fff',
                    position: 'absolute',
                    top: 60,
                    padding: 10,
                    overflowY: 'auto',
                    textAlign: 'left',
                    border: '1px solid #eee',
                    display: showList? 'block' : 'none',
                  }}>{searchContent}</div>
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
      <SearchModal
        show={showModal}
        onHide={() => setShowModal(false)}
        inputValue={inputValue.current}
        content={searchContent}
      />
    </>
  )
}