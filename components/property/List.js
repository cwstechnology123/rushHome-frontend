import Link from 'next/link'
import Image from 'next/image'
import PropertyCard from './PropertyCard'

export default function List({properties}) {
    return (
      <>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
              <div className="row justify-content-center">
                {properties && properties.map((property, i) => (
                  <div key={`first${i}`} className="col-xl-4 col-lg-6 col-md-6">
                      <PropertyCard property={property}/>
                  </div>
                ))}
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