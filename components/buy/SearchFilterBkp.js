import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Button, Dropdown, Offcanvas, Overlay } from "react-bootstrap";
import { BsFilterLeft } from "react-icons/bs";
import { Select, SelectOption } from "reaselct";
import { priceFilter } from "../../utils/propertyFilters";
import AsyncSelect from 'react-select/async';
import { apiBaseUrl, fetchApi } from '../../utils/fetchApi';

export default function SearchFilter({bounds}) {

    const router = useRouter();
    const [form, setForm] = useState({});
    const [showFilter, setShowFilter] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const priceRef = useRef(null);
    const handleSidebar = () => {
        setShowFilter(!showFilter)
    }
    const handleOnChange = (name, ev) => {
        setForm({...form, [name]: ev.target.value})
    }
    const handlePropFilter = (ev) => {
        ev.preventDefault();
        if(showFilter){
            setShowFilter(false)
        }
        if(form){
            console.log(form)
        }
        // console.log(router)
    }
    console.log(priceFilter)

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

    const handleOnSelectOptChange = async (selectedOption) => {
        const path = selectedOption.value
        console.log(path)
    };

    return (
        <>
            <section className="bye_topnav">
                <div className="container-fluid">    
                    <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-1">
                        <div className="col-12">
                            <div className="input-group">
                                <div className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg></div>
                                <AsyncSelect cacheOptions loadOptions={loadOptions} defaultOptions 
                                isMulti
                                placeholder="Enter an address neighborhood" classNamePrefix="react-select"
                                onChange={handleOnSelectOptChange}
                                className="form-control" />
                            </div>
                        </div>
                        <div className="col-12">
                            <select className="form-select" id="main_status" value={form?.prop_status || 'any'} onChange={(ev)=>handleOnChange('prop_status', ev)}>
                                <option selected value={'any'}>Status</option>
                                <option value={'active'}>Active</option>
                                <option value={'coming soon'}>Coming Soon</option>
                                <option value={'pending'}>Pending</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <select className="form-select" id="main_bed" value={form?.prop_bed || 'any'} onChange={(ev)=>handleOnChange('prop_bed', ev)}>
                                <option selected value={'any'} >Bed</option>
                                <option value={'any'}>Any</option>
                                <option value={1}>1+</option>
                                <option value={2}>2+</option>
                                <option value={3}>3+</option>
                                <option value={4}>4+</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <select className="form-select" id="main_bath" value={form?.prop_bath || 'any'} onChange={(ev)=>handleOnChange('prop_bath', ev)}>
                                <option selected value={'any'}>Bath</option>
                                <option value={'any'}>Any</option>
                                <option value={1}>1+</option>
                                <option value={2}>2+</option>
                                <option value={3}>3+</option>
                                <option value={4}>4+</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button type="button" className="form-select custom-control" ref={priceRef} onClick={() => setShowPrice(!showPrice)}>Price</button>
                            <Overlay target={priceRef.current} show={showPrice} placement="bottom">
                                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                                <div
                                    {...props}
                                    style={{
                                        position: 'absolute',
                                        top: '5px',
                                        backgroundColor: 'white',
                                        padding: '5px 10px',
                                        color: 'black',
                                        border: '1px solid #eee',
                                        width: 400,
                                        borderRadius: 3,
                                        zIndex: 9,
                                        ...props.style,
                                    }}
                                >
                                    <div className="row">
                                        <div className="col-6">
                                            {/* <select className="form-control" id="main_min_price" value={form?.prop_min_price || ''} onChange={(ev)=>handleOnChange('prop_min_price', ev)}>
                                                <option value="">Min Price</option>
                                                {priceFilter.items.map(item => 
                                                    (<option value={item.value}>{item.name}</option>)
                                                )}
                                            </select> */}
                                            <Select
                                                value={form?.prop_min_price || ''}
                                                onChange={(ev)=>handleOnChange('prop_min_price', ev)}
                                            >
                                                <SelectOption value="">Min Price</SelectOption>
                                                {priceFilter.items.map((item, i) => 
                                                    (<SelectOption key={`mprice-${i}`} value={item.value}>{item.name}</SelectOption>)
                                                )}
                                            </Select>
                                        </div>
                                        <div className="col-6">
                                            <input type={'number'} className="form-control" id="main_max_price" placeholder="Max Price" value={form?.prop_max_price || ''} onChange={(ev)=>handleOnChange('prop_max_price', ev)}/>
                                        </div>
                                    </div>
                                </div>
                                )}
                            </Overlay>
                        </div>
                        <div className="col-12">
                            <button type="button" className="btn refresh_button" onClick={handleSidebar}>
                                <BsFilterLeft/>
                            </button>
                        </div>
                        <div className="col-12">
                            <button type="submit" onClick={handlePropFilter} className="btn style2 search_top">Search</button>
                        </div>
                        <div className="col-12">
                            <button type="reset" className="btn refresh_button" onClick={()=>setForm({})}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <Offcanvas show={showFilter} onHide={handleSidebar} placement={'end'} backdrop={true} scroll={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Advance Filter</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-12" style={{maxHeight: '80vh', overflowY: 'auto'}}>
                                <div className="form-group mb-3">
                                    <label className="mb-3">Price</label>
                                    <div className="row">
                                        <div className="col-6">
                                            <input type={'number'} className="form-control" id="sb_min_price" placeholder="Min Price" value={form?.prop_min_price || ''} onChange={(ev)=>handleOnChange('prop_min_price', ev)} />
                                        </div>
                                        <div className="col-6">
                                            <input type={'number'} className="form-control" id="sb_max_price" placeholder="Max Price" value={form?.prop_max_price || ''} onChange={(ev)=>handleOnChange('prop_max_price', ev)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="mb-3">Beds</label>
                                            <select className="form-select" id="sb_bed" value={form?.prop_bed || 'any'} onChange={(ev)=>handleOnChange('prop_bed', ev)}>
                                                <option value={'any'}>Any</option>
                                                <option value={1}>1+</option>
                                                <option value={2}>2+</option>
                                                <option value={3}>3+</option>
                                                <option value={4}>4+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                    <div className="form-group">
                                            <label className="mb-3">Baths</label>
                                            <select className="form-select" id="ab_bath" value={form?.prop_bath || 'any'} onChange={(ev)=>handleOnChange('prop_bath', ev)}>
                                                <option value={'any'}>Any</option>
                                                <option value={1}>1+</option>
                                                <option value={2}>2+</option>
                                                <option value={3}>3+</option>
                                                <option value={4}>4+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group mb-3">
                                    <label className="mb-3">Listing Status</label>
                                    <select className="form-select" id="sb_status" value={form?.prop_status || 'any'} onChange={(ev)=>handleOnChange('prop_status', ev)}>
                                        <option selected value={'any'} >Any</option>
                                        <option value={'active'}>Active</option>
                                        <option value={'coming soon'}>Coming Soon</option>
                                        <option value={'pending'}>Pending</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                <div style={{
                                    position: 'relative', 
                                    bottom: 0,
                                    borderTop: '1px solid #eee'
                                }}
                                className="form-group py-3"
                                >
                                    <button type="reset" className="btn btn-danger btn-sm" onClick={()=>setForm({})}>Reset</button>
                                    <button type="submit" onClick={handlePropFilter} className="btn btn-dark btn-sm pull-right">Apply</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    
                </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}