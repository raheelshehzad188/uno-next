/**
 * It takes a number of items per page and a list of items, and returns a list of pages, each
 * containing a list of items
 * @returns The return value of the function is the value of the last expression executed in the
 * function body.
 */
import React, { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";
import { Col, Container, Row } from "reactstrap";
import Pagination from "../../../layout/Pagination";
import Category from "../../../layout/sidebarLayout/Category";
import PopularTags from "../../../layout/sidebarLayout/PopularTags";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import { getData } from "../../../utils/getData";
import BlogWrapBox from "./BlogWrapBox";
import Breadcrumb from "../details/BlogBreadcrumb";
import { useTranslation } from "next-i18next";
import Head from "next/head";

import {
  gridReducer,
  initialGrid,
} from "../../listing/gridView/grid/gridReducer";
import FeaturedProjects from "../../../layout/sidebarLayout/FeaturedProjects";

const BodyContent = ({ side, tagKeyword }) => {
  const { t } = useTranslation("common");
  const [value, setValue] = useState();
  const [categories, setCategories] = useState();
  const [grid, gridDispatch] = useReducer(gridReducer, initialGrid);
  const router = useRouter();
  const activeLanguage = router.locale;

  useEffect(() => {
    getData(
      `${process.env.API_URL + activeLanguage}/blog/list/tag/${tagKeyword}`
    )
      .then((res) => {
        setValue(res.data.data.blogs);
        gridDispatch({
          type: "totalPages",
          payload: Math.ceil(res.data.data.blogs.length / 4),
        });
      })
      .catch((error) => console.log("Error", error));

    getData(`${process.env.API_URL + activeLanguage}/blog/category/list`)
      .then((res) => {
        setCategories(res.data.data.categories);
      })
      .catch((error) => console.log("Error", error));
  }, [tagKeyword]);

  return (
    <>
      <Head>
        <title>
          {t("Results of") +
            " " +
            `"${tagKeyword}"` +
            " | UNO " +
            t("Real Estate")}
        </title>
        <meta
          name="description"
          content={t("Latest real estate news in Dubai")}
        />
      </Head>
      <Breadcrumb
        title={t("Results of") + " " + `"${tagKeyword}"`}
        desc={t("Latest real estate news in Dubai")}
      />
      <section className="ratio_landscape blog-list-section">
        <Container>
          <Row>
            <Col md="4">
              {side && (
                <Sidebar side={side}>
                  <Category
                    value={categories}
                    activeCategory={[]}
                    activeLanguage={activeLanguage}
                  />
                  <PopularTags
                    title={t("Popular Tags")}
                    activeLanguage={activeLanguage}
                  />
                  <FeaturedProjects />
                </Sidebar>
              )}
            </Col>
            <Col xl={side ? "8" : "12"} lg={side ? "8" : "12"}>
              <Row className="blog-grid">
                {value &&
                  value
                    .slice(grid.toPage * 6 - 6, grid.toPage * 6)
                    .map((data, i) => (
                      <Col
                        md="6"
                        lg={side === "right" || side === "left" ? "6" : "4"}
                        key={i}
                      >
                        <BlogWrapBox data={data} />
                      </Col>
                    ))}
              </Row>
              <Pagination
                toPage={grid.toPage}
                gridDispatch={gridDispatch}
                totalPages={grid.totalPages}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BodyContent;
