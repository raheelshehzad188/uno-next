import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BodyContent from "../../../components/blog/list/TagBlogList";
import { useRouter } from "next/router";
import FooterOne from "../../../layout/footers/FooterOne";
import Navbar from "../../../layout/headers/Navbar";

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ["common"])) },
});

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

const TagKeyword = () => {
  const router = useRouter();
  const tagKeyword = router.query.tag_keyword;

  return (
    <>
      <Navbar lightBG={false} fixed={true} specialHeaderClx="header-2" />
      <BodyContent side={"left"} tagKeyword={tagKeyword} />
      <FooterOne />
    </>
  );
};

export default TagKeyword;
