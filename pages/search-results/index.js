import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getData } from "../../utils/getData";
import Navbar from "../../layout/headers/Navbar";
import GenericEntityBox from "../../components/entity/details/GenericEntityBox";
import CommunityProjects from "../../components/community/list/CommunityProjects";
import FooterOne from "../../layout/footers/FooterOne";
import { useSearchParams } from "next/navigation";
import Head from "next/head";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ["common"])) },
});

const Index = () => {
  const { t } = useTranslation("common");

  const router = useRouter();
  const activeLanguage = router.locale;
  const searchParams = useSearchParams();
  const queryParams = {};

  if (searchParams.get("property_status")) {
    queryParams.property_status = searchParams.get("property_status");
  }

  if (searchParams.get("property_type")) {
    queryParams.property_type_id = searchParams.get("property_type");
  }

  if (searchParams.get("property_room")) {
    queryParams.number_of_rooms = searchParams.get("property_room");
  }

  if (searchParams.get("property_bath")) {
    queryParams.number_of_bath = searchParams.get("property_bath");
  }

  if (searchParams.get("property_city")) {
    queryParams.city_id = searchParams.get("property_city");
  }

  if (searchParams.get("property_developer")) {
    queryParams.developer_id = searchParams.get("property_developer");
  }

  if (searchParams.get("price")) {
    const prices = searchParams.get("price").split("-");
    queryParams.start_price = prices[0];
    queryParams.end_price = prices[1];
  }

  if (searchParams.get("area")) {
    const areas = searchParams.get("area").split("-");
    queryParams.start_area = areas[0];
    queryParams.end_area = areas[1];
  }

  const [value, setValue] = useState();

  useEffect(() => {
    getData(
      `${
        process.env.API_URL + activeLanguage
      }/home/get-project-search-result?${serialize(queryParams)}`
    )
      .then((res) => {
        setValue(res.data.data);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  const serialize = (obj) => {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(
          encodeURIComponent(p) +
            "=" +
            encodeURIComponent(
              obj[p] instanceof Array ? obj[p].join("-") : obj[p]
            )
        );
      }
    return str.join("&");
  };

  return (
    <>
      <Navbar lightBG={true} fixed={true} />
      <GenericEntityBox
        entityTitle={t("Search Results")}
        entityDescription={t("Search Results SubText")}
      />
      <CommunityProjects
        metaTitle={t("Showing Search Results")}
        entities={value?.projects}
      />
      <FooterOne />
    </>
  );
};

export default Index;
