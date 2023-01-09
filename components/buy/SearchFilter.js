import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Button, Dropdown, Form, Offcanvas } from "react-bootstrap";
import { BsFilterLeft } from "react-icons/bs";
import AsyncSelect from 'react-select/async';
import { apiBaseUrl, fetchApi } from '../../utils/fetchApi';
import { setCookie } from 'cookies-next';
import { toast } from "react-hot-toast";


export default function SearchFilter({ mapView, sendData, setPropertyList }) {

    const router = useRouter();
    const [form, setForm] = useState({
        stateOrProvince: "de",
        mlsStatus: "",
        bedroomsTotal: "",
        bathroomsTotalInteger: "",
        minListPrice: 0,
        maxListPrice: 0,
        page_limit: 1000
    });
    const [showFilter, setShowFilter] = useState(false);

    const handleSidebar = () => {
        setShowFilter(!showFilter)
    }
    const handleFormChange = (name, vals) => {
        setForm({...form, [name]: vals});
    }
    const handleOnChecked = (names, formNames) => {
        let checkboxes= document.querySelectorAll('input[name="'+names+'"]:checked');
        let output= [];
        checkboxes.forEach((checkbox) => {
            output.push(checkbox.value);
        });
        setForm({...form, [formNames]: output});
    }
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

    const resetAll = () => {
        setForm({
            ...form,
            mlsStatus: "",
            bedroomsTotal: "",
            bathroomsTotalInteger: "",
            minListPrice: 0,
            maxListPrice: 0,
            page_limit: 1000
        })
    }
    const handleOnSelectOptChange = async (selectedOption) => {
        console.log(selectedOption.value)
        const searchValue = JSON.parse(selectedOption.value);
        setCookie('search', searchValue);
        resetAll();
        const toastId = toast.loading("Loading....");
        sendData = {
            [searchValue.refKey] : searchValue.refVal,
            page_limit: 1500
        }
        const payload = {url: `${apiBaseUrl}/properties/search`, method: 'POST', data: sendData}
        const response = await fetchApi(payload);
        toast.dismiss(toastId)
        if(response && response.data){
            searchValue.refKey !== 'address' ? setPropertyList(response.data?.properties) : '';
            router.push(searchValue.path)
        }
    };
    
    const handleMainSearch = async () => {
        const toastId = toast.loading("Loading....");
        const payload = {url: `${apiBaseUrl}/properties/search`, method: 'POST', data: {...form, ...sendData}}
        const response = await fetchApi(payload);
        toast.dismiss(toastId)
        if(response && response.data){
            setPropertyList(response.data?.properties);
        }
    }

    // range slider code a
    const [minRange, setminRange] = useState(0);
    const [maxRange, setmaxRange] = useState(200);
    const [styleLeft, setstyleLeft] = useState(0);
    const [styleRight, setstyleRight] = useState(0);

    const minvalues = 10;
    // const maxRangeValue = 100;

    const MinInputhandle = (e) => {
        const Minvalue = e.target.value;
        setForm({...form, ['minListPrice']: Minvalue});
        setminRange(Minvalue)
        setstyleLeft((Minvalue * 1))
    }

    const MaxInputhandle = (e) => {
        const Maxvalue = e.target.value;
        setForm({...form, ['maxListPrice']: Maxvalue});
        setmaxRange(Maxvalue)
        setstyleRight(100 - ((Maxvalue / minvalues) * 100) / 20)
    }
    // range slider code a

    return (
        <>
        {/* bye_topnav */}
            <section className="filter_topnav">
                <div className="container-fluid"> 
                    <form>
                        <div className="row justify-content-center align-items-center mb-1">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                <AsyncSelect 
                                    cacheOptions 
                                    loadOptions={loadOptions} 
                                    components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                                    defaultOptions 
                                    // isMulti
                                    placeholder="Enter an address neighborhood" classNamePrefix="react-select"
                                    onChange={handleOnSelectOptChange}
                                />
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-lg-8 col-md-7 statusBeds">
                                        <div className="row">
                                            <div className="col-3">
                                                <select className="form-control" id="main_status"
                                                value={form.mlsStatus}
                                                onChange={(ev)=>handleFormChange('mlsStatus', ev.target.value || "")}>
                                                    <option value={''}>Status</option>
                                                    <option value={'active'}>Active</option>
                                                    <option value={'coming soon'}>Coming Soon</option>
                                                    <option value={'pending'}>Pending</option>
                                                </select>
                                            </div>
                                            <div className="col-3">
                                                <select className="form-control" id="main_bed" 
                                                value={form.bedroomsTotal}
                                                onChange={(ev)=>handleFormChange('bedroomsTotal', ev.target.value || "")}>
                                                    <option value={''}>Bed</option>
                                                    <option value={'any'}>Any</option>
                                                    <option value={'1'}>1+</option>
                                                    <option value={'2'}>2+</option>
                                                    <option value={'3'}>3+</option>
                                                    <option value={'44'}>4+</option>
                                                    <option value={'5'}>5+</option>
                                                </select>
                                            </div>
                                            <div className="col-3">
                                                <select className="form-control" id="main_bath" 
                                                value={form.bathroomsTotalInteger}
                                                onChange={(ev)=>handleFormChange('bathroomsTotalInteger', ev.target.value || "")}>
                                                    <option value={''}>Baths</option>
                                                    <option value={'any'}>Any</option>
                                                    <option value={'1'}>1+</option>
                                                    <option value={'2'}>2+</option>
                                                    <option value={'3'}>3+</option>
                                                    <option value={'44'}>4+</option>
                                                    <option value={'5'}>5+</option>
                                                </select>
                                            </div>
                                            <div className="col-3">
                                                <Dropdown>
                                                    <Dropdown.Toggle as={'a'} id="dropdown-basic" className="form-select dropdown-control">
                                                        Price
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <div className="price-input">
                                                            <div className="slider-range">
                                                                <div className="processbar"></div>
                                                            </div>
                                                            <div className="range-input">
                                                                <input type="range" onChange={MinInputhandle} classname="range-min" min={0} max={100} defaultValue={minRange} />
                                                                <input type="range" onChange={MaxInputhandle} classname="range-max" min={100} max={200} defaultValue={maxRange} />
                                                            </div>
                                                            <div className="input-field">
                                                                <div className="field">
                                                                    <input type="number" name="min" placeholder={'Min: ' + ' $ ' + minRange}/>
                                                                </div>
                                                                <div className="field">
                                                                    <input type="number" name="max" placeholder={'Max: ' + ' $ ' + maxRange}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 col-12">
                                        {/* <button type="button" className="btn refresh_button" onClick={handleSidebar}>
                                            <BsFilterLeft/>
                                        </button> */}
                                        <button type="submit" className="btn style2 search_top" onClick={(ev)=>{ev.preventDefault();handleMainSearch()}}>Search</button>
                                        <button type="reset" className="btn refresh_button">
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
                    <Offcanvas.Title style={{color: "#000"}}>More Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="container">
                        <form>
                            
                            <label className="mb-3 h5" style={{color: "#000"}}>Home Type</label>
                            <div className="all-home-type-btn">
                                <label htmlfor type="checkbox" htmlFor="homes">
                                    <input type="checkbox" id="homes" name="types[]" />
                                    <span className="btn style3">Houses</span>
                                </label>
                                <label htmlfor type="checkbox" htmlFor="townhome">
                                    <input type="checkbox" id="townhome" name="types[]" />
                                    <span className="btn style3">Townhome</span>
                                </label>
                                <label htmlfor type="checkbox" htmlFor="condo">
                                    <input type="checkbox" id="condo" name="types[]" />
                                    <span className="btn style3">Condo</span>
                                </label>
                                <label htmlfor type="checkbox" htmlFor="land">
                                    <input type="checkbox" id="land" name="types[]" />
                                    <span className="btn style3">Land</span>
                                </label>
                                <label htmlfor type="checkbox" htmlFor="multi-family">
                                    <input type="checkbox" id="multi-family" name="types[]" />
                                    <span className="btn style3">Multi-Family</span>
                                </label>
                            </div>
                            {/* onChange={()=>handleOnChecked('types[], types')} */}
                            <hr/>
                            <div className="form-group mb-3">
                                <label className="mb-3 h5" style={{color: "#000"}}>Square Footage</label>
                                <div className="d-flex align-items-center">
                                    <input type={'number'} className="form-control" id="sb_min_sqft" placeholder="Min SQFT"/>
                                    <span className="mx-1">-</span>
                                    <input type={'number'} className="form-control" id="sb_max_sqft" placeholder="Max SQFT"/>
                                </div>
                            </div>
                            <hr/>
                            <div className="row mb-3 justify-content-center align-items-center">
                                <div className="col-4">
                                    <div className="form-group sdas">
                                        <label>Lot Size</label>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="form-group dfdfd-sd">
                                        <div className="slect-div">
                                            <select className="form-select" id="ab_bath" value={form?.prop_bath || 'any'} onChange={(ev)=>handleFormChange('prop_bath', ev.target.value)}>
                                                <option value={'any'}>No Max</option>
                                                <option value={1}>1+</option>
                                                <option value={2}>2+</option>
                                                <option value={3}>3+</option>
                                                <option value={4}>4+</option>
                                            </select>
                                            <div className="line-code">
                                                -
                                            </div>
                                            <select className="form-select" id="sb_bed" value={form?.prop_bed || 'any'} onChange={(ev)=>handleFormChange('prop_bed', ev.target.value)}>
                                                <option value={'any'}>No Min</option>
                                                <option value={1}>1+</option>
                                                <option value={2}>2+</option>
                                                <option value={3}>3+</option>
                                                <option value={4}>4+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center align-items-center">
                                <div className="col-4">
                                    <div className="form-group sdas">
                                        <label>Year Built</label>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="form-group dfdfd-sd">
                                        <div className="slect-div">
                                            <select className="form-select" id="ab_bath" value={form?.prop_bath || 'any'} onChange={(ev)=>handleFormChange('prop_bath', ev.target.value)}>
                                                <option value={'any'}>No Max</option>
                                                <option value={1}>1+</option>
                                                <option value={2}>2+</option>
                                                <option value={3}>3+</option>
                                                <option value={4}>4+</option>
                                            </select>
                                            <div className="line-code">
                                                -
                                            </div>
                                            <select className="form-select" id="sb_bed" value={form?.prop_bed || 'any'} onChange={(ev)=>handleFormChange('prop_bed', ev.target.value)}>
                                                <option value={'any'}>No Min</option>
                                                <option value={1}>1+</option>
                                                <option value={2}>2+</option>
                                                <option value={3}>3+</option>
                                                <option value={4}>4+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="form-group mb-3">
                                <h3 className="mb-3">Features</h3>
                                <div className="check-list">
                                    <div className="checkbox-div">
                                        <label className="form-control1">
                                            <input type="checkbox" name="checkbox" defaultChecked /> Basement
                                        </label>
                                        <label className="form-control1">
                                            <input type="checkbox" name="checkbox" /> Single Story
                                        </label>
                                        <label className="form-control1">
                                            <input type="checkbox" name="checkbox" /> Senior Community
                                        </label>
                                        <label className="form-control1">
                                            <input type="checkbox" name="checkbox" /> New Construction Only
                                        </label>
                                        <label className="form-control1">
                                            <input type="checkbox" name="checkbox" /> Bedroom on Main
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </form>
                        
                    </div>
                </Offcanvas.Body>
                <Offcanvas.Header>
                    <button type="reset" className="btn btn-danger btn-sm p-2">Reset</button>
                    <button type="submit" className="btn btn-dark btn-sm pull-right p-2">Apply</button>
                </Offcanvas.Header>
            </Offcanvas>
        </>
    )
}