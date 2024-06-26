import EntityBySlug from "../../components/entity/index";
import ChildEntityBySlug from "../../components/entityChild";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// export const getStaticPaths = async () => {
//   return {
//     paths: [], //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   };
// };

export const getServerSideProps = async ({ locale, query }) => {
  const [entitySlug, childSlug] = query.slug;

  let endpointUrl = `${process.env.API_URL + locale}/entity/${entitySlug}`;
  if (childSlug) {
    endpointUrl = `${process.env.API_URL + locale}/entity-child/${childSlug}`;
  }

  const res = await fetch(endpointUrl);
  const remoteData = await res.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      remoteData,
    },
  };
};

export default function Index(remoteData) {
  const value = remoteData.remoteData.data;

  return (
    <>
      {!value?.entities && ["project", "agent"].includes(value?.entity_type) ? (
        <Head>
          <title>
            {value?.entity_type === "project"
              ? value?.entity_data.project_seo.project_seo_meta_title
              : value?.entity_data.entity?.agent_name}
          </title>
          <meta
            name="description"
            content={
              value?.entity_type === "project"
                ? value?.entity_data.project_seo.project_seo_meta_description
                : value?.entity_data.entity?.agent_meta_description
            }
          />
          <meta
            name="keywords"
            content={
              value?.entity_type === "project"
                ? value?.entity_data.project_seo.project_seo_meta_keywords
                : value?.entity_data.entity?.agent_meta_keywords
            }
          />
        </Head>
      ) : (
        <Head>
          <title>{value?.entity_meta_title}</title>
          <meta name="description" content={value?.entity_meta_desc} />
          <meta name="keywords" content={value?.entity_meta_keywords} />
        </Head>
      )}

      {!value?.entities && ["project", "agent"].includes(value?.entity_type) ? (
        <ChildEntityBySlug
          entityType={value?.entity_type}
          entityData={value?.entity_data}
        />
      ) : (
        <EntityBySlug entityData={value} />
      )}
    </>
  );
}
