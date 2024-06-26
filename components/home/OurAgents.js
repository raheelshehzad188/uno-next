/**
 * It's a function that returns a section with a container, a row, a column, a div, a slider, and a map
 * function that returns a div, a row, two columns, two divs, a link, a span, a h6, a h3, a span, a p,
 * and another link
 * @returns The AboutSection component is being returned.
 */
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { useRouter } from "next/router";
import ReviewStar from "../elements/ReviewStar";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import NoSsr from "../../utils/NoSsr";
import { useTranslation } from "next-i18next";

const OurAgentsSection = ({ value, pages }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const activeLanguage = router.locale;
  const allAgentsPage = pages?.find((page) => page.page_code === "agent");

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: value?.length > 4 ? 4 : value?.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="pb-0 about-section slick-between">
      <Container>
        <Row>
          <Col>
            <div className="title-1">
              <span className="label label-gradient">{t("Contact Us")}</span>
              <h2>{t("Meet Our Agents")}</h2>
              <hr />
              {value && (
                <Col md="12" className="text-center">
                  <Link
                    locale={activeLanguage}
                    href={allAgentsPage?.path}
                    className="btn btn-link text-decoration-none"
                  >
                    {t("See All Agents")}
                  </Link>
                </Col>
              )}
            </div>
            <NoSsr>
              <Slider className="about-wrap arrow-white" {...sliderSettings}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <Row className="about-content">
                        <Col md="12">
                          <div className="about-image">
                            <img
                              src={data.agent_image}
                              className="img-fluid"
                              alt=""
                            />
                            <div className="about-overlay"></div>
                            <div className="overlay-content">
                              <ul>
                                <li>
                                  <a
                                    href={`https://api.whatsapp.com/send?phone=${data?.agent_whatsapp_number}`}
                                  >
                                    <FaWhatsappSquare size={24} />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    target="_blank"
                                    href={data?.agent_linkedin_url}
                                    rel="noopener noreferrer"
                                  >
                                    <FaLinkedin size={24} />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={data?.agent_instagram_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <FaInstagramSquare size={24} />
                                  </a>
                                </li>
                              </ul>
                              <span>"{t("Connect")}"</span>
                            </div>
                          </div>
                          <div className="our-details">
                            <Link
                              locale={activeLanguage}
                              href={allAgentsPage?.path + "/" + data.agent_slug}
                            >
                              <h6 className="d-flex">{data.agent_job}</h6>
                            </Link>
                            <h3>{data.agent_name}</h3>
                            <ul className="client-rating">
                              <ReviewStar rating={data.agent_review_stars} />
                            </ul>
                            <p className="font-roboto">
                              {t("Specialist in")} {data.agent_specialties}
                            </p>
                            <Link
                              locale={activeLanguage}
                              href={allAgentsPage?.path + "/" + data.agent_slug}
                              className="btn btn-gradient btn-pill mt-2"
                            >
                              {t("View Profile")}
                            </Link>
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

export default OurAgentsSection;
