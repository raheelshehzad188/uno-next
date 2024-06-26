/**
 * It takes in an array of objects and returns a slider with each object's data
 * @returns An array of objects.
 */
/**
 * It takes in an array of objects and returns a slider with each object's data
 * @returns An array of objects.
 */
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";
import NoSsr from "../../../utils/NoSsr";
import { useTranslation } from "next-i18next";
import { FaDownload } from "react-icons/fa";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  fade: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false,
      },
    },
  ],
};

const ProjectFloorPlan = ({ value }) => {
  const { t } = useTranslation("common");

  return (
    <section className="feature-section ratio_landscape">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2>
                Floor Plan <span>Options</span>
              </h2>
              <p className="font-roboto">
                visual representation of a project's properties interior from
                above
              </p>
            </div>
            <Gallery>
              <NoSsr>
                <Slider
                  className="feature-3 classic-feature arrow-image zoom-gallery"
                  {...sliderSettings}
                >
                  {value &&
                    value.map((data, i) => (
                      <div
                        data-title="classic-image1"
                        className="feature-style"
                        key={i}
                      >
                        <div className="feature-wrap">
                          <Row>
                            <Col xl="7" lg="5">
                              <div className="feature-image">
                                <div className="zoom">
                                  <Item
                                    original={data.project_property_image}
                                    width="800"
                                    height="600"
                                    key={i}
                                  >
                                    {({ ref, open }) => (
                                      <div
                                        className="feature-overlay"
                                        ref={ref}
                                        onClick={open}
                                      >
                                        <span>+</span>
                                      </div>
                                    )}
                                  </Item>
                                  <Img
                                    src={data.project_property_image}
                                    className="bg-img"
                                  />
                                </div>

                                <span className="label label-solid label-lg label-flat">
                                  {data.property_type}
                                </span>
                              </div>
                            </Col>
                            <Col xl="5" lg="7">
                              <div className="feature-content">
                                <div className="details">
                                  <h3>{data.project_property_title}</h3>
                                </div>
                                <ul className="detail-list">
                                  <li>
                                    <div className="d-flex">
                                      <img
                                        src="/assets/images/svg/icon/double-bed.svg"
                                        className="img-fluid img-icon"
                                        alt=""
                                      />
                                      <span>
                                        {data.project_property_count_rooms}{" "}
                                        Bedroom
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="d-flex">
                                      <img
                                        src="/assets/images/svg/icon/bathroom.svg"
                                        className="img-fluid img-icon"
                                        alt=""
                                      />
                                      <span>
                                        {data.project_property_number_of_bath}{" "}
                                        Bath
                                      </span>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="d-flex">
                                      <img
                                        src="/assets/images/svg/icon/square-ruler-tool.svg"
                                        className="img-fluid ruler-tool img-icon"
                                        alt=""
                                      />
                                      <span>
                                        {data.project_property_area_range} Sq ft
                                      </span>
                                    </div>
                                  </li>
                                </ul>
                                <ul className="feature-price">
                                  <li>
                                    <button class="btn btn-dashed btn-md">
                                      <FaDownload className="me-2 align-text-top" />
                                      {t("Get All Floor Plans")}
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    ))}
                </Slider>
              </NoSsr>
            </Gallery>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectFloorPlan;
