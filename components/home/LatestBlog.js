/**
 * It takes an array of objects and returns a new array of objects with the same keys but with the
 * values transformed by the function you pass in
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import NoSsr from "../../utils/NoSsr";
import BlogWrapBox from "../../components/blog/list/BlogWrapBox";
import { useTranslation } from "next-i18next";

const LatestBlogSection = ({ value }) => {
  const { t } = useTranslation("common");

  const blogSliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: value?.length > 3 ? 3 : value?.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="ratio2_1 simple-blog small-section">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2
                dangerouslySetInnerHTML={{
                  __html: t("Latest Blogs"),
                }}
              />

              <p className="font-roboto">
                {t("Latest Dubai Real Estate Articles")}
              </p>
            </div>
            <NoSsr>
              <Slider
                className="blog-2 arrow-gradient modern-dot"
                {...blogSliderSettings}
              >
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <BlogWrapBox data={data} />
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

export default LatestBlogSection;
