import { React, useRef, useEffect } from "react";
import useStickyBar from "../../../utils/useStickyBar";
// import Typed from "typed.js";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "next-i18next";

const PropertyTypeBox = ({ value }) => {
  const { t } = useTranslation("common");
  const fix = useStickyBar();
  // const el = useRef(null);
  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["Live", "Work", "Invest"],
  //     stringsElement: null,
  //     typeSpeed: 120,
  //     backSpeed: 30,
  //     showCursor: false,
  //     loop: true,
  //     cursorChar: "|",
  //     attr: null,
  //     contentType: "html",
  //     callback: function () {},
  //     preStringTyped: function () {},
  //     onStringTyped: function () {},
  //     resetCallback: function () {},
  //   });
  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <section
      className={`home-section layout-1 layout-9 img-fluid bg-size bg-img background-style ${
        fix ? "fix-header-margin" : ""
      }`}
    >
      <Container>
        <Row>
          <Col xxl="6" xl="6" lg="6">
            <div className="home-main arrow-light">
              <div className="home-content">
                <h1>
                  {value?.property_meta_title}
                  {/* Find New Off-Plan {value?.property_type_title} To{" "}
                    <span className="live-text" ref={el}>
                      Live
                    </span> */}
                </h1>
                <p>{value?.property_type_short_description}</p>

                {/* <div className="share-buttons mt-5">
                    <button className="btn btn-gradient btn-pill mb-0 me-2">
                      <i className="fas fa-solid fa-headset me-1"></i>
                      Get More Info
                    </button>
                    <div className="d-inline-block">
                      <a className="btn btn-dashed ms-md-2 ms-1 btn-pill">
                        <i className="fas fa-share-square"></i>
                        Share
                      </a>
                      <div className="share-hover">
                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/"
                              className="icon-facebook"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Facebook></Facebook>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/"
                              className="icon-twitter"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Twitter></Twitter>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                              className="icon-instagram"
                              rel="noreferrer"
                            >
                              <Instagram></Instagram>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="layout-right-img ">
              <img
                src={value?.property_type_banner}
                alt=""
                className="img-fluid bg-size bg-img background-style"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PropertyTypeBox;
