import React from "react";
import { Container, Row } from "reactstrap";
import useStickyBar from "../../../utils/useStickyBar";

const GenericEntityBox = ({ entityTitle, entityDescription }) => {
  const fix = useStickyBar();
  return (
    <>
      <section
        className={`home-section layout-5 generic-entity-bg ${
          fix ? "fix-header-margin" : ""
        }`}
      >
        <Container>
          <Row>
            <div className="col-md-10 col-xl-7">
              <div className="home-main px-3">
                <div className="home-content">
                  <h1 className="text-dark">{entityTitle}</h1>
                  <p className="text-dark">{entityDescription}</p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GenericEntityBox;
