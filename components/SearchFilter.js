export default function SearchFilter({ searchFilter, setSerachFilter }) {

    return (
        <>
            <div className="container-fluid p-0 bg-light" style={{position:'fixed', top: 0+'px', width:100+'%', height: 100+'%', zIndex: 10}}>
                <div className="justify-content-center align-items-center text-center" style={{
                    backgroundColor:"black",
                    borderBottom: 1+"px",
                    borderColor: "gray.200",
                    padding: 2,
                    fontWeight: "400",
                    fontSize: 1.5+"rem", color: '#fdce64'}}
                >
                    Search by Filter <i className="fa fa-filter"></i>
                    <span className="close pull-right" onClick={() => setSerachFilter(!searchFilter)} style={{cursor:'pointer', marginRight: 20+'px'}}><i className="fa fa-times"></i></span>
                </div>
                <div className="container">
                    ADVANCE SEARCH FILTER WILL BE HERE
                </div>
            </div>
        </>
    )
}