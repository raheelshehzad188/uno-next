/**
 * It takes in a bunch of props, and returns a bunch of JSX
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import DeveloperItem from "./DeveloperItem";
import { useTranslation } from "next-i18next";

const DevelopersList = ({ entities, metaTitle }) => {
  const { t } = useTranslation("common");
  return (
    <section className="property-section section-small">
      <Container>
        <Row className="ratio_63">
          <Col md="12" className="property-grid-2 property-grid-slider">
            <div className="property-wrapper-grid">
              <div className="filter-panel">
                <div className="top-panel">
                  <div className="page-title">
                    <h2>{metaTitle}</h2>
                    <span className="show-result">
                      {t("Show Developers")}:{" "}
                      <span className="fw-bold">{entities?.length}</span>
                    </span>
                  </div>
                </div>
              </div>
              <Row className="property-4 arrow-gradient arrow-right list-property gy-4">
                {entities &&
                  entities?.map((data, i) => (
                    <Col key={i} md="4">
                      <DeveloperItem data={data} />
                    </Col>
                  ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DevelopersList;
