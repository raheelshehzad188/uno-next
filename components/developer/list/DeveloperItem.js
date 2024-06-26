import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Img from "../../../utils/BackgroundImageRatio";
import LinesEllipsis from "react-lines-ellipsis";
import { stripHtml } from "string-strip-html";
import { useTranslation } from "next-i18next";

const DeveloperItem = ({ data }) => {
  const router = useRouter();
  const activeLanguage = router.locale;
  const { t } = useTranslation("common");

  console.log("developer data", data);

  return (
    <div className="property-box">
      <div className="property-image">
        <Link href={data?.developer_slug} locale={activeLanguage}>
          <Img src={data?.developer_banner_thumb} className="bg-img" />
        </Link>
      </div>
      <div className="text-center">
        <span className="label label-dark label-lg">
          <Img src={data?.developer_logo} className="img-100" />
        </span>
      </div>
      <div className="property-details">
        <Link href={data?.developer_slug} locale={activeLanguage}>
          <h3>{data?.developer_title}</h3>
        </Link>

        <LinesEllipsis
          className="font-roboto"
          text={stripHtml(data?.developer_short_desc ?? "", "").result}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
          component="p"
        />

        <Link
          href={data?.developer_slug}
          locale={activeLanguage}
          className="mt-3"
        >
          {t("Check Projects of")} {data?.developer_title}
        </Link>
      </div>
    </div>
  );
};

export default DeveloperItem;
