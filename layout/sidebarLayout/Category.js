import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const Category = ({ value, activeCategory, activeLanguage }) => {
  const { t } = useTranslation("common");
  return (
    <div className="advance-card">
      <h6>{t("Category")}</h6>
      <div className="category-property">
        <ul>
          {value &&
            value.map((data, i) => (
              <li key={i}>
                <Link
                  locale={activeLanguage}
                  href={`/blog/${data.blog_category_path}`}
                  className={
                    activeCategory?.blog_category_title ===
                    data?.blog_category_title
                      ? "text-primary fw-bold"
                      : ""
                  }
                >
                  <i className="fas fa-arrow-right me-2"></i>
                  {data.blog_category_title}
                  <span className="float-end">({data.count_blogs})</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
