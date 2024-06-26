/**
 * It returns a div with a class of property-box, which contains a div with a class of property-image,
 * which contains an ImageSlider component, which contains an array of images, which are passed in as a
 * prop
 * @returns A React component.
 */
import Link from "next/link";
import React from "react";
import { Camera } from "react-feather";
import { useSelector } from "react-redux";
import ImageSlider from "../ImageSlider";
import PropertyLabel from "../PropertyLabel";
import { FaBuilding } from "react-icons/fa";
import LinesEllipsis from "react-lines-ellipsis";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { useTranslation } from "next-i18next";

const PropertyBox = ({ data }) => {
  const { t } = useTranslation("common");

  const { currency, currencyValue } = useSelector(
    (state) => state.currencyReducer
  );

  const projectImages = [
    data.project_category_image_thumb,
    ...Object.values(data.gallery ?? []).map(
      (projectGallery) => projectGallery.project_gallery_image_thumb
    ),
  ];

  return (
    <>
      {/* {!load ? ( */}
      <div className="property-box">
        <div className="property-image">
          <ImageSlider images={projectImages} />

          <div className="labels-left">
            <PropertyLabel labels={data.property_types} />
          </div>
          {projectImages.length > 1 && (
            <>
              <div className="seen-data">
                <Camera />
                <span>{projectImages.length}</span>
              </div>
              <div className="overlay-property-box"></div>
            </>
          )}
        </div>

        <div className="property-details">
          <span className="font-roboto">{data.community_title} </span>
          <Link href={data.path}>
            <h3>{data.project_title}</h3>
          </Link>

          <LinesEllipsis
            className="font-roboto"
            text={data.project_short_description ?? ""}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
            component="p"
          />

          <div className="icon-block">
            <span className="developer">
              <FaBuilding className="me-1 mb-1" />
              {data.developer_title}
            </span>
            <span className="font-roboto">
              <FaFileInvoiceDollar className="me-1 mb-1" />
              {data.project_payment_plan_plan_title
                ? data.project_payment_plan_plan_title + " " + t("Payment Plan")
                : t("Coming Soon")}
            </span>
          </div>

          <hr />
          <div className="property-btn d-flex">
            <h6>
              {data?.project_starting_price
                ? new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: currency,
                    maximumFractionDigits: 0,
                  }).format(data?.project_starting_price * currencyValue)
                : t("Coming Soon")}
              <small>{t("Start From")}</small>
            </h6>

            <Link href={data.path}>
              <button type="button" className="btn btn-gradient btn-pill mt-1">
                {t("Show")}
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* ) : (
        <>
          <ContentLoader className="skeleton-svg">
            {setTimeout(() => {
              setLoad(false);
            }, 1000)}
            <rect className="skeleton-img" />
            <rect className="skeleton-c1" />
            <rect className="skeleton-c2" />
            <rect className="skeleton-c3" />
          </ContentLoader>
        </>
      )} */}
    </>
  );
};

export default PropertyBox;
