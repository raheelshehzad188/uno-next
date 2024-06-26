import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../components/blog/list/BlogList";
import FooterOne from "../../layout/footers/FooterOne";
import Navbar from "../../layout/headers/Navbar";

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ["common"])) },
});

const Index = () => {
  return (
    <>
      <Navbar lightBG={false} fixed={true} specialHeaderClx="header-2" />
      <BodyContent side={"left"} categorySlug="list" />
      <FooterOne />
    </>
  );
};

export default Index;
