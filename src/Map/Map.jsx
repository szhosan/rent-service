import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import locations from "../data/locations.json";

class PlaceMarker extends Marker {
  render() {
    return (
      <div
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          backgroundColor: this.props.$hover ? "blue" : "green",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          scale: this.props.$hover ? "1.3" : "1",
        }}
      >
        {this.props.text}
      </div>
    );
  }
}

function GMap() {
  const [userLat, setUserLat] = useState(null);
  const [userLng, setUserLng] = useState(null);
  const mapRef = useRef(null);
  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        setUserLat(position?.coords?.latitude);
        setUserLng(position?.coords?.longitude);
      });
    }
  }, []);

  return (
    userLat &&
    userLng && (
      <GoogleMap
        ref={mapRef}
        defaultZoom={10}
        defaultCenter={{ lat: userLat, lng: userLng }}
      >
        {locations.map((location) => (
          <Marker key={location.id} position={location.location} />
        ))}
      </GoogleMap>
    )
  );
}

const MapWrapped = withScriptjs(withGoogleMap(GMap));

export default function Map() {
  console.log(locations);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBg69z_78N06mj0RHi8vJTyOaXeXMHCV7I&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
