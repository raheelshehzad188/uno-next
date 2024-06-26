/**
 * It takes an array of objects and returns a Slider component with a bunch of divs inside
 * @returns The return value is the value of the last expression evaluated inside the function.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import NoSsr from "../../utils/NoSsr";
import { useTranslation } from "next-i18next";

const FAQSection = ({ value }) => {
  const { t } = useTranslation("common");
  const faqSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: false,
  };

  return (
    <section className="pb-0 testimonial-style-2">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2>FAQ</h2>
              <p className="font-roboto">{t("FAQ SubText")}</p>
            </div>
            <NoSsr>
              <Slider
                className="testimonial-3 arrow-gradient modern-dot"
                {...faqSliderSettings}
              >
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <Row className="our-client">
                        <Col md="4">
                          <div className="client-left">
                            {data.buy_step_icon && (
                              <img
                                src={data.buy_step_icon}
                                className="img-fluid"
                              />
                            )}
                          </div>
                        </Col>
                        <Col md="8">
                          <div className="client-right">
                            <h3>{data.buy_step_title}</h3>
                            <p className="font-roboto">
                              {data.buy_step_description}
                            </p>
                            <span className="quote-img">
                              <img
                                src="/assets/images/testimonial/quote-2.png"
                                alt=""
                              />
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  ))}
              </Slider>
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQSection;
