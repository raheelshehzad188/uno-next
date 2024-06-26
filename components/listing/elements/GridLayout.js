/**
 * It takes in a list of properties and returns a list of property boxes
 * @returns A div with a className of property-2 row column-sm zoom-gallery property-label
 * property-grid.
 */
import React, { Fragment } from "react";
import { Col, Row } from "reactstrap";
import PropertyBox from "../../elements/propertyBoxs/PropertyBox";

const GridLayout = ({ value, loading }) => {
  return (
    <>
      <Row className="property-2 column-sm zoom-gallery property-label property-grid">
        {value &&
          value?.map((data, i) => (
            <Fragment key={i}>
              <Col md="4" className="wow fadeInUp grid-view" key={i}>
                <PropertyBox data={data} />
              </Col>
            </Fragment>
          ))}
      </Row>
    </>
  );
};

export default GridLayout;
