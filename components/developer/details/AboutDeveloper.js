import { Col, Container, Row } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";
import { Gallery, Item } from "react-photoswipe-gallery";
import parse from "html-react-parser";
import { useTranslation } from "next-i18next";

const AboutDeveloper = ({ developerTitle, desc, galleryImages }) => {
  const { t } = useTranslation("common");
  return (
    <section className="ratio3_2 small-section pb-0">
      <div className="title-1">
        <h2>
          {t("About")} {developerTitle}
        </h2>
        <hr />
      </div>
      <Container>
        <div className="card about-property">
          <div className="card-body">
            <Row>
              <Col md="6" className="pe-5">
                <p className="property-desc">{parse(desc || "")}</p>
              </Col>
              <Col md="6">
                <Gallery>
                  <Row>
                    {[1, 2].map((colIndex) => {
                      return (
                        <>
                          {galleryImages.map((galleryImage, i) => {
                            i++;
                            if (
                              (i <= 2 && colIndex === 1) ||
                              (i > 2 && colIndex === 2)
                            ) {
                              return (
                                <Col
                                  key={i}
                                  md={
                                    galleryImages.length > 1
                                      ? i === 1
                                        ? "12"
                                        : "3"
                                      : "12"
                                  }
                                  sm="6"
                                  className="overlay p-0"
                                >
                                  <Item
                                    original={galleryImage.gallery_image}
                                    width="1000"
                                    height="600"
                                    key={i}
                                  >
                                    {({ ref, open }) => (
                                      <a
                                        ref={ref}
                                        onClick={open}
                                        className="header-gallery"
                                      >
                                        <Img
                                          src={galleryImage.gallery_image}
                                          className="bg-img"
                                          alt=""
                                        />
                                      </a>
                                    )}
                                  </Item>
                                </Col>
                              );
                            }
                          })}
                        </>
                      );
                    })}
                  </Row>
                </Gallery>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutDeveloper;
