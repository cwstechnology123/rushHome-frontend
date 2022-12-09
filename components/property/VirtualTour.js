import Iframe from "react-iframe";

export default function VirtualTour({tourLink}) {

    return (
        <div className="Descriptions_box heading_line">
            <div className="col-xl-12 col-lg-12">
            <div className="section-title style1 text-left mb-40">
                <h2>Virtual Tour</h2>
                <hr />
                <Iframe url={tourLink}
                    width="100%"
                    height="400px"
                    id=""
                    className=""
                    display="block"
                    position="relative"
                    allow="fullscreen"
                />
            </div>
            </div>
        </div>
    )
}