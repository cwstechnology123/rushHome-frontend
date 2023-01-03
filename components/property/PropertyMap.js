import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { memo } from "react";
import LocationMap from "../gmap/LocationMap";
import Marker from "../gmap/Marker";

const render = (status) => {
    if (status === Status.FAILURE) {
      return <p>Map failed to load</p>;
    }
    return <p>Loading...</p>;
};

const PropertyMap = ({ address, position }) => {
    
    return (
        <div className="location_box heading_line">
            <div className="col-xl-12 col-lg-12">
                <div className="section-title style1 text-left">
                    <h2>Location</h2>
                    <hr />
                    <div className="contact_map mt-0" style={{ height: "400px", width: "100%" }}>
                        <Wrapper
                            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}
                            render={render}
                        >
                            <LocationMap
                                center={{
                                    lat: parseFloat(position.lat),
                                    lng: parseFloat(position.lng),
                                }}
                                address={address}
                                zoom={15}
                                minZoom={3}
                                maxZoom={20}
                                draggable={false}
                                fullscreenControl={false}
                                streetViewControl={true}
                                mapTypeControl={true}
                                zoomControl={true}
                                clickableIcons={false}
                            >
                                <Marker position={{
                                    lat: parseFloat(position.lat),
                                    lng: parseFloat(position.lng),
                                }} />
                                {/* <Marker position={{
                                    lat: parseFloat(position.lat),
                                    lng: parseFloat(position.lng),
                                }} myIcon={true} /> */}
                            </LocationMap>
                        </Wrapper>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default memo(PropertyMap);