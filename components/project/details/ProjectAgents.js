/**
 * It returns a section with a container, a row, and a column. Inside the column, there's a title, a
 * nav, and a tab content
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import React, { useState } from "react";
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import AgentCompact from "../../agent/list/AgentCompact";
import { useTranslation } from "next-i18next";

const ProjectAgents = ({ value }) => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState("English");

  let langs = [];
  value.forEach((agent) => {
    const agentLangs = agent.agent_language.split(",");
    langs.push(...agentLangs);
  });

  langs = langs.map((s) => s.trim());

  const filteredLangs = [...new Set(langs)];

  if (filteredLangs.indexOf(active) === -1) {
    setActive("English");
  }

  return (
    <section className="property-section pb-4">
      <Container>
        <Row className="ratio_square">
          <Col>
            <div className="title-2">
              <h2>{t("More Info, Contact")}</h2>
              <p>
                Our agents are multilingual, Talk with a Dubai property expert
              </p>
            </div>
            <Nav tabs>
              {filteredLangs &&
                filteredLangs.map((lang) => (
                  <NavItem key={lang}>
                    <NavLink
                      onClick={() => {
                        setActive(lang);
                      }}
                      active={active === lang && true}
                    >
                      {lang}
                    </NavLink>
                  </NavItem>
                ))}
            </Nav>

            <TabContent
              id="tabsContent"
              activeTab={active}
              style={{ minHeight: "525px" }}
            >
              {filteredLangs &&
                filteredLangs.map((lang) => (
                  <TabPane tabId={lang} key={lang}>
                    <div
                      className={`tab-pane fade ${
                        active === lang ? "show" : ""
                      }`}
                    >
                      <AgentCompact value={value} lang={lang} />
                    </div>
                  </TabPane>
                ))}
            </TabContent>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectAgents;
