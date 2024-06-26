import ProjectTopTitle from "./ProjectTopTitle";
import Exploration from "../../../layout/sidebarLayout/Exploration";
import ProjectContent from "./ProjectContent";
import { useState } from "react";
import PaymentPlan from "./PaymentPlan";
import ProjectCommunity from "./ProjectCommunity";
import ProjectDeveloper from "./ProjectDeveloper";
import ProjectFeature from "./ProjectFeature";
import ProjectFloorPlan from "./ProjectFloorPlan";
import ProjectAgents from "./ProjectAgents";
import CommunityProjects from "../../community/list/CommunityProjects";

const ProjectProfile = ({ projectData }) => {
  const [inquiryModal, setInquiryModal] = useState(false);

  const toggleInquiryModal = (showModal) => {
    setInquiryModal(showModal);
  };

  return (
    <>
      <Exploration
        referenceId={projectData?.project.project_id}
        inquiryModal={inquiryModal}
        toggleInquiryModal={toggleInquiryModal}
      />
      <ProjectTopTitle
        value={projectData}
        galleryImages={projectData?.project_gallery ?? []}
        toggleInquiryModal={toggleInquiryModal}
      />

      <section className="single-property mt-0 p-0">
        <ProjectContent value={projectData} />
        <ProjectFeature features={projectData?.project_facility} />
        <PaymentPlan value={projectData?.project_payment_plan} />
        <ProjectCommunity value={projectData?.project_community} />
        <ProjectFeature
          features={projectData?.project_community.community_facilities}
        />

        {projectData?.project_property.length > 0 && (
          <ProjectFloorPlan value={projectData?.project_property} />
        )}

        <ProjectDeveloper value={projectData?.project_developer} />
        <ProjectAgents value={projectData?.project_agents} />

        {projectData?.trending_projects.length > 0 && (
          <CommunityProjects
            metaTitle={`Other projects in ${projectData?.project_community.community_title}`}
            entities={projectData?.trending_projects}
          />
        )}
      </section>
    </>
  );
};

export default ProjectProfile;
