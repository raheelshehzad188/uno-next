/**
 * It takes a value prop and uses it to render a gallery of images.
 * @returns The image is being returned as a string.
 */
import React from "react";
import { Container, Row } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";
import useStickyBar from "../../../utils/useStickyBar";
import { useTranslation } from "next-i18next";

const DeveloperBox = ({ value, refProp }) => {
  const { t } = useTranslation("common");
  const fix = useStickyBar();

  const scrollToProjects = () => refProp.current.scrollIntoView();

  return (
    <section
      className={`home-section layout-5 overlay-header ${
        fix ? "fix-header-margin" : ""
      }`}
      style={{
        backgroundImage: `url(${value?.developer_banner})`,
      }}
    >
      <Container>
        <Row>
          <div className="col-md-10 col-xl-7">
            <div className="home-main glassy-dark developer-banner-content">
              <div className="home-content">
                <Img
                  src={value?.developer_logo}
                  className="img-fluid mb-5 developer-banner-img fade-in-image"
                />
                <p>{value?.developer_short_desc}</p>

                <button
                  className="btn btn-dashed text-white mt-5"
                  onClick={scrollToProjects}
                >
                  {t("Show Projects")}
                </button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default DeveloperBox;
