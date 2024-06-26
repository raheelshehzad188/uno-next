import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import { slide1 } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import { useRouter } from "next/router";

const BrandSection = ({ value }) => {
  const router = useRouter();
  const activeLanguage = router.locale;

  return (
    <section className="small-section bg-dark">
      <Container>
        <Row>
          <Col>
            <NoSsr>
              <Slider className="slide-1 brand-slider" {...slide1}>
                {value?.map((data, i) => (
                  <div key={i}>
                    <a
                      className="logo-box"
                      href={activeLanguage + "/" + data.developer_slug}
                    >
                      <img
                        src={data?.developer_logo}
                        alt=""
                        className="img-fluid"
                      />
                    </a>
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

export default BrandSection;
