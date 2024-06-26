import { Map, Marker } from "pigeon-maps";
import React from "react";
import NoSsr from "../../../../utils/NoSsr";

const PigeonMap = ({ coordinates }) => {
  return (
    <>
      <NoSsr>
        <Map defaultCenter={coordinates} defaultZoom={11}>
          <Marker width={50} anchor={coordinates} />
        </Map>
      </NoSsr>
    </>
  );
};

export default PigeonMap;
