import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const GoogleMap = ({ projectData, projectDeveloper }) => {
  const API_KEY = "AIzaSyDbFS1wkdOJxO3mwGRsQUlluVG1tdrvdgU";

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
};

export default GoogleMap;
