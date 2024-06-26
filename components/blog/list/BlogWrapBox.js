/**
 * It's a function that takes in two props, data and masonry, and returns a div with a class of
 * blog-wrap.
 * @returns A React component.
 */
import Link from "next/link";
import React from "react";
import Img from "../../../utils/BackgroundImageRatio";
import LinesEllipsis from "react-lines-ellipsis";
import { useRouter } from "next/router";
import { stripHtml } from "string-strip-html";
import { useTranslation } from "next-i18next";

const BlogWrapBox = ({ data, masonry }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const activeLanguage = router.locale;
  return (
    <div className="blog-wrap wow fadeInUp">
      <div className="blog-image">
        <div>
          {masonry ? (
            <img src={data?.blog_image} className="bg-img img-fluid" alt="" />
          ) : (
            <Img src={data?.blog_image} className="bg-img img-fluid" alt="" />
          )}
        </div>
        <div className="blog-label">
          <div>
            <h3>{data?.day}</h3>
            <span>{data?.month}</span>
          </div>
        </div>
      </div>
      <div className="blog-details">
        <h3>
          <Link locale={activeLanguage} href={"/blog/" + data?.blog_path}>
            {data?.blog_title}
          </Link>
        </h3>

        <LinesEllipsis
          className="font-roboto"
          text={stripHtml(data?.blog_body, "").result}
          maxLine="4"
          ellipsis="..."
          trimRight
          basedOn="letters"
          component="p"
        />

        <Link locale={activeLanguage} href={"/blog/" + data?.blog_path}>
          {t("Read More")}
        </Link>
      </div>
    </div>
  );
};

export default BlogWrapBox;
