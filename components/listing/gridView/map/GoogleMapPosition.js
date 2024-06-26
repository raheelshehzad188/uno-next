import React from "react";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Marker,
  Pin,
} from "@vis.gl/react-google-maps";

const GoogleMapPosition = ({ position }) => {
  if (position != "") {
    return (
      <APIProvider apiKey={"AIzaSyD0YGyODQgggopu5BLzX_u8GN9K0e1Xgqs"}>
        <Map
          // mapId={"33245f08233c4f5d"}
          defaultCenter={position}
          defaultZoom={12}
          mapTypeControl={false}
          fullscreenControl={false}
          zoomControl={false}
          streetViewControl={false}
          keyboardShortcuts={false}
          style={{ borderRadius: "6px" }}
          styles={[
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [
                {
                  color: "#202c3e",
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [
                {
                  gamma: 0.01,
                },
                {
                  lightness: 20,
                },
                {
                  weight: "1.39",
                },
                {
                  color: "#ffffff",
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  weight: "0.96",
                },
                {
                  saturation: "9",
                },
                {
                  visibility: "on",
                },
                {
                  color: "#000000",
                },
              ],
            },
            {
              featureType: "all",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [
                {
                  lightness: 30,
                },
                {
                  saturation: "9",
                },
                {
                  color: "#29446b",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  saturation: 20,
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  lightness: 20,
                },
                {
                  saturation: -20,
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  lightness: 10,
                },
                {
                  saturation: -30,
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#193a55",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [
                {
                  saturation: 25,
                },
                {
                  lightness: 25,
                },
                {
                  weight: "0.01",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [
                {
                  lightness: -20,
                },
              ],
            },
          ]}
        >
          <Marker position={position} />
        </Map>
      </APIProvider>
    );
  }
};

export default GoogleMapPosition;
