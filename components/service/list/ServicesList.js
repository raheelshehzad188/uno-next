/**
 * It takes an array of objects as a prop and returns a section with a title and a row of columns. Each
 * column contains a box with a title, a description, and a button
 * @returns The ServiceSection component is being returned.
 */
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const ServicesList = ({ value }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const activeLanguage = router.locale;
  return (
    <section className="service-section service-2">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2
                dangerouslySetInnerHTML={{
                  __html: t("Provided Services"),
                }}
              />
              <p className="font-roboto">{t("Provided Services SubText")}</p>
            </div>
            <Row className=" property-service column-space">
              {value &&
                value.map((data, i) => (
                  <Col
                    xl="4"
                    md="6"
                    className={` ${
                      i === 2 ? "offset-xl-0 offset-md-3" : ""
                    } wow fadeInUp`}
                    key={i}
                  >
                    <div className="service-box">
                      <div className="service-title-block">
                        <div className="hover-line">
                          <Img
                            src={data.service_image}
                            className="service-img"
                          />
                          <div>
                            <svg className="icon-line-color">
                              <use xlinkHref="/assets/svg/icons.svg#line-straight"></use>
                            </svg>
                          </div>
                        </div>
                        <Link
                          locale={activeLanguage}
                          href={`/page/our-services/${data?.service_path}`}
                        >
                          <h3>{data.service_title}</h3>
                        </Link>
                      </div>
                      <p className="font-roboto">
                        {data.service_short_description}
                      </p>
                      <Link
                        locale={activeLanguage}
                        href={`/page/our-services/${data?.service_path}`}
                        className="btn btn-light-bg btn-round"
                      >
                        <span>{t("Read More")}</span>
                      </Link>
                    </div>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesList;
