/**
 * It takes a value prop and uses it to render a gallery of images.
 * @returns The image is being returned as a string.
 */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";
import useStickyBar from "../../../utils/useStickyBar";

const CityBox = ({ value }) => {
  const fix = useStickyBar();

  return (
    <section
      className={`layout-5 overlay-header black-overlay light-overlay ${
        fix ? "fix-header-margin" : ""
      }`}
      style={{
        backgroundImage: `url(/assets/images/dubai.jpg)`,
      }}
    >
      <Container>
        <Row>
          <div className="col-md-8">
            <div className="glassy">
              <Row>
                <Col md="7">
                  <Img src={value?.city_banner_image} className="bg-img" />
                </Col>
                <Col md="5">
                  <div className="home-content p-5">
                    <h2 className="text-white">{value?.city_name}</h2>
                    <p className="text-white property-desc">
                      {value?.city_short_description}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default CityBox;
