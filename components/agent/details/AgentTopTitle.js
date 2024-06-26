import React from "react";
import { Container, Row, Col } from "reactstrap";
import ReviewStar from "../../elements/ReviewStar";
import Img from "../../../utils/BackgroundImageRatio";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "next-i18next";

const AgentTopTitle = ({ singleData }) => {
  const { t } = useTranslation("common");
  return (
    <div className="single-agent-section">
      <Container>
        <div className="single-title">
          <Row>
            <Col md="2">
              <div className="portfolio-image">
                <Img src={singleData?.agent_image} />
              </div>
            </Col>
            <Col md="10">
              <div className="agent-info">
                <div className="d-flex">
                  <h2>
                    {t("Hi, I'm")}{" "}
                    <span className="text-primary">
                      {singleData?.agent_name}
                    </span>
                  </h2>
                  <span className="ms-auto me-3">
                    <ReviewStar rating={singleData?.count_stars} />
                  </span>
                </div>
                <h6>
                  {t("I work as")} <b>{singleData?.agent_job}</b>
                </h6>
                <p className="mt-1">
                  {t("and specialist in")}{" "}
                  <b>{singleData?.agent_specialties}</b>
                </p>
                <Row>
                  <Col md="4">
                    <p className="mt-2">
                      {t("I speak")}
                      {singleData?.agent_language
                        .split(",")
                        .map((language, i) => (
                          <span
                            className="label label-light label-rounded ms-2"
                            key={i}
                          >
                            {t(language.trim())}
                          </span>
                        ))}
                    </p>
                  </Col>
                  <Col md="8">
                    <div className="share-buttons text-end mt-2">
                      <a
                        className="btn btn-gradient btn-pill"
                        href={`tel:${singleData?.agent_mobile_no}`}
                      >
                        <FaPhoneAlt />
                        {t("Call")}
                      </a>
                      <a
                        className="btn btn-dashed btn-pill"
                        href={`https://api.whatsapp.com/send?phone=${singleData?.agent_whatsapp_number}`}
                      >
                        <FaWhatsapp /> {t("Whatsapp")}
                      </a>
                      <a
                        className="btn btn-dashed btn-pill"
                        href={`mailto:${singleData?.agent_email}`}
                      >
                        <FaEnvelope />
                        {t("Email")}
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AgentTopTitle;
