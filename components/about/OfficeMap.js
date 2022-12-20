import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { memo } from "react";
import Marker from "../gmap/Marker";
import OfficeLocationMap from "../gmap/OfficeLocationMap";

const render = (status) => {
    if (status === Status.FAILURE) {
      return <p>Map failed to load</p>;
    }
    return <p>Loading...</p>;
};

const OfficeMap = ({ address, position, timing }) => {
    return (
        <div className="contact_map mt-0" style={{ height: "80vh", width: "100%", position: 'relative' }}>
            <Wrapper
                apiKey={process.env.GOOGLE_API_TOKEN}
                render={render}
            >
                <OfficeLocationMap
                    center={{
                        lat: parseFloat(position.lat),
                        lng: parseFloat(position.lng),
                    }}
                    address={address}
                    timing={timing}
                    zoom={15}
                    minZoom={3}
                    maxZoom={20}
                    draggable={true}
                    fullscreenControl={false}
                    streetViewControl={true}
                    mapTypeControl={true}
                    zoomControl={true}
                    clickableIcons={true}
                >
                    <Marker position={{
                        lat: parseFloat(position.lat),
                        lng: parseFloat(position.lng),
                    }} />
                </OfficeLocationMap>
            </Wrapper>
        </div>
    )
};

export default memo(OfficeMap);