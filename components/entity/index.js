/**
 * It fetches the translations from the server and passes them to the component as props
 * @returns A React component.
 */
import { React, useRef } from "react";
import { useRouter } from "next/router";
import Navbar from "../../layout/headers/Navbar";
import FooterOne from "../../layout/footers/FooterOne";
import CommunityBox from "../community/details/CommunityBox";
import CommunityProjects from "../community/list/CommunityProjects";
import AboutCommunity from "../community/details/AboutCommunity";
import { getData } from "../../utils/getData";
import CommunityTopTitle from "../community/details/CommunityTopTitle";
import PropertyTypeBox from "../propertyType/details/PropertyTypeBox";
import DeveloperBox from "../developer/details/DeveloperBox";
import AboutDeveloper from "../developer/details/AboutDeveloper";
import GenericEntityBox from "./details/GenericEntityBox";
import AgentBox from "../agent/details/AgentBox";
import AgentList from "../agent/list/AgentsList";
import DevelopersList from "../developer/list/DevelopersList";
import CommunitiesList from "../community/list/CommunitiesList";
import CityBox from "../city/details/CityBox";
import { useTranslation } from "next-i18next";
import ProjectAgents from "../project/details/ProjectAgents";
import ProjectFeature from "../project/details/ProjectFeature";

const EntityBySlug = ({ entityData }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const activeLanguage = router.locale;
  const entityType = entityData.entity_type;
  const parentData = entityData.parent_entity;

  let banner = [];
  if (entityType === "community_projects") {
    banner = [
      {
        gallery_image: parentData?.community_image,
        gallery_image_thumb: parentData?.community_image_thumb,
      },
    ];
  } else if (entityType === "developer_projects") {
    banner = [
      {
        gallery_image: parentData?.developer_banner,
        gallery_image_thumb: parentData?.developer_banner_thumb,
      },
    ];
  }

  const galleryImages = [...(banner ?? []), ...(parentData?.gallery ?? [])];

  const projectRef = useRef(null);

  // useEffect(() => {
  //   getData(`${process.env.API_URL + activeLanguage}/entity/${slug}`)
  //     .then((response) => {
  //       setEntityType(response.data.data.entity_type);
  //       setEntityData(response.data.data);

  //       const parentData = response.data.data.parent_entity;

  //       let banner = [];
  //       if (response.data.data.entity_type === "community_projects") {
  //         banner = [{ gallery_image: parentData?.community_image }];
  //       } else if (response.data.data.entity_type === "developer_projects") {
  //         banner = [{ gallery_image: parentData?.developer_banner }];
  //       }

  //       setGalleryImages([...banner, ...parentData?.gallery]);
  //     })
  //     .catch((error) => console.log("Error", error));
  // }, [slug]);

  return (
    <>
      <Navbar
        lightBG={
          !["developer_projects", "agent", "city_projects"].includes(entityType)
            ? true
            : false
        }
        fixed={true}
      />

      {/* In case of showing Project by property type */}
      {entityType === "property_projects" && (
        <PropertyTypeBox value={entityData?.parent_entity} />
      )}

      {/* In case of showing Project by Community */}
      {entityType === "community_projects" && (
        <>
          <CommunityBox galleryImages={galleryImages} isHeader={true}>
            <CommunityTopTitle value={entityData?.parent_entity} />
          </CommunityBox>
          <ProjectFeature
            features={entityData?.parent_entity?.community_facility}
          />
          <AboutCommunity
            communityTitle={entityData?.parent_entity?.community_title}
            desc={entityData?.parent_entity?.community_description}
          />
          <CommunityProjects
            ref={projectRef}
            metaTitle={t("Projects Listing")}
            entities={entityData?.entities}
          />
          <ProjectAgents value={entityData?.parent_entity?.agents} />
        </>
      )}

      {/* In case of showing Project by Community */}
      {entityType === "developer_projects" && (
        <>
          <DeveloperBox
            value={entityData?.parent_entity}
            refProp={projectRef}
          />
          <AboutDeveloper
            developerTitle={entityData?.parent_entity?.developer_title}
            desc={entityData?.parent_entity?.about_developer_description}
            galleryImages={galleryImages}
          />
        </>
      )}

      {entityType === "city_projects" && (
        <CityBox value={entityData?.parent_entity} />
      )}

      {/* In case of showing Project by Community */}
      {["project", "property", "developer", "community"].includes(
        entityType
      ) && (
        <GenericEntityBox
          entityTitle={entityData?.entity_title}
          entityDescription={entityData?.entity_short_desc}
        />
      )}

      {/* Display Community Projects */}
      {!["agent", "developer", "community", "community_projects"].includes(
        entityType
      ) && (
        <CommunityProjects
          ref={projectRef}
          metaTitle={t("Projects Listing")}
          entities={entityData?.entities}
        />
      )}

      {/* In case of showing all communities */}
      {entityType === "community" && (
        <CommunitiesList
          entities={entityData?.entities}
          metaTitle={entityData?.entity_meta_title}
        />
      )}

      {/* In case of showing all developer */}
      {entityType === "developer" && (
        <DevelopersList
          entities={entityData?.entities}
          metaTitle={entityData?.entity_meta_title}
        />
      )}

      {/* In case of showing Agents */}
      {entityType === "agent" && (
        <>
          <AgentBox pageTitle={t("Meet Our Agents")} />
          <AgentList clientData={entityData?.entities} />
        </>
      )}

      <FooterOne />
    </>
  );
};

export default EntityBySlug;
