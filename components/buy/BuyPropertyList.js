import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import PropertyCard from "./PropertyCard";


export default function BuyPropertyList({ properties, setHighlight }){

    const showPerPage = 40;
    const [currentPage, setCurrentPage] = useState(1);
    const pageCount = properties? Math.round(properties.length/showPerPage) : 1;
    const [showproperty, setShowproerty] = useState([]);

    const handleShowProperty = ({selected}) => {
        let offset = selected? selected : 0;
        let dataList = JSON.parse(JSON.stringify(properties));
        let limit = (offset==0) ? 1 : offset+1;
        setCurrentPage(limit);
        document.getElementById('property_list')?.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
        setShowproerty(dataList.splice((showPerPage * offset), (showPerPage * limit)));
        
    }

    useEffect(() => {
        handleShowProperty(0, showPerPage);
    }, [properties]);

    return (
        <section className="listing-wrap px-3" id="property_list">
            <div className="row align-items-center py-3" style={{position: 'sticky', top: 0, zIndex: 999, backgroundColor: '#f9f9f9'}}>
                <div className="col-xl-6 col-lg-8 col-md-8">
                    <div className="profuct-result">
                        <p>We found <span>{properties?.length || 0}</span> properties available for you</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-4 col-md-4">
                    <p className="sort_by">
                        <span className="sorted_list"><i className="fa fa-list-ul" aria-hidden="true" /></span>
                        &nbsp;Sorted By
                    </p>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4">
                    <div className="filter-item-cat">
                        <select>
                        <option value={1}>Top Selling</option>
                        <option value={2}>Sort By High To Low</option>
                        <option value={3}>Sort By Low To High</option>
                        </select>
                    </div>
                </div>
                <div className="lising_icons">
                    <span className="list_icon"><i className="fa fa-th-list" aria-hidden="true" /></span>
                    <span className="list_th_icon"><i className="fa fa-th" aria-hidden="true" /></span>
                </div>
            </div>
            <div className="row">
                {showproperty.map(property => (
                    <div className="col-md-6" key={`property-block-${property.id}`} onMouseEnter={()=>setHighlight({id: property.id, position: property.geography, price: property.listPrice})} onMouseLeave={()=>setHighlight(null)}>
                        <PropertyCard property={property}/>
                    </div>
                ))}
                {properties.length === 0 && (
                    <div className="col-12"><h4 className="text-danger text-center">No result found</h4></div>
                )}
            </div>
            <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination list-style mt-10'}
                subContainerClassName={''}

                initialPage={currentPage - 1}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handleShowProperty}
            />
            {/* <ul className="page-nav list-style mt-10">
                <li><a href="#"><i className="fa fa-angle-left" style={{fontSize: 1.2+'rem'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;Prev</a></li>
                <li><a className="active" href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">6</a></li>
                <li><a href="#">Next&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-angle-right" style={{fontSize: 1.2+'rem'}}></i></a></li>
            </ul> */}
        </section>
    )
}