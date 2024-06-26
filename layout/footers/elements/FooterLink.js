import Link from "next/link";
import React, { Fragment } from "react";
import { ChevronRight } from "react-feather";
import { Col } from "reactstrap";
import { useTranslation } from "next-i18next";

const FooterLink = ({
  value,
  isActive,
  setIsActive,
  liteFooter,
  activeLanguage,
}) => {
  const { t } = useTranslation("common");
  return (
    <Col
      xl={value.title === "Useful Links" ? "3" : "2"}
      md="2"
      className={value.title === "Tag" ? "order-lg" : ""}
    >
      <div className="footer-links footer-left-space">
        <h5
          className="footer-title"
          onClick={(e) => {
            e.preventDefault();
            setIsActive(value.title);
            isActive === value.title && setIsActive();
          }}
        >
          {t(value.title)}
          <span className="according-menu">
            <i className="fas fa-chevron-down"></i>
          </span>
        </h5>
        <ul
          className={`footer-content ${
            isActive === value.title ? "d-block" : "d-none d-md-block"
          }`}
        >
          {value.children.slice(0, 5).map((value, i) => (
            <Fragment key={i}>
              {liteFooter === i ? (
                ""
              ) : (
                <li>
                  <Link href={value.path} locale={activeLanguage}>
                    {liteFooter && <ChevronRight />}
                    {value.title}
                  </Link>
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
    </Col>
  );
};

export default FooterLink;
