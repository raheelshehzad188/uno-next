/**
 * It takes an array of objects as a prop and returns a slider with the data from the array
 * @returns An array of objects.
 */

import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import NoSsr from "../../../utils/NoSsr";
import { FaSignature, FaKey, FaHandsHelping } from "react-icons/fa";
import { FaTrowelBricks } from "react-icons/fa6";
import { useTranslation } from "next-i18next";

export const serviceSlider = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  centerPadding: "300px",
  responsive: [
    {
      breakpoint: 1916,
      settings: {
        centerPadding: "160px",
      },
    },
    {
      breakpoint: 1848,
      settings: {
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 1712,
      settings: {
        centerPadding: "70px",
      },
    },
    {
      breakpoint: 1660,
      settings: {
        centerPadding: "30px",
      },
    },
    {
      breakpoint: 1556,
      settings: {
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 1461,
      settings: {
        slidesToShow: 3,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
        arrows: false,
      },
    },
  ],
};

const PaymentPlan = ({ value }) => {
  const { t } = useTranslation("common");

  return (
    <section className="service-section service-bg">
      <Container>
        <div className="title-3 text-start">
          <h2>
            <span>{t("Payment Plan")} </span>
            {value?.project_payment_plan_plan_title}
          </h2>
          <p className="font-roboto">Attractive Payments Installments</p>
        </div>
      </Container>
      <Container fluid={true}>
        <Row>
          <Col>
            <NoSsr>
              <Slider
                className="service-slider arrow-gradient arrow-right"
                {...serviceSlider}
              >
                <div className="service-wrapper">
                  <div className="top-img-box">
                    <div>
                      <FaSignature className="img-fluid text-white" size={24} />
                    </div>
                  </div>
                  <div className="service-details">
                    <h4>{t("On Booking")}</h4>
                    <h1>
                      {value?.project_payment_plan_on_booking_percentage ?? 0}%
                    </h1>
                    <p className="font-roboto">{t("On Booking SubText")}</p>
                  </div>
                </div>
                <div className="service-wrapper">
                  <div className="top-img-box">
                    <div>
                      <FaTrowelBricks
                        className="img-fluid text-white"
                        size={24}
                      />
                    </div>
                  </div>
                  <div className="service-details">
                    <h4>{t("Construction")}</h4>
                    <h1>
                      {value?.project_payment_plan_construction_percentage ?? 0}
                      %
                    </h1>
                    <p className="font-roboto">{t("Construction SubText")}</p>
                  </div>
                </div>
                <div className="service-wrapper">
                  <div className="top-img-box">
                    <div>
                      <FaKey className="img-fluid text-white" size={24} />
                    </div>
                  </div>
                  <div className="service-details">
                    <h4>{t("On Handover")}</h4>
                    <h1>
                      {value?.project_payment_plan_on_handover_percentage ?? 0}%
                    </h1>
                    <p className="font-roboto">{t("On Handover SubText")}</p>
                  </div>
                </div>
                <div className="service-wrapper">
                  <div className="top-img-box">
                    <div>
                      <FaHandsHelping
                        className="img-fluid text-white"
                        size={24}
                      />
                    </div>
                  </div>
                  <div className="service-details">
                    <h4>{t("Post Handover")}</h4>
                    <h1>
                      {value?.project_payment_plan_post_handover_percentage ??
                        0}
                      %
                    </h1>
                    <p className="font-roboto">{t("Post Handover SubText")}</p>
                  </div>
                </div>
              </Slider>
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PaymentPlan;
