import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TestimonialSection from "../../components/review/TestimonialReviews";
import Navbar from "../../layout/headers/Navbar";

import Head from "next/head";
import { clientAgentData } from "../../public/API-Data/clientAgent";
import FooterOne from "../../layout/footers/FooterOne";
import Breadcrumb from "../../components/pages/aboutUs/AboutUsBreadcrumb";
import BodyContent from "../../components/pages/aboutUs";

export const getServerSideProps = async ({ locale }) => {
  const res = await fetch(
    `${process.env.API_URL + locale}/page/detail/about-us`
  );
  const pageSEO = await res.json();

  return {
    props: { ...(await serverSideTranslations(locale, ["common"])), pageSEO },
  };
};

const AboutUs = (pageSEO) => {
  const value = pageSEO.pageSEO.data;

  return (
    <>
      <Head>
        <title>{value?.entity_meta_title}</title>
        <meta name="description" content={value?.entity_short_desc} />
      </Head>
      <Navbar lightBG={false} fixed={true} />
      <Breadcrumb />
      <BodyContent value={value} />
      <TestimonialSection value={clientAgentData.GoogleReviews} />
      <FooterOne />
    </>
  );
};

export default AboutUs;
