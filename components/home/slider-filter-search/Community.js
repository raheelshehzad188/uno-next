import Link from "next/link";
import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";
import NoSsr from "../../../utils/NoSsr";
import { useSelector } from "react-redux";
import DynamicFaIcon from "../../../utils/DynamicIcon/DynamicFaIcon";
import { useTranslation } from "next-i18next";

const CommunitySection = ({ value }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const activeLanguage = router.locale;

  const { currency, currencyValue } = useSelector(
    (state) => state.currencyReducer
  );

  const featureSlider = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="feature-section banner-4">
      <Container>
        <Row>
          <Col>
            <div className="title-1">
              <span className="label label-gradient">
                {t("For Property Investment")}
              </span>
              <h2>{t("Best Communities")}</h2>
              <hr />
            </div>
            <NoSsr>
              <Slider
                className="feature-1 arrow-light solid-theme2"
                {...featureSlider}
              >
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className="feature-wrapper">
                        <Row>
                          <Col xl="4" lg="3">
                            <div className="feature-left">
                              <div className="property-details">
                                <span className="font-roboto">
                                  {data.city_name}
                                </span>
                                <Link
                                  locale={activeLanguage}
                                  href={`${data.community_slug}`}
                                >
                                  <h3 className="d-flex">
                                    {data.community_title}
                                    <span>
                                      <span className="label label-success label-pill">
                                        {t("Featured")}
                                      </span>
                                    </span>
                                  </h3>
                                </Link>
                                <h6>
                                  {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: currency,
                                    maximumFractionDigits: 0,
                                  }).format(
                                    data?.community_starting_price *
                                      currencyValue
                                  )}{" "}
                                  <small>/ {t("Start From")}</small>
                                </h6>
                                <p className="font-roboto">
                                  {data.community_short_description}
                                </p>
                                <ul>
                                  {data.community_facility &&
                                    Object.values(data.community_facility).map(
                                      (data, i) => (
                                        <li key={i}>
                                          <DynamicFaIcon
                                            name={data.icon ?? ""}
                                          />
                                          <span className="mx-1 align-middle">
                                            {data.title}
                                          </span>
                                        </li>
                                      )
                                    )}
                                </ul>
                                <div className="property-btn">
                                  <Link
                                    locale={activeLanguage}
                                    href={`${data.community_slug}`}
                                    className="btn btn-sm btn-dashed btn-pill"
                                    tabIndex="0"
                                  >
                                    {t("Show Projects")}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xl="8" lg="9" className="order-md">
                            <div className="feature-image">
                              <Img
                                src={data.community_image}
                                title={data.community_image_title}
                                alt={data.community_image_alt}
                                className="bg-img"
                              />
                              <h4>
                                {data.number_of_projects}{" "}
                                {data.number_of_projects > 1
                                  ? t("Projects")
                                  : t("Project")}
                              </h4>
                            </div>
                          </Col>
                        </Row>
                      </div>
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

export default CommunitySection;
