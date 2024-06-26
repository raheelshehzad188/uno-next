/**
 * It takes a number of items per page and a list of items, and returns a list of pages, each
 * containing a list of items
 * @returns The return value of the function is the value of the last expression executed in the
 * function body.
 */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Col, Container, Row } from "reactstrap";
import Category from "../../../layout/sidebarLayout/Category";
import BlogTags from "../../../layout/sidebarLayout/BlogTags";
import PopularTags from "../../../layout/sidebarLayout/PopularTags";
import Sidebar from "../../../layout/sidebarLayout/Sidebar";
import { getData } from "../../../utils/getData";
import parser from "html-react-parser";
import FeaturedProjects from "../../../layout/sidebarLayout/FeaturedProjects";
import Img from "../../../utils/BackgroundImageRatio";
import Breadcrumb from "./BlogBreadcrumb";
import { useTranslation } from "next-i18next";
import Head from "next/head";

const BodyContent = ({ side, blogSlug }) => {
  const { t } = useTranslation("common");
  const [value, setValue] = useState();
  const [categories, setCategories] = useState();
  const router = useRouter();
  const activeLanguage = router.locale;

  useEffect(() => {
    getData(`${process.env.API_URL + activeLanguage}/blog/child/${blogSlug}`)
      .then((res) => {
        setValue(res.data.data.blog);
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
  }, [blogSlug]);

  return (
    <>
      <Head>
        <title>{value?.blog_meta_title}</title>
        <meta name="description" content={value?.blog_meta_description} />
      </Head>
      <Breadcrumb
        title={value?.blog_title || "UNO Blog"}
        desc={
          value?.blog_meta_description || "Latest real estate news in Dubai"
        }
      />
      <section className="ratio_40">
        <Container>
          <Row>
            <Col md="4">
              {side && (
                <Sidebar side={side}>
                  <Category
                    value={categories}
                    activeLanguage={activeLanguage}
                  />
                  <PopularTags
                    title="Popular Tags"
                    activeLanguage={activeLanguage}
                  />
                  <FeaturedProjects />
                </Sidebar>
              )}
            </Col>
            <Col
              xl={side ? "8" : "12"}
              lg={side ? "8" : "12"}
              className="order-lg-1"
            >
              <div className="blog-single-detail theme-card">
                <div className="blog-detail-image">
                  <Img
                    src={value?.blog_image}
                    title={value?.blog_image_title}
                    className="bg-img img-fluid"
                    alt={value?.blog_image_alt}
                  />
                </div>
                <div className="blog-title">
                  <ul className="post-detail">
                    <li>
                      {t("Published in")} : {value?.blog_date}
                    </li>

                    <li>
                      {t("Published by")} : {value?.blog_publisher}
                    </li>
                  </ul>
                  <h3>{value?.blog_title}</h3>
                </div>

                <div className="details-property">
                  <Row>
                    <p>{parser(value?.blog_body ?? "")}</p>
                  </Row>
                  <div className="filter-cards">
                    <BlogTags
                      title="Tags"
                      tags={value?.blog_meta_keywords?.split(",")}
                      activeLanguage={activeLanguage}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BodyContent;
