/**
 * It renders a skeleton loader for 3 seconds and then renders the actual content
 * @returns A React component.
 */
import Link from "next/link";
import React from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";
import Img from "../../../utils/BackgroundImageRatio";
import PropertyLabel from "../PropertyLabel";
import { useTranslation } from "next-i18next";

const PropertyBoxOne = ({ data }) => {
  const { t } = useTranslation("common");
  const { currency, currencyValue } = useSelector(
    (state) => state.currencyReducer
  );
  return (
    <>
      {/* {!load ? ( */}
      <div className="property-box">
        <div className="property-image">
          <a href={`/${data.community_slug}/${data.project_slug}`}>
            <Img
              src={data?.project_category_image}
              title={data?.project_category_image_title}
              alt={data?.project_category_image_alt}
              className="bg-img"
            />
            <div className="labels-left">
              <PropertyLabel labels={data?.property_types} />
            </div>
          </a>
          <div className="bottom-property">
            <div className="d-flex">
              <div>
                <h5>
                  <Link href={`/${data.community_slug}/${data.project_slug}`}>
                    {data?.project_category_image_title}
                  </Link>
                </h5>
                <h6>
                  {data?.project_starting_price
                    ? new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: currency,
                        maximumFractionDigits: 0,
                      }).format(data?.project_starting_price * currencyValue)
                    : t("Coming Soon")}
                  <small> / {t("Start From")} </small>
                </h6>
              </div>
              <Link href={`/${data.community_slug}/${data.project_slug}`}>
                <Button className="btn btn-sm btn-gradient mt-3">
                  {t("Details")}
                </Button>
              </Link>
            </div>
            <div className="overlay-option">
              <ul>
                <li>
                  <span>Payment Plan</span>
                  <h6>
                    {data?.project_payment_plan_plan_title ?? t("Coming Soon")}
                  </h6>
                </li>
                <li>
                  <span>Developer</span>
                  <h6>{data?.developer_title}</h6>
                </li>
                <li>
                  <span>Community</span>
                  <h6>{data?.community_title}</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ) : (
        <ContentLoader className="skeleton-svg">
          {setTimeout(() => {
            setLoad(false);
          }, 2000)}
          <rect className="skeleton-img" />
          <rect className="skeleton-c1" />
          <rect className="skeleton-c2" />
          <rect className="skeleton-c3" />
        </ContentLoader>
      )} */}
    </>
  );
};

export default PropertyBoxOne;
