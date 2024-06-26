import React, { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";
import FilterPanel from "./FilterPanel";
import { FaDownload } from "react-icons/fa6";
import { useTranslation } from "next-i18next";

const PropertyFloorPlan = ({ projectTitle, propertyFloorPlans, size }) => {
  const { t } = useTranslation("common");
  const [filterData, setFilterData] = useState(
    propertyFloorPlans?.filter(
      (data) =>
        data.project_property_title ===
        propertyFloorPlans[0].project_property_title
    )
  );
  const [isActive, setIsActive] = useState(
    propertyFloorPlans[0].project_property_title
  );

  return (
    <section className="portfolio-section portfolio-grid">
      <Container>
        <h4 className="content-title mb-5">
          {t("Floor Plans of")} {projectTitle}{" "}
          <button class="btn btn-sm btn-dashed btn-pill">
            <FaDownload className="me-2 align-text-top" />
            {t("Get All Floor Plans")}
          </button>
        </h4>
        <Row>
          <Col sm="3">
            <FilterPanel
              filterData={filterData}
              setFilterData={setFilterData}
              isActive={isActive}
              setIsActive={setIsActive}
              gridData={propertyFloorPlans}
              size={size}
            />
          </Col>
          <Col sm="9">
            <Row className="column-sm grid ratio2_3 zoom-gallery-multiple">
              <Gallery withDownloadButton>
                {filterData?.map((data, i) => (
                  <Col sm="12" className="grid-item" key={i}>
                    <div className="grid-box">
                      <div className="overlay">
                        <div className="portfolio-image">
                          <Item
                            original={data.project_property_image}
                            width="800"
                            height="600"
                          >
                            {({ ref, open }) => (
                              <a ref={ref} onClick={open}>
                                <Img
                                  src={data.project_property_image}
                                  className="bg-img bg-size background-style"
                                />
                              </a>
                            )}
                          </Item>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Gallery>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PropertyFloorPlan;
