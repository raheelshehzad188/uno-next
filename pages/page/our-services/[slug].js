import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TestimonialSection from "../../../components/review/TestimonialReviews";
import Navbar from "../../../layout/headers/Navbar";
import Head from "next/head";
import { clientAgentData } from "../../../public/API-Data/clientAgent";
import FooterOne from "../../../layout/footers/FooterOne";
import Breadcrumb from "../../../components/pages/ourServices/ourServicesBreadcrumb";
import BodyContent from "../../../components/pages/ourServices/oneService/index";

export const getServerSideProps = async ({ locale, query }) => {
  const slug = query.slug;
  const res = await fetch(`${process.env.API_URL + locale}/page/child/${slug}`);
  const remoteData = await res.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      remoteData,
    },
  };
};

const OneService = (remoteData) => {
  const value = remoteData.remoteData.data.entity;

  return (
    <>
      <Head>
        <title>{value?.service_meta_title}</title>
        <meta name="description" content={value?.entity_short_desc} />
      </Head>
      <Navbar lightBG={false} fixed={true} />
      <Breadcrumb
        title={value?.service_title}
        desc={value?.service_short_description}
      />
      <BodyContent value={value} />
      <TestimonialSection value={clientAgentData.GoogleReviews} />
      <FooterOne />
    </>
  );
};

export default OneService;
