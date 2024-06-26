import React from "react";
import { Col } from "reactstrap";
import { FooterData } from "../../../data/footerData";
import { useTranslation } from "next-i18next";

const FooterContactUsDetails = ({ isActive, setIsActive, logo }) => {
  const { t } = useTranslation("common");
  return (
    <Col xl="3" md="3" className="order-xl">
      <div className="footer-links footer-details glassy-dark">
        <h5
          className="footer-title d-md-none"
          onClick={(e) => {
            e.preventDefault();
            setIsActive("ContactUs");
            isActive === "ContactUs" && setIsActive();
          }}
        >
          {t("Contact Us")}
          <span className="according-menu">
            <i className="fas fa-chevron-down"></i>
          </span>
        </h5>
        <div
          className={`footer-content ${
            isActive === "ContactUs" ? "d-block" : "d-none d-md-block"
          }`}
        >
          {logo}
          <p>{t("Your Source for investment and living insights")}</p>
          <div className="footer-contact">
            <ul>
              {FooterData.contactDetails.map((value, i) => (
                <li key={i}>
                  <i className={value.iconsClass}></i>
                  {value.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default FooterContactUsDetails;
