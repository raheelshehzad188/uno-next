/**
 * It takes in an array of objects and returns a Slider component with a bunch of divs inside it
 * @returns The return value is the value of the last expression evaluated inside the function.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { testimonial1 } from "../../data/slickSlider";
import NoSsr from "../../utils/NoSsr";
import { useTranslation } from "next-i18next";

const TestimonialReviews = ({ value }) => {
  const { t } = useTranslation("common");
  return (
    <section className="testimonial-style-1 pt-0">
      <Container>
        <Row>
          <Col>
            <div className="title-2">
              <h2>{t("What People Say")}</h2>
              <p>{t("Some of our happy clients reviews on Google")}</p>
            </div>
            <div className="slick-between">
              <NoSsr>
                <Slider
                  className="testimonial-1 dot-gradient"
                  {...testimonial1}
                >
                  {value &&
                    value.map((data, i) => (
                      <div key={i}>
                        <div className="pepole-comment">
                          <div className="client-msg">
                            <span className="quote">
                              <img
                                src="/assets/images/testimonial/quote.png"
                                alt=""
                              />
                            </span>
                            <p>{data.comment}</p>
                          </div>
                          <div className="media">
                            <img src={data.img} alt="" />
                            <div className="media-body">
                              <h3>{data.username}</h3>
                              <span>{data.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </Slider>
              </NoSsr>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialReviews;
