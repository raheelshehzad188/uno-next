/**
 * It takes a value prop and uses it to render a gallery of images.
 * @returns The image is being returned as a string.
 */
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";
import useStickyBar from "../../../utils/useStickyBar";

const CommunityBox = ({ isHeader, galleryImages, children }) => {
  const fix = useStickyBar();

  return (
    <section
      className={`p-0 ratio3_2 ${fix && isHeader ? "fix-header-margin" : ""}`}
    >
      <Container fluid={true}>
        <div className="zoom-image-box zoom-gallery-multiple position-relative">
          <Row>
            <Col md="4" className="content-part">
              {children}
            </Col>
            <Gallery>
              <Col
                md={isHeader ? "8" : "12"}
                className={isHeader ? "gallery-part" : ""}
              >
                <Row>
                  {!isHeader && (
                    <h6 className="my-3 fw-medium">Community Gallery</h6>
                  )}
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
                                    ? isHeader
                                      ? colIndex === 1
                                        ? "6"
                                        : "4"
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
                                        src={galleryImage.gallery_image_thumb}
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

export default CommunityBox;
