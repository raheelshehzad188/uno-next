/**
 * It fetches data from the API and then sorts the data by date and then maps over the data to display
 * the data in the UI
 * @returns An array of objects.
 */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import LinesEllipsis from "react-lines-ellipsis";
import { getData } from "../../utils/getData";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const FeaturedProjects = () => {
  const { t } = useTranslation("common");
  const { currency, currencyValue } = useSelector(
    (state) => state.currencyReducer
  );

  const router = useRouter();
  const activeLanguage = router.locale;

  const [value, setValue] = useState();
  useEffect(() => {
    getData(
      `${
        process.env.API_URL + activeLanguage
      }/home/get-project-search-result?project_is_featured=yes`
    )
      .then((res) => {
        setValue(res.data?.data.projects);
      })
      .catch((error) => console.log("Error", error));
  }, []);
  return (
    <div className="advance-card">
      <h6>{t("Our Featured Projects")}</h6>
      <div className="recent-property">
        <ul>
          {value?.map((data, i) => (
            <li key={i} className="mb-4">
              <div className="media sidebar-project">
                <Link locale={activeLanguage} href={"/" + data?.path}>
                  <img
                    src={data.project_category_image}
                    className="img-fluid"
                    alt=""
                  />
                </Link>
                <div className="media-body">
                  <Link locale={activeLanguage} href={"/" + data?.path}>
                    <h5>{data.project_title}</h5>
                  </Link>

                  <LinesEllipsis
                    className="font-roboto"
                    text={data.project_short_description}
                    maxLine="2"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                    component="p"
                  />

                  <span>
                    {data?.project_starting_price
                      ? new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: currency,
                          maximumFractionDigits: 0,
                        }).format(data?.project_starting_price * currencyValue)
                      : t("Coming Soon")}
                    <small> / {t("Start From")}</small>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedProjects;
