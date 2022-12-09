import PropertyCard from './PropertyCard'
import { useState } from 'react'
import { useRouter } from "next/router";

export default function List({properties}) {
  const [ listNum, setListNum] = useState(6); // Default number of properties dislplayed
  const router = useRouter();

  const handleClick = async (e, path) => {
    if (listNum == 12) {
      e.preventDefault()
      router.push(path) 
    }
    setListNum(prevListNum => prevListNum + 6) // 6 is the number of properties we want to load per click
  }

  return (
    <>
      <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
            <div className="row justify-content-center">
              {properties && properties.slice(0, listNum).map((property, i) => (
                <div key={`first${i}`} className="col-xl-4 col-lg-6 col-md-6">
                    <PropertyCard property={property}/>
                </div>
              ))}
              <div className="col-md-12 text-center">
                <button type="button" onClick={(e) => handleClick(e, "/buy")} className="btn style1 button_custom">See All Properties <i className="flaticon-right-arrow" /></button>
              </div>
            </div>
          </div>
          {/* <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
            <div className="row justify-content-center">
              {[...Array(6)].map((e, i) => (
                <div key={`second${i}`} className="col-xl-4 col-lg-6 col-md-6">
                    <PropertyCard index={(i+1)}/>
                </div>
              ))}
            </div>
          </div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
            <div className="row justify-content-center">
              {[...Array(6)].map((e, i) => (
                <div key={`third${i}`} className="col-xl-4 col-lg-6 col-md-6">
                    <PropertyCard index={(i+1)}/>
                </div>
              ))}
            </div>
          </div> */}
        </div>
    </>
  )
}