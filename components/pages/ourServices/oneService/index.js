import React from "react";
import { Row, Container } from "reactstrap";
import Img from "../../../../utils/BackgroundImageRatio";
import parser from "html-react-parser";

const BodyContent = ({ value }) => {
  return (
    <>
      <section className="about-main ratio_36">
        <Container>
          <div className="user-about">
            <Row>
              <div className="col-sm-2 px-5">
                <Img
                  src={value?.service_image}
                  title={value?.service_image_title}
                  alt={value?.service_image_alt}
                  className="img-fluid mx-height-250"
                />
              </div>
              <div className="col-sm-10">
                <div className="about-content px-5">
                  {parser(value?.service_body ?? "")}
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BodyContent;
