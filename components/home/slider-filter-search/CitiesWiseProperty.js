/**
 * It takes an array of objects and returns a new array of objects with the same keys but with the
 * values multiplied by 2
 * @returns A React component.
 */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Link from "next/link";
import {
  City,
  FindPropertiesInTheseCities,
} from "../../../constValues/constValues";
import Img from "../../../utils/BackgroundImageRatio";
import NoSsr from "../../../utils/NoSsr";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const CitiesWisePropertySection = ({ value, pages }) => {
  value.sort((a, b) => b.number_of_projects - a.number_of_projects);
  const allCommunityPage = pages?.find(
    (page) => page.page_code === "community"
  );

  const router = useRouter();
  const activeLanguage = router.locale;
  const { t } = useTranslation("common");

  return (
    <section className="my-gallery gallery-6 pb-0">
      <Container>
        <Row>
          <Col>
            <div className="title-1">
              <span className="label label-gradient">{t("Explore Dubai")}</span>
              <h2>{t("Find properties in these communities")}</h2>
              <hr />
            </div>
            <Row>
              {value &&
                value.slice(0, 9).map((data, i) => (
                  <Col
                    xl={i === 2 || i === 3 ? "6" : "3"}
                    lg={i === 2 || i === 3 ? "8" : "4"}
                    md={i === 2 || i === 3 ? "7" : "5"}
                    sm={i === 2 || i === 3 ? "" : "6"}
                    className="wow fadeInUp"
                    key={i}
                  >
                    <div className="find-cities">
                      <Img src={data?.community_image} className="bg-img" />
                      <div className="citi-overlay">
                        <div>
                          <Link href={data?.community_slug}>
                            <NoSsr>
                              <h4>
                                {data?.number_of_projects > 0
                                  ? data?.number_of_projects === 1
                                    ? 1 + " " + t("Project")
                                    : data?.number_of_projects +
                                      " " +
                                      t("Projects")
                                  : t("No Projects Yet")}{" "}
                              </h4>
                            </NoSsr>
                            <h2>{data?.community_title}</h2>
                            {data?.number_of_projects > 0 && (
                              <h6 className="font-roboto">
                                {t("Check Projects")}
                              </h6>
                            )}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}

              <Col md="3">
                <div className="explore-all">
                  <Link locale={activeLanguage} href={allCommunityPage?.path}>
                    <h2>Explore All</h2>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CitiesWisePropertySection;
