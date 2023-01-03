import { useRouter } from "next/router";
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import { Button, Dropdown, Form, Offcanvas } from "react-bootstrap";
import { BsFilterLeft } from "react-icons/bs";
import { apiBaseUrl, fetchApi } from '../../utils/fetchApi';
import { useState } from "react";

export default function SearchFilterCopy({ mapView }) {

    const router = useRouter();
    const [form, setForm] = useState({});
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

    return (
        <>
        <section className="filter_topnav">
            <div className="container-fluid">
                <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-1">
                    <div className="col-12">
                        <div className="input-group">
                            <AsyncSelect 
                                cacheOptions 
                                loadOptions={loadOptions} 
                                components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
                                defaultOptions 
                                isMulti
                                placeholder="Enter an address neighborhood" classNamePrefix=""
                                onChange={()=>{}}
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <Select
                            components={{ IndicatorSeparator:() => null }}
                            isClearable={true}
                            isSearchable={false}
                            id="main_status"
                            placeholder="Status"
                            value={form?.status || ""}
                            onChange={(ev)=>handleFormChange('status', ev?.value || "")}
                            options={[
                                {value: "active", label: "Active"},
                                {value: "coming soon", label: "Coming Soon"},
                                {value: "pending", label: "Pending"}
                            ]}
                        />
                    </div>
                    <div className="col-12">
                        <Select
                            components={{ IndicatorSeparator:() => null }}
                            isClearable={true}
                            isSearchable={false}
                            id="main_bed"
                            placeholder="Beds"
                            value={form?.beds || ""}
                            onChange={(ev)=>handleFormChange('beds', ev?.value || "")}
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
                        <div className="col-12">
                            <Select
                                components={{ IndicatorSeparator:() => null }}
                                isClearable={true}
                                isSearchable={false}
                                id="main_bath"
                                placeholder="Baths"
                                value={form?.baths || ""}
                                onChange={(ev)=>handleFormChange('baths', ev?.value || "")}
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
                        <div className="col-12">
                            <Dropdown>
                                <Dropdown.Toggle as={'a'} id="dropdown-basic" className="form-select dropdown-control">
                                    Price
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <div className="d-flex align-items-center mx-1">
                                        <input type={'number'} className="form-control" id="main_min_price" placeholder="Min Price" value={form?.minprice || ""}
                                        onChange={(ev)=>handleFormChange('minprice', ev?.value || "")}/>
                                        <span className="mx-1">-</span>
                                        <input type={'number'} className="form-control" id="main_max_price" placeholder="Max Price" value={form?.maxprice || ""}
                                        onChange={(ev)=>handleFormChange('maxprice', ev?.value || "")}/>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col-12">
                            <button type="button" className="btn refresh_button" onClick={handleSidebar}>
                                <BsFilterLeft/>
                            </button>
                            <button type="submit" className="btn style2 search_top">Search</button>
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
                <Offcanvas.Title style={{color: "#000"}}>More Filters</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <div className="container">
                <form>
                {/* d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none */}
                    <div className="row d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none">
                        <div className="col-12">
                            <div className="form-group mb-3">
                                <label className="mb-3 h5" style={{color: "#000"}}>Price Range</label>
                                <div className="d-flex align-items-center">
                                    <input type={'number'} className="form-control" id="sb_min_price" placeholder="Min Price" value={form?.minprice || ""}
                                        onChange={(ev)=>handleFormChange('minprice', ev?.value || "")}/>
                                    <span className="mx-1">-</span>
                                    <input type={'number'} className="form-control" id="sb_max_price" placeholder="Max Price" value={form?.maxprice || ""}
                                        onChange={(ev)=>handleFormChange('maxprice', ev?.value || "")}/>
                                </div>
                            </div>
                            <hr/>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-3 h5" style={{color: "#000"}}>Beds</label>
                                        <select className="form-select" id="sb_bed"
                                            value={form?.beds || ""}
                                            onChange={(ev)=>handleFormChange('beds', ev?.value || "")}
                                        >
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
                                        <label className="mb-3 h5" style={{color: "#000"}}>Baths</label>
                                        <select className="form-select" id="sb_bath"
                                            value={form?.baths || ""}
                                            onChange={(ev)=>handleFormChange('baths', ev?.value || "")}
                                        >
                                            <option value={'any'}>Any</option>
                                            <option value={1}>1+</option>
                                            <option value={2}>2+</option>
                                            <option value={3}>3+</option>
                                            <option value={4}>4+</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="form-group mb-3">
                                <label className="mb-3 h5" style={{color: "#000"}}>Listing Status</label>
                                <select className="form-select" id="sb_status"
                                    value={form?.status || null}
                                    onChange={(ev)=>handleFormChange('status', ev?.value || "")}
                                >
                                    <option selected value={''} >Any</option>
                                    <option value={'active'}>Active</option>
                                    <option value={'coming soon'}>Coming Soon</option>
                                    <option value={'pending'}>Pending</option>
                                </select>
                            </div>
                            <hr/>
                        </div>
                    </div>
                    <label className="mb-3 h5" style={{color: "#000"}}>Home Type</label>
                    <div className="form-group">
                        <div className="form-check-inline m-2">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="types[]" id="homes" defaultValue={'houses'} onChange={()=>handleOnChecked('types[], types')}/> Houses
                            </label>
                        </div>
                        <div className="form-check-inline m-2">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="types[]" id="homes" onChange={()=>handleOnChecked('types[], types')} defaultValue={'townhome'} /> Townhome
                            </label>
                        </div>
                        <div className="form-check-inline m-2">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="types[]" id="condo" defaultValue={'condo'} onChange={()=>handleOnChecked('types[], types')} /> Condo
                            </label>
                        </div>
                        <div className="form-check-inline m-2">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="types[]" id="land" defaultValue={'land'} onChange={()=>handleOnChecked('types[], types')} /> Land
                            </label>
                        </div>
                        <div className="form-check-inline m-2">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="types[]" id="multi-family" defaultValue={'multi-family'} onChange={()=>handleOnChecked('types[], types')} /> Multi-Family
                            </label>
                        </div>
                    </div>
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
                    <div className="form-group mb-3">
                        <label className="mb-3 h5" style={{color: "#000"}}>Lot Size</label>
                        <div className="d-flex align-items-center">
                            <input type={'number'} className="form-control" id="sb_min_lot" placeholder="Min Lot"/>
                            <span className="mx-1">-</span>
                            <input type={'number'} className="form-control" id="sb_max_lot" placeholder="Max Lot"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="form-group mb-3">
                        <label className="mb-3 h5" style={{color: "#000"}}>Year Build</label>
                        <div className="d-flex align-items-center">
                            <input type={'number'} className="form-control" id="sb_min_year" placeholder="Min Year"/>
                            <span className="mx-1">-</span>
                            <input type={'number'} className="form-control" id="sb_max_year" placeholder="Max Year"/>
                        </div>
                    </div>
                    <hr/>
                    <div className="form-group mb-3">
                        <label className="mb-3 h5" style={{color: "#000"}}>Features</label>
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="features[]" id="basement" defaultValue={'basement'} onChange={()=>handleOnChecked('features[], features')}/> Basement
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="features[]" id="singlestory" defaultValue={'singlestory'} onChange={()=>handleOnChecked('features[], features')}/> Single Story
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="features[]" id="newconstruction" defaultValue={'newconstruction'} onChange={()=>handleOnChecked('features[], features')}/> New Constuction
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="features[]" id="seniorcommunity" defaultValue={'seniorcommunity'} onChange={()=>handleOnChecked('features[], features')}/> Senior Community
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" name="features[]" id="bedroomonmain" defaultValue={'bedroomonmain'} onChange={()=>handleOnChecked('features[], features')}/> Bedroom on Main
                            </label>
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
    );
}