import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Button, Dropdown, Form, Offcanvas } from "react-bootstrap";
import { BsFilterLeft } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { priceFilter } from "../../utils/propertyFilters";
import AsyncSelect from 'react-select/async';
import { apiBaseUrl, fetchApi } from '../../utils/fetchApi';
import Select from 'react-select';
import ReactSlider from "react-slider";


export default function SearchFilter({bounds}) {

    const router = useRouter();
    const [form, setForm] = useState({});
    const [showFilter, setShowFilter] = useState(false);
    const [priceRange, setPriceRange] = useState(0);
    const priceRef = useRef(null);
    const handleSidebar = () => {
        setShowFilter(!showFilter)
    }
    const handleOnChange = (name, vals) => {
        setForm({...form, [name]: vals})
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
    // console.log(priceFilter)

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
        {/* bye_topnav */}
            <section className="filter_topnav">
                <div className="container-fluid"> 
                    <form>
                        <div className="row justify-content-center mb-1">
                            <div className="col-lg-4 col-md-8 col-sm-8 col-12">
                                <AsyncSelect 
                                    cacheOptions 
                                    loadOptions={loadOptions} 
                                    components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                                    defaultOptions 
                                    isMulti
                                    placeholder="Enter an address neighborhood" classNamePrefix="react-select"
                                    onChange={handleOnSelectOptChange}
                                />
                            </div>
                            <div className="col-lg-8 col-md-4 col-sm-4 col-12">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-lg-8 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block">
                                        <div className="row">
                                            <div className="col-3">
                                                <Select
                                                    components={{ IndicatorSeparator:() => null }}
                                                    isClearable={true}
                                                    isSearchable={false}
                                                    id="main_status"
                                                    placeholder="Status"
                                                    onChange={(ev)=>handleOnChange('prop_status', ev?.value || "")}
                                                    options={[
                                                        {value: "active", label: "Active"},
                                                        {value: "coming soon", label: "Coming Soon"},
                                                        {value: "pending", label: "Pending"}
                                                    ]}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <Select
                                                    components={{ IndicatorSeparator:() => null }}
                                                    isClearable={true}
                                                    isSearchable={false}
                                                    id="main_bed"
                                                    placeholder="Beds"
                                                    onChange={(ev)=>handleOnChange('prop_bed', ev?.value || "")}
                                                    options={[
                                                        {value: "", label: "Any"},
                                                        {value: "1", label: "1+"},
                                                        {value: "2", label: "2+"},
                                                        {value: "3", label: "3+"},
                                                        {value: "4", label: "4+"},
                                                        {value: "5", label: "5+"}
                                                    ]}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <Select
                                                    components={{ IndicatorSeparator:() => null }}
                                                    isClearable={true}
                                                    isSearchable={false}
                                                    id="main_bath"
                                                    placeholder="Baths"
                                                    onChange={(ev)=>handleOnChange('prop_bath', ev?.value || "")}
                                                    options={[
                                                        {value: "", label: "Any"},
                                                        {value: "1", label: "1+"},
                                                        {value: "2", label: "2+"},
                                                        {value: "3", label: "3+"},
                                                        {value: "4", label: "4+"},
                                                        {value: "5", label: "5+"}
                                                    ]}
                                                />
                                            </div>
                                            <div className="col-3">
                                                <Dropdown>
                                                    <Dropdown.Toggle as={'a'} id="dropdown-basic" className="form-select dropdown-control">
                                                        Price
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <div className="row px-2">
                                                            <div className="col-6">
                                                                <input type={'number'} className="form-control" id="main_min_price" placeholder="Min Price" value={form?.prop_min_price || ''} onChange={(ev)=>handleOnChange('prop_min_price', ev.target.value)}/>
                                                            </div> - 
                                                            <div className="col-6">
                                                                <input type={'number'} className="form-control" id="main_max_price" placeholder="Max Price" value={form?.prop_max_price || ''} onChange={(ev)=>handleOnChange('prop_max_price', ev.target.value)}/>
                                                            </div>
                                                        </div>
                                                    </Dropdown.Menu>
                                                </Dropdown>

                                                {/* <button type="button" className="form-select custom-control" ref={priceRef} onClick={() => setShowPrice(!showPrice)}>Price</button>
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
                                                            inset: '5px auto auto 0px !important',
                                                            ...props.style,
                                                        }}
                                                    >
                                                        <div className="row">
                                                            <div className="col-6">
                                                            <input type={'number'} className="form-control" id="main_min_price" placeholder="Min Price" value={form?.prop_min_price || ''} onChange={(ev)=>handleOnChange('prop_min_price', ev.target.value)}/>
                                                            </div>
                                                            <div className="col-6">
                                                                <input type={'number'} className="form-control" id="main_max_price" placeholder="Max Price" value={form?.prop_max_price || ''} onChange={(ev)=>handleOnChange('prop_max_price', ev.target.value)}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )}
                                                </Overlay> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12">
                                        <button type="button" className="btn refresh_button" onClick={handleSidebar}>
                                            <BsFilterLeft/>
                                        </button>
                                        <button type="submit" onClick={handlePropFilter} className="btn style2 search_top">Search</button>
                                        <button type="reset" className="btn refresh_button" onClick={()=>setForm({})}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                
                                
                            </div>
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
                                    
                                </div>
                                <div className="row mb-3">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label className="mb-3">Beds</label>
                                            <select className="form-select" id="sb_bed" value={form?.prop_bed || 'any'} onChange={(ev)=>handleOnChange('prop_bed', ev.target.value)}>
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
                                            <select className="form-select" id="ab_bath" value={form?.prop_bath || 'any'} onChange={(ev)=>handleOnChange('prop_bath', ev.target.value)}>
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
                                    <select className="form-select" id="sb_status" value={form?.prop_status || ''} onChange={(ev)=>handleOnChange('prop_status', ev.target.value)}>
                                        <option selected value={''} >Any</option>
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