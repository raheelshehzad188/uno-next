/**
 * It returns a section with a container, row, and column. The column contains a div with a span, h2,
 * p, and a link
 * @returns A function that returns a component
 */
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";

const ProjectDeveloper = ({ value }) => {
  return (
    <section
      className="banner-section parallax-image"
      style={{
        backgroundImage: `url(${value?.developer_image})`,
      }}
    >
      <Container>
        <Row>
          <Col>
            <div className="banner-3 black-overlay">
              <span className={`label label-gradient label-flat`}>
                Developed by {value?.developer_title}
              </span>

              <Img
                src={value?.developer_logo}
                className="d-block p-5 m-auto"
                style={{ width: "300px" }}
              />
              <p className="text-white">{value?.developer_description}</p>
              <Link href="/agent/submit-property" className="btn btn-solid">
                Explore All Projects
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDeveloper;
