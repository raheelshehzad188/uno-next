/**
 * It returns a section with a container with a row with a column with a slider with a div with a
 * logo-box with an image
 * @returns A function that returns a component.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import DynamicFaIcon from "../../../utils/DynamicIcon/DynamicFaIcon";

import NoSsr from "../../../utils/NoSsr";

const ProjectFeature = ({ features }) => {
  const slideSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: features.length > 4 ? 4 : features.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    features && (
      <section className="small-section bg-light-blue arrow-gradient">
        <Container>
          <Row>
            <Col>
              <NoSsr>
                <Slider
                  className="slide-3 brand-slider project-features-slider"
                  {...slideSettings}
                >
                  {features &&
                    features.map((data, i) => (
                      <div key={i}>
                        <DynamicFaIcon name={data.facility_icon ?? ""} />
                        <span>{data.facility_title}</span>
                      </div>
                    ))}
                </Slider>
              </NoSsr>
            </Col>
          </Row>
        </Container>
      </section>
    )
  );
};

export default ProjectFeature;
