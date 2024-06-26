import React from "react";
import { Container } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";

const AgentBox = ({ pageTitle, children }) => {
  return (
    <section className="breadcrumb-section p-0 agent-breadcrumb">
      <Img
        src="/assets/images/agent-bg.jpg"
        className="bg-img img-fluid"
        alt=""
      />
      <Container>
        <div className="breadcrumb-content">
          <div className="d-block w-100 text-center">
            <h1 className="text-white">{pageTitle}</h1>
          </div>
        </div>
      </Container>
      {children}
    </section>
  );
};

export default AgentBox;
