/**
 * It takes in a bunch of props, and returns a bunch of JSX
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React, { forwardRef, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import PropertyItem from "../../elements/PropertyItem";
import { useTranslation } from "next-i18next";

const CommunityProjects = forwardRef(({ entities, metaTitle }, ref) => {
  const { t } = useTranslation("common");
  return (
    <section className="property-section section-small pb-2" ref={ref}>
      <Container>
        <Row className="ratio_63">
          <Col md="12" className="property-grid-2 property-grid-slider">
            <div className="property-wrapper-grid">
              <div className="filter-panel">
                <div className="top-panel">
                  <div className="page-title">
                    <h2>{metaTitle}</h2>
                    <span className="show-result">
                      {t("Showing Properties")}:{" "}
                      <span className="fw-bold">{entities?.length}</span>
                    </span>
                  </div>
                </div>
              </div>
              <Row className="property-2 column-sm zoom-gallery property-label property-grid">
                {entities &&
                  entities?.map((data, i) => (
                    <Fragment key={i}>
                      <Col md="4" className="wow fadeInUp grid-view" key={i}>
                        <PropertyItem data={data} />
                      </Col>
                    </Fragment>
                  ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

CommunityProjects.displayName = "CommunityProjects";

export default CommunityProjects;
