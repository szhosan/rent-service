import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
  const defaultProps = {
    center: {
      lat: 46.4125952,
      lng: 30.7331072,
    },
    zoom: 12,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBg69z_78N06mj0RHi8vJTyOaXeXMHCV7I" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={46.4125952} lng={30.7331072} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
