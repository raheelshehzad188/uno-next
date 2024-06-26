import AgentBox from "./AgentBox";
import AgentTopTitle from "./AgentTopTitle";
import { Container, Row, Col } from "reactstrap";
import parse from "html-react-parser";
import CommunityProjects from "../../community/list/CommunityProjects";
import AgentReviews from "../list/AgentReviews";
import { useTranslation } from "next-i18next";

const AgentProfile = ({ agentData }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <AgentBox>
        <AgentTopTitle singleData={agentData?.entity} />
      </AgentBox>

      <section className="mt-4 pb-0">
        <Container>
          <Row>
            <Col sm={agentData?.reviews.length > 0 ? "8" : "12"}>
              <div className="about-agent theme-card">
                <h3>{t("Biography")}</h3>
                <p className="property-desc">
                  {parse(agentData?.entity.agent_info)}
                </p>

                <h6 className="fw-bold my-2">{t("Service Areas")}</h6>
                <p className="property-desc">
                  {agentData?.entity.agent_service_areas
                    .split(",")
                    .map((area, i) => (
                      <span
                        className="label label-light label-rounded me-1 mb-2"
                        key={i}
                      >
                        {area}
                      </span>
                    ))}
                </p>
              </div>
            </Col>
            <Col sm="4">
              <AgentReviews value={agentData?.reviews} />
            </Col>
          </Row>
        </Container>
      </section>

      <CommunityProjects
        entities={agentData?.projects}
        metaTitle={agentData?.entity.agent_name + " " + t("Listing")}
      />
    </>
  );
};

export default AgentProfile;
