import React, { Fragment } from "react";

const PropertyLabel = ({ labels }) => {
  return (
    <>
      {Array.isArray(labels) &&
        labels?.map((values, i) => (
          <Fragment key={i}>
            <div>
              <span className="label label-dark">{values}</span>
            </div>
          </Fragment>
        ))}
    </>
  );
};

export default PropertyLabel;
