/**
 * It returns a div with a class of property-box, which contains a div with a class of property-image,
 * which contains an ImageSlider component, which contains an array of images, which are passed in as a
 * prop
 * @returns A React component.
 */
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import LinesEllipsis from "react-lines-ellipsis";
import Img from "../../../utils/BackgroundImageRatio";
import { useTranslation } from "next-i18next";

const CommunityItem = ({ data }) => {
  const { t } = useTranslation("common");

  const { currency, currencyValue } = useSelector(
    (state) => state.currencyReducer
  );

  const router = useRouter();
  const activeLanguage = router.locale;

  return (
    <>
      {/* {!load ? ( */}
      <div className="property-box">
        <div className="property-image">
          <Img
            src={data?.community_image_thumb}
            className="bg-img"
            title={data?.community_image_title}
            alt={data?.community_image_alt}
          />
        </div>

        <div className="property-details">
          <span className="font-roboto">{data.city_name} </span>
          <Link locale={activeLanguage} href={data.path}>
            <h3>{data?.community_title}</h3>
          </Link>

          <LinesEllipsis
            className="font-roboto"
            text={data?.community_description}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
            component="p"
          />

          <hr />
          <div className="property-btn d-flex">
            <h6>
              {data?.community_starting_price
                ? new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: currency,
                    maximumFractionDigits: 0,
                  }).format(data?.community_starting_price * currencyValue)
                : t("Coming Soon")}
              <small>{t("Start From")}</small>
            </h6>

            <Link locale={activeLanguage} href={data.path}>
              <button type="button" className="btn btn-light-bg btn-pill mt-1">
                {t("Show Projects")}
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

export default CommunityItem;
