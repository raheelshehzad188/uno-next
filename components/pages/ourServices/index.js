import React from "react";
import { Row, Container } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";
import parser from "html-react-parser";
import ServicesList from "../../service/list/ServicesList";

const BodyContent = ({ value }) => {
  return (
    <>
      <section className="about-main ratio_36">
        <Container>
          <Row>
            <div className="col">
              <div className="user-about">
                <Row>
                  <div className="col-md-7">
                    <div className="about-content px-5">
                      <h2>
                        <b>UNO</b> Real Estate Services
                      </h2>
                      <p className="font-roboto">{value?.entity_short_desc}</p>
                    </div>
                  </div>
                  <div className="col-md-5 px-5">
                    <Img
                      src={value?.entity_image}
                      title={value?.entity_image_title}
                      alt={value?.entity_image_alt}
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-md-12 mt-5">
                    {parser(value?.entity_body ?? "")}
                  </div>
                </Row>
              </div>
            </div>
            <div className="col-md-12">
              <ServicesList value={value?.entities} />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BodyContent;
