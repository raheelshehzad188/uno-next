import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../components/home/slider-filter-search";
import FooterOne from "../layout/footers/FooterOne";
import Navbar from "../layout/headers/Navbar";
import Head from "next/head";

export const getServerSideProps = async ({ locale }) => {
  const res = await fetch(`${process.env.API_URL + locale}/home/get-details`);
  const remoteData = await res.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      remoteData,
    },
  };
};

const Index = (remoteData) => {
  const value = remoteData.remoteData.data;

  return (
    <>
      <Head>
        <title>{value?.pageBody.page_meta_title}</title>
        <meta
          name="description"
          content={value?.pageBody.page_meta_description}
        />
        <meta name="keywords" content={value?.pageBody.page_meta_keywords} />
      </Head>
      <Navbar lightBG={false} fixed={true} />
      <BodyContent
        whatYouLookFor={value?.whatYouLookFor}
        projects={value?.projects}
        pages={value?.pages}
        services={value?.services}
        cities={value?.cities}
        howToBuySteps={value?.howToBuySteps}
        agents={value?.agents}
        blogs={value?.blogs}
        developersLogo={value?.developersLogo}
        communities={value?.communities}
      />
      <FooterOne />
    </>
  );
};

export default Index;
