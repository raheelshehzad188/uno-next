import React from "react";
import { Col, Container, Row } from "reactstrap";
import GoogleMapPosition from "../../listing/gridView/map/GoogleMapPosition";

const ProjectContent = ({ value }) => {
  return (
    <section
      className="offer-section banner-section banner-4 slick-between"
      style={{
        backgroundImage: `url(${value?.project.project_image})`,
      }}
    >
      <Container>
        <Row>
          <Col>
            <div className="title-1 text-white">
              <span className="label label-gradient px-4 py-1">
                About Project
              </span>
              <hr />
            </div>
            <div className="offer-wrapper">
              <div className="media">
                <div className="offer-icon">
                  <img src={value?.project.project_logo} alt="" />
                </div>
                <div className="media-body">
                  <h6>Located in {value?.project_community.community_title}</h6>
                  <h3>About {value?.project.project_title}</h3>
                  <Row>
                    <Col md="7">
                      <p>{value?.project.project_description}</p>
                    </Col>
                    <Col md="5" className="px-4" style={{ minHeight: "200px" }}>
                      <GoogleMapPosition
                        position={{
                          lat: 25.211392229588935,
                          lng: 55.26824933874438,
                        }}
                      />
                      {/* <GoogleMap
                        iframeLink={value?.project.project_properties_map}
                      /> */}
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ProjectContent;
