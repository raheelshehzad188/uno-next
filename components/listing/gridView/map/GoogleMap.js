import React from "react";

const GoogleMap = ({ iframeLink }) => {
  if (iframeLink != "") {
    return (
      <iframe
        style={{
          height: "100%",
          width: "100%",
          maxHeight: "420px",
          borderRadius: "6px",
        }}
        className="map"
        id="map"
        title="realestate location"
        src={iframeLink}
        allowFullScreen
      ></iframe>
    );
  }
};

export default GoogleMap;
