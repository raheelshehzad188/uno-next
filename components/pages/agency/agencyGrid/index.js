/**
 * It takes in a list of data and returns a list of components
 * @returns The return statement is used to return a value from a function.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../../../../layout/sidebarLayout/Sidebar";
import Exploration from "../../../../layout/sidebarLayout/Exploration";
import RecentlyAdded from "../../../../layout/sidebarLayout/RecentlyAdded";
import Featured from "../../../../layout/sidebarLayout/Featured";
import PropertyBoxFour from "../../../elements/propertyBoxs/PropertyBoxFour";

const BodyContent = ({ clientData }) => {
  return (
    <section className="agent-section property-section">
      <Container>
        <Row className="row ratio2_3">
          <Col xl="8" lg="8" className="property-grid-3 agent-grids">
            <div className="filter-panel">
              <div className="top-panel">
                <div>
                  <h2>Agents List</h2>
                </div>
              </div>
              <span className="show-result">
                Showing <span>{clientData?.length}</span> Agent
                {clientData?.length > 1 ? "s" : ""}
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
          <Sidebar>
            <Exploration />
            <Featured />
            <RecentlyAdded />
          </Sidebar>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
