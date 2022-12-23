import { useRef, useState } from "react";
import { Button, Dropdown, Offcanvas, Overlay } from "react-bootstrap";
import { BsFilterLeft } from "react-icons/bs";
import ReactSlider from "react-slider";

export default function SearchFilter() {
    const [showFilter, setShowFilter] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const priceRef = useRef(null);
    const handleSidebar = () => {
        setShowFilter(!showFilter)
    }
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
                                <input type="text" className="form-control" id placeholder="Enter an address neighborhood" />
                            </div>
                        </div>
                        <div className="col-12">
                            <select className="form-select" id="inlineFormSelectPref" title="Status">
                                <option selected value={''} >Status</option>
                                <option value={1}>Active</option>
                                <option value={2}>Coming Soon</option>
                                <option value={3}>Pending</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <select className="form-select" id="inlineFormSelectPref">
                                <option selected value={'any'} >Bed</option>
                                <option value={'any'}>Any</option>
                                <option value={1}>1+</option>
                                <option value={2}>2+</option>
                                <option value={3}>3+</option>
                                <option value={4}>4+</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <select className="form-select" id="inlineFormSelectPref">
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
                                    ...props.style,
                                    }}
                                >
                                    <div className="row">
                                        <div className="col-6">
                                            <input type={'number'} className="form-control" placeholder="Min Price" />
                                        </div>
                                        <div className="col-6">
                                            <input type={'number'} className="form-control" placeholder="Max Price"/>
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
                            <button type="submit" className="btn style2 search_top">Search</button>
                        </div>
                        <div className="col-12">
                            <button type="reset" className="btn refresh_button">
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
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}