import Link from "next/link";
import React from "react";
import parse from "html-react-parser";

const WhatAreYouLookingFor = ({ whatYouLookFor }) => {
  return (
    <div className="looking-icons">
      {/* <h5>What are you looking for?</h5> */}
      <ul>
        {whatYouLookFor &&
          Object.values(whatYouLookFor).map((data, i) => (
            <li key={i}>
              <Link
                href={data.property_type_slug}
                className="looking-icon glassy"
              >
                <div className="property-svg">
                  {parse(data.property_type_icon)}
                </div>
                <h6>{data.property_type_title}</h6>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WhatAreYouLookingFor;
