/**
 * It takes in a list of data and returns a list of components
 * @returns The return statement is used to return a value from a function.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import Exploration from "../../../layout/sidebarLayout/Exploration";
import FeaturedProjects from "../../../layout/sidebarLayout/FeaturedProjects";
import PropertyBoxFour from "../../elements/propertyBoxs/PropertyBoxFour";
import { useTranslation } from "next-i18next";

const AgentList = ({ clientData }) => {
  const { t } = useTranslation("common");
  return (
    <section className="agent-section property-section">
      <Container>
        <Row className="row ratio2_3">
          <Col md="8" className="property-grid-3 agent-grids">
            <div className="filter-panel">
              <div className="top-panel">
                <div>
                  <h2>{t("Agents List")}</h2>
                </div>
              </div>
              <span className="show-result">
                {t("Show Agents")}:{" "}
                <span className="fw-bold">{clientData?.length}</span>
              </span>
            </div>
            <div className="property-wrapper-grid list-view">
              <div className="property-2 row column-sm property-label property-grid list-view">
                {clientData &&
                  clientData?.map((data, i) => (
                    <Col className="wow fadeInUp list-view" md="12" key={i}>
                      <PropertyBoxFour data={data} />
                    </Col>
                  ))}
              </div>
            </div>
          </Col>
          <Col md="4">
            <Sidebar>
              <Exploration />
              <FeaturedProjects />
            </Sidebar>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AgentList;
