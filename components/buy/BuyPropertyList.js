import { useEffect, useState } from "react";
import PropertyCard from "../property/PropertyCard";
import Pagination from 'react-responsive-pagination';
import { Form, InputGroup } from "react-bootstrap";
import { GrSort } from "react-icons/gr";

export default function BuyPropertyList({ properties, setHighlight }){
    const showPerPage = 40;
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(1);
    const [showproperty, setShowproperty] = useState([]);

    const handleShowProperty = (page) => {
        let offset = showPerPage * page;
        let dataList = JSON.parse(JSON.stringify(properties));
        setCurrentPage(page);
        if(page){
            document.getElementById('property_list')?.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
        }
        setShowproperty(dataList.splice(offset, showPerPage));
    }
    useEffect(() => {
        if(properties){
            let total = properties.length;
            let pcount = 1;
            if(total > showPerPage){
                if(total % showPerPage === 0){
                    pcount = Math.round(total/showPerPage);
                }else{
                    pcount = Math.round(Math.floor(total/showPerPage) + 1);
                }
            }
            setPageCount(pcount);
            setCurrentPage(0);
            handleShowProperty(0);
        }
        
    }, [properties]);

    return (
        <section className="listing-wrap px-3" id="property_list">
            <div className="row align-items-center py-3" style={{position: 'sticky', top: 0, zIndex: 999, backgroundColor: '#f9f9f9'}}>
                <div className="col-xl-8 col-lg-8 col-md-8">
                    <div className="profuct-result">
                        <p>We found <span>{properties?.length || 0}</span> properties available for you</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 mobile-device-hide">
                    <div className="filter-item-sort">
                        <InputGroup>
                            <InputGroup.Text id="basic-addon1"><GrSort/>
                            &nbsp;Sort By</InputGroup.Text>
                            <Form.Select aria-label="Default select example">
                                <option value={1}>Newest to Oldest</option>
                                <option value={2}>Oldest to Newest</option>
                                <option value={3}>Price High to Low</option>
                                <option value={4}>Price Low to High</option>
                            </Form.Select>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                {showproperty.map((property, i) => (
                    <div className="col-md-6 col-12" key={`property-block-${i}-${property.id}`} onMouseEnter={()=>setHighlight({id: property.id, position: property.geography, price: property.listPrice})} onMouseLeave={()=>setHighlight(null)}>
                        <PropertyCard property={property}/>
                    </div>
                ))}
                {properties.length === 0 && (
                    <div className="col-12"><h4 className="text-danger text-center">No result found</h4></div>
                )}
                {properties.length !== 0 && (
                    <div className="col-12">
                        <Pagination
                            previousLabel="< Prev"
                            ariaPreviousLabel="Prev"
                            nextLabel="Next >"
                            ariaNextLabel="Next"
                            current={currentPage}
                            total={pageCount}
                            onPageChange={handleShowProperty}
                        />
                    </div>
                )}
            </div>
        </section>
    )
}