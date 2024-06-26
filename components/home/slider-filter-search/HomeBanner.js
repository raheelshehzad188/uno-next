/**
 * It renders a section with a container, a row, and two columns. The first column contains a
 * container, which contains a div with a slider and a WhatAreYouLookingFor component. The second
 * column contains a div with an InputForm component
 * @returns The HomeBannerSection component is being returned.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import NoSsr from "../../../utils/NoSsr";
import WhatAreYouLookingFor from "../../elements/WhatAreYouLookingFor";
import HomeSliderContent from "./homeElements/HomeSliderContent";
import InputForm from "./homeElements/InputForm";
import { useTranslation } from "next-i18next";

const HomeBannerSection = ({ whatYouLookFor }) => {
  const { t } = useTranslation("common");

  const homeSlider = {
    dots: false,
    infinite: true,
    speed: 1400,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };


  return (
    <section className="home-section layout-1 layout-6">
      <div className="home-main">
        <Container>
          <Row>
            <Col lg="8">
              <Container>
                <div className="home-left">
                  <div>
                    {/* home main slider start*/}
                    <NoSsr>
                      <h6>{t("WantToBuyOrRentHomeInDubai?")}</h6>
                      <Slider
                        className="home-slider-1 arrow-light slick-shadow"
                        {...homeSlider}
                      >
                        <HomeSliderContent
                          img=""
                          mainTitle={t(
                            `YourGatewayToDubaiBestPropertyOpportunities`
                          )}
                        />
                        <HomeSliderContent
                          img=""
                          mainTitle={t("SpecializingInLucrative&Sustainable")}
                        />
                      </Slider>
                    </NoSsr>
                    {/* home main slider end*/}
                    <WhatAreYouLookingFor whatYouLookFor={whatYouLookFor} />
                  </div>
                </div>
              </Container>
            </Col>
            <Col xl="12" lg="12">
              <div className="home-search-6">
                <div className="vertical-search">
                  <div className="left-sidebar glassy">
                    {/* <h5 className="fw-bold mb-4">{t("Advanced Search")}</h5> */}
                    <InputForm lastSm="6" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HomeBannerSection;
