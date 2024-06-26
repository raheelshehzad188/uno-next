import React from "react";
import { Container } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";

const Breadcrumb = ({ right, title, desc }) => {
  return (
    <section className="breadcrumb-section p-0">
      <Img
        src="/assets/images/blog/blog-bg.jpg"
        className="bg-img img-fluid"
        alt=""
      />
      <Container>
        <div
          className={`breadcrumb-content ${right ? "breadcrumb-right" : ""}`}
        >
          <div className="glassy px-5 py-4">
            <h2 className="text-dark">{title}</h2>
            <p className="text-dark">{desc}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Breadcrumb;
