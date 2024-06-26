/**
 * It takes a value prop and uses it to render a gallery of images.
 * @returns The image is being returned as a string.
 */
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";
import useStickyBar from "../../../utils/useStickyBar";

const ProjectBox = ({ galleryImages, mainImage, logo }) => {
  return (
    <section className={`p-0 ratio2_1`}>
      <Container fluid={true}>
        <div className="zoom-image-box zoom-gallery-multiple position-relative">
          <div className="project-logo">
            <Img src={logo} />
          </div>
          <Row>
            <Gallery>
              <Col md="5" xs="12" className="project-gallery-col">
                <Item original={mainImage} width="1000" height="600">
                  {({ ref, open }) => (
                    <a
                      ref={ref}
                      onClick={open}
                      className="header-gallery project-gallery-image"
                    >
                      <Img src={mainImage} className="bg-img" alt="" />
                    </a>
                  )}
                </Item>
              </Col>
              <Col md="7" xs="12" className="project-gallery-col">
                <Row>
                  {[1, 2].map((colIndex) => {
                    return (
                      <>
                        {galleryImages.slice(0, 5).map((galleryImage, i) => {
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
                                    ? colIndex === 1
                                      ? "6"
                                      : "4"
                                    : "12"
                                }
                                sm="6"
                                className="overlay p-0"
                              >
                                <Item
                                  original={galleryImage.project_gallery_image}
                                  width="1000"
                                  height="600"
                                  key={i}
                                >
                                  {({ ref, open }) => (
                                    <a
                                      ref={ref}
                                      onClick={open}
                                      className="header-gallery project-gallery-image"
                                    >
                                      <Img
                                        src={
                                          galleryImage.project_gallery_image_thumb
                                        }
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
              </Col>
            </Gallery>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ProjectBox;
