/**
 * It takes in an array of objects and returns a row of property boxes
 * @returns A section with a container, row, and col.
 */
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import { useRouter } from "next/router";
import PropertyBox from "../../elements/propertyBoxs/PropertyBox";
import { useTranslation } from "next-i18next";

const FeaturedProjectSection = ({ value, pages }) => {
  const router = useRouter();
  const activeLanguage = router.locale;
  const { t } = useTranslation("common");
  const allProjectsPage = pages?.find((page) => page.page_code === "project");

  return (
    <section className="property-section pb-0">
      <Container>
        <Row className="ratio_63">
          <Col md="12" className="property-grid-2 property-grid-slider">
            <div className="property-wrapper-grid">
              <div className="title-1">
                <span className="label label-gradient">
                  {t("Our Featured Projects")}
                </span>
                <h2>{t("Exclusive Projects")}</h2>
                <hr />
              </div>
              <Row className="property-2 column-sm zoom-gallery property-label property-grid">
                {value &&
                  value.map((data, i) => (
                    <Fragment key={i}>
                      <Col md="4" className="wow fadeInUp grid-view" key={i}>
                        <PropertyBox data={data} />
                      </Col>
                    </Fragment>
                  ))}

                {value && (
                  <Col md="12" className="text-center">
                    <Link
                      locale={activeLanguage}
                      href={allProjectsPage?.path}
                      className="btn btn-light mt-3"
                    >
                      {t("See All Projects")}
                    </Link>
                  </Col>
                )}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProjectSection;
