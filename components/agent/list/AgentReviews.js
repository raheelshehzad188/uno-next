/**
 * It takes an array of objects and returns a Slider component with a bunch of divs inside
 * @returns The return value is the value of the last expression evaluated inside the function.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { agentReviews } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import ReviewStar from "../../elements/ReviewStar";

const AgentReviews = ({ value }) => {
  return (
    <section className="py-0 testimonial-style-2">
      <Container>
        <Row>
          <Col>
            <NoSsr>
              <Slider className="testimonial-3 modern-dot" {...agentReviews}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <Row className="our-client">
                        <Col md="12">
                          <div className="p-5">
                            <p className="font-roboto property-desc">
                              {data.agent_review_description}
                            </p>
                            <ul className="client-rating">
                              <ReviewStar rating={data.agent_review_stars} />
                            </ul>
                            <h3>{data.agent_review_title}</h3>
                            <h6>Customer Reviews</h6>
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

export default AgentReviews;
