import { Status, Wrapper } from "@googlemaps/react-wrapper";
import LocationMap from "../gmap/LocationMap";
import Marker from "../gmap/Marker";

const render = (status) => {
    if (status === Status.FAILURE) {
      return <p>Map failed to load</p>;
    }
    return <p>Loading...</p>;
};

export default function PropertyLocation({ address, position }) {
    return (
        <div className="location_box heading_line">
            <div className="col-xl-12 col-lg-12">
            <div className="section-title style1 text-left mb-40">
                <h2>Location</h2>
                <hr />
                <div className="contact_map" style={{ height: "70vh", width: "100%" }}>
                    <Wrapper
                        apiKey={process.env.GOOGLE_API_TOKEN}
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
                        </LocationMap>
                    </Wrapper>
                </div>
            </div>
            </div>
        </div>
    )
}