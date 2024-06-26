/**
 * It renders a tabbed box with 6 tabs
 * @returns The SinglePropertySection component is being returned.
 */
import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import AboutProject from "./tabs/AboutProject";
import ProjectCommunity from "./tabs/ProjectCommunity";
import ProjectDeveloper from "./tabs/ProjectDeveloper";
import ProjectPropertyLocation from "./tabs/ProjectPropertyLocation";
import { useTranslation } from "next-i18next";

const ProjectNavTabs = ({ projectData }) => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState("About");

  return (
    <div className="desc-box">
      <Nav tabs className="line-tab">
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("About");
            }}
            active={active === "About" && true}
          >
            {t("About")}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("Community");
            }}
            active={active === "Community" && true}
          >
            {t("Community")}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("Developer");
            }}
            active={active === "Developer" && true}
          >
            {t("Developer")}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            onClick={() => {
              setActive("Locations");
            }}
            active={active === "Locations" && true}
          >
            {t("Properties Location")}
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent id="tabsContent" className="tab-content" activeTab={active}>
        <TabPane tabId="About">
          <AboutProject
            projectData={projectData?.project}
            propertyFloorPlans={projectData?.project_property}
            paymentPlan={projectData?.project_payment_plan}
            agents={projectData?.project_agents}
          />
        </TabPane>
        <TabPane tabId="Community">
          <ProjectCommunity
            projectData={projectData?.project}
            projectCommunity={projectData?.project_community}
          />
        </TabPane>
        <TabPane tabId="Developer">
          <ProjectDeveloper
            projectData={projectData?.project}
            projectDeveloper={projectData?.project_developer}
          />
        </TabPane>
        <TabPane tabId="Locations">
          <ProjectPropertyLocation />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProjectNavTabs;
