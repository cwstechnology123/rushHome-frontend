import React, { useRef } from 'react';
import { useState } from 'react';
import { apiBaseUrl, fetchApi } from '../../utils/fetchApi';
import { useRouter } from "next/router";
import Link from 'next/link';
import { Button, Modal } from 'react-bootstrap';
import { setCookie } from 'cookies-next';

const SearchModal = (props) => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState("");
  const [showModal, setShowModal] = useState(true);
  const handleOnClickModal = (searchValue) => {
    console.log(searchValue)
    searchValue = JSON.parse(searchValue);
    setCookie('search', searchValue);
    const label = `${searchValue.refVal}, ${searchValue.alphaCode}`
    setSelectedValue(label)
    setShowModal(false);
    router.push(searchValue.path)
  }

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
        <h5>You typed &quot;{props.inputValue}&quot; but did you mean</h5>
        {(props.content.length)? props.content.map((items, index) => (
          <>
          <label key={`label-${index}`}>{items.label}</label>
          {/* <ul className='list-group list-group-flush mb-2'>
            {items.options.map((item, i) => {
              let hrefLink = JSON.parse(item.value).path;
              return (<li key={`li-${index}-${i}`} className='list-group-item'><Link key={`mslink-${index}-${i}`} href={`${hrefLink}`}>{item.label}</Link></li>)
            })}
          </ul> */}
          <ul className='list-group list-group-flush mb-2'>
            {items.options.map((item, i) => {
              let hrefLink = JSON.parse(item.value).path;
              return (<li style={{cursor:'pointer'}} key={`li-${index}-${i}`} className='list-group-item' onClick={()=>handleOnClickModal(item.value)}>{item.label}</li>)
            })}
          </ul>
          </>
        )) : (<h6>No option found!</h6>)}
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
  const [selectedValue, setSelectedValue] = useState("");

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
    // console.log(showList, showModal)
  };
  const handleSearchRoute = (searchValue) => {
    router.push(searchValue.path)
  }
  const handleOnClick = (searchValue) => {
    console.log(searchValue)
    searchValue = JSON.parse(searchValue);
    setCookie('search', searchValue);
    const label = `${searchValue.refVal}, ${searchValue.alphaCode}`
    setSelectedValue(label)
    setShowList(false);
    router.push(searchValue.path)
  }
      // console.dir(searchContent)
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
                      <input type="text" className="form-control" onKeyUp={loadOptions} placeholder="Address, City, Zip, School District" 
                      value={selectedValue}
                      onChange={(event) => { setSelectedValue(event.target.value) }}/>
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
                  }}>{(searchList.length)? searchList.map((items, index) => (
                    <>
                    <label key={`label-${index}`}>{items.label}</label>
                    {/* <ul className='list-group list-group-flush mb-2'>
                      {items.options.map((item, i) => {
                        let hrefLink = JSON.parse(item.value).path;
                        return (<li key={`li-${index}-${i}`} className='list-group-item'><Link key={`link-${index}-${i}`} href={`${hrefLink}`}>{item.label}</Link></li>)
                      })}
                    </ul> */}
                    <ul className='list-group list-group-flush mb-2'>
                      {items.options.map((item, i) => {
                        let hrefLink = JSON.parse(item.value).path;
                        return (<li style={{cursor:'pointer'}} key={`li-${index}-${i}`} className='list-group-item' onClick={()=>handleOnClick(item.value)}>{item.label}</li>)
                      })}
                    </ul>
                    </>
                  )) : (<h6>No option found!</h6>)}</div>
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
        content={searchList}
      />
    </>
  )
}