import React from "react";
import { Container } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";

const AboutUsBreadcrumb = ({ right }) => {
  return (
    <section className="breadcrumb-section p-0">
      <Img
        src="/assets/images/about/aboutus.jpg"
        className="bg-img img-fluid"
        alt=""
      />
      <Container>
        <div
          className={`breadcrumb-content ${right ? "breadcrumb-right" : ""}`}
        >
          <div className="glassy p-5">
            <h2 className="text-dark">UNO Real Estate</h2>
            <p>YOUR TRUSTED PARTNER IN DUBAI REAL ESTATE</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsBreadcrumb;
