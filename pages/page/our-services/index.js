import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../../../layout/headers/Navbar";
import TestimonialSection from "../../../components/review/TestimonialReviews";
import Head from "next/head";
import { clientAgentData } from "../../../public/API-Data/clientAgent";
import FooterOne from "../../../layout/footers/FooterOne";
import Breadcrumb from "../../../components/pages/ourServices/ourServicesBreadcrumb";
import BodyContent from "../../../components/pages/ourServices/index";

export const getServerSideProps = async ({ locale }) => {
  const res = await fetch(
    `${process.env.API_URL + locale}/page/detail/our-services`
  );
  const remoteData = await res.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      remoteData,
    },
  };
};

const OurServices = (remoteData) => {
  const value = remoteData.remoteData.data;

  return (
    <>
      <Head>
        <title>{value?.entity_meta_title}</title>
        <meta name="description" content={value?.entity_short_desc} />
        <meta name="keywords" content={value?.entity_meta_keywords} />
      </Head>
      <Navbar lightBG={false} fixed={true} />
      <Breadcrumb
        title="UNO Services"
        desc="YOUR TRUSTED PARTNER IN DUBAI REAL ESTATE"
      />
      <BodyContent value={value} />
      <TestimonialSection value={clientAgentData.GoogleReviews} />
      <FooterOne />
    </>
  );
};

export default OurServices;
