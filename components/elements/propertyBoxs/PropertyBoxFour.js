/**
 * It's a function that returns a div with a bunch of other divs and spans inside it
 * @returns A React component
 */
import Link from "next/link";
import React from "react";
import Img from "../../../utils/BackgroundImageRatio";
import { usePathname } from "next/navigation";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import ReviewStar from "../ReviewStar";
import { useTranslation } from "next-i18next";

const PropertyBoxFour = ({ data }) => {
  const { t } = useTranslation("common");
  const currentPathName = usePathname();
  return (
    <>
      {/* {!load ? ( */}
      <div className="property-box">
        <div className="agent-image">
          <div>
            <Img src={data?.agent_image} className="bg-img" alt="" />
            <div className="agent-overlay"></div>
            <div className="overlay-content">
              <ul>
                <li>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${data?.agent_whatsapp_number}`}
                  >
                    <FaWhatsappSquare />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={data?.agent_linkedin_url}
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href={data?.agent_instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagramSquare />
                  </a>
                </li>
              </ul>
              <span>{t("Connect")}</span>
            </div>
          </div>
        </div>
        <div className="agent-content">
          <h3 className="w-100 d-inline-flex">
            <Link href={currentPathName + "/" + data?.agent_slug}>
              {data?.agent_name}
            </Link>
            <div className="ms-auto">
              <ReviewStar rating={data?.count_stars} />
            </div>
          </h3>

          <h6 className="font-roboto">{data?.agent_job}</h6>

          <p className="mt-3">
            {t("Specialist in")} {data?.agent_specialties}
          </p>
          <p>
            {data?.agent_language.split(",").map((language, i) => (
              <span className="label label-light label-rounded me-2" key={i}>
                {t(language.trim())}
              </span>
            ))}
          </p>
          <Link href={currentPathName + "/" + data?.agent_slug}>
            {t("View Profile")} <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      {/* ) : (
        <ContentLoader speed={2} width={900} height={252} viewBox="0 0 900 252">
          {setTimeout(() => {
            setLoad(false);
          }, 1000)}
          <rect x="0" y="0" rx="6" ry="6" width="222" height="252" />
          <rect x="250" y="30" rx="1" ry="1" width="160" height="28" />
          <rect x="250" y="70" rx="1" ry="1" width="80" height="16" />
          <rect x="250" y="110" rx="1" ry="1" width="500" height="16" />
          <rect x="250" y="140" rx="1" ry="1" width="300" height="16" />
          <rect x="770" y="170" rx="1" ry="1" width="100" height="20" />
        </ContentLoader>
      )} */}
    </>
  );
};

export default PropertyBoxFour;
