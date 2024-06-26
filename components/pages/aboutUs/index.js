import React from "react";
import { Row, Container, Card } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";
import parser from "html-react-parser";
import { useTranslation } from "next-i18next";
import parse from "html-react-parser";

const BodyContent = ({ value }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <section className="about-main ratio_36 section-sm ">
        <Container>
          <Row>
            <div className="col">
              <div className="user-about">
                <Row>
                  <div className="col-xl-5 col-lg-7">
                    <div className="about-content">
                      <h2>{parse(t("We are UNO"))}</h2>
                      <p>{value?.entity_short_desc}</p>
                    </div>
                  </div>
                  <div className="col-xl-7 map-image col-lg-5">
                    <Img
                      src={value?.entity_image}
                      title={value?.entity_image_title}
                      alt={value?.entity_image_alt}
                      className="img-fluid bg-img"
                    />
                    <div className="marker-icons">
                      <ul>
                        <li>
                          <img
                            className="img-fluid marker-1"
                            src="/assets/images/leaflet/marker-icon.png"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            className="img-fluid marker-2"
                            src="/assets/images/leaflet/marker-icon.png"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            className="img-fluid marker-3"
                            src="/assets/images/leaflet/marker-icon.png"
                            alt=""
                          />
                        </li>
                        <li>
                          <img
                            className="img-fluid marker-4"
                            src="/assets/images/leaflet/marker-icon.png"
                            alt=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-12 p-5">
                    {parser(value?.entity_body ?? "")}
                  </div>
                </Row>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BodyContent;
