/**
 * It fetches data from the API and then renders the data in the UI
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import React from "react";
import OurAgentsSection from "../OurAgents";
import BrandSection from "./Brand";
import CitiesWisePropertySection from "./CitiesWiseProperty";
import CommunitySection from "./Community";
import HomeBannerSection from "./HomeBanner";
import FeaturedProjectSection from "./FeaturedProject";
import FAQSection from "../FAQ";
import LatestBlogSection from "../LatestBlog";
import ServicesList from "../../service/list/ServicesList";

const BodyContent = ({
  whatYouLookFor,
  projects,
  pages,
  services,
  cities,
  howToBuySteps,
  agents,
  blogs,
  developersLogo,
  communities,
}) => {
  return (
    <>
      <HomeBannerSection whatYouLookFor={whatYouLookFor} />
      <FeaturedProjectSection value={projects} pages={pages} />
      <ServicesList value={services} />
      {/* <CommunitySection value={communities} /> */}
      <CitiesWisePropertySection value={communities} pages={pages} />
      <FAQSection value={howToBuySteps} />
      <OurAgentsSection value={agents} pages={pages} />
      <LatestBlogSection value={blogs} />
      <BrandSection value={developersLogo} />
    </>
  );
};

export default BodyContent;
