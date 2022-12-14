import { useEffect, useState } from "react";
import PropertyCard from "../property/PropertyCard";
import { Pagination } from "react-headless-pagination";

export default function BuyPropertyList({ properties, setHighlight }){

    const showPerPage = 40;
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(1);

    const [showproperty, setShowproperty] = useState([]);

    const handleShowProperty = (page) => {
        let offset = showPerPage * page;
        let dataList = JSON.parse(JSON.stringify(properties));
        setCurrentPage(page);
        document.getElementById('property_list')?.scrollIntoView({behavior:"smooth", block: "start", inline:"nearest"});
        setShowproperty(dataList.splice(offset, showPerPage));
    }
    useEffect(() => {
        let total = properties.length;
        if(total > showPerPage){
            if(total % showPerPage === 0){
                setPageCount(() =>(total/showPerPage));
                setCurrentPage(0);
            }else{
                setPageCount(() =>(Math.floor(total/showPerPage) + 1));
                setCurrentPage(0);
            }
        }else{
            setCurrentPage(0);
        }
        handleShowProperty(0);
    }, [properties]);
    // console.log(pageCount)
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
                            <option value={1}>Newest to Oldest</option>
                            <option value={2}>Oldest to Newest</option>
                            <option value={3}>Price High to Low</option>
                            <option value={4}>Price Low to High</option>
                        </select>
                    </div>
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
            {properties.length !== 0 && (
            <Pagination
                currentPage={currentPage}
                setCurrentPage={handleShowProperty}
                totalPages={pageCount}
                edgePageCount={2}
                middlePagesSiblingCount={2}
                className="pagination list-style mt-10"
                truncableText="..."
                truncableClassName=""
                >
                <Pagination.PrevButton className=""><i className="fa fa-angle-left" style={{fontSize: 1.2+'rem'}} />  Prev</Pagination.PrevButton>

                <div className="flex items-center justify-center flex-grow">
                    <Pagination.PageButton
                    activeClassName="active"
                    inactiveClassName=""
                    className=""
                    />
                </div>

                <Pagination.NextButton className="">Next  <i className="fa fa-angle-right" style={{fontSize: 1.2+'rem'}} /> </Pagination.NextButton>
            </Pagination>
            )}

        </section>
    )
}