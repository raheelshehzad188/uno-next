import parser from "html-react-parser";
import { Row, Col } from "reactstrap";
import {
  FaSignature,
  FaWallet,
  FaCalendarCheck,
  FaKey,
  FaHandsHelping,
} from "react-icons/fa";

import { useSelector } from "react-redux";
import Img from "../../../../utils/BackgroundImageRatio";
import PropertyFloorPlan from "../../property/FloorPlan";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaTrowelBricks } from "react-icons/fa6";
import { useTranslation } from "next-i18next";

const AboutProject = ({
  projectData,
  propertyFloorPlans,
  paymentPlan,
  agents,
}) => {
  const { t } = useTranslation("common");
  const { currency, currencyValue } = useSelector(
    (state) => state.currencyReducer
  );

  return (
    <div className="about page-section" id="about">
      <h4 className="content-title">
        {t("About")} {projectData?.project_title}
      </h4>
      <div className="project-features">
        <Row>
          <Col md="4" className="feature-box">
            <FaWallet className="h3 me-2" />
            <h6>{t("Start From")}</h6>
            <span className="font-roboto">
              {projectData?.project_starting_price
                ? new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: currency,
                    maximumFractionDigits: 0,
                  }).format(projectData?.project_starting_price * currencyValue)
                : t("Coming Soon")}
            </span>
          </Col>
          <Col md="4" className="feature-box">
            <FaCalendarCheck className="h3 me-2" />
            <h6>{t("Payment Plan")}</h6>
            <span className="font-roboto">
              {paymentPlan?.project_payment_plan_plan_title}
            </span>
          </Col>
          <Col md="4" className="feature-box">
            <FaKey className="h3 me-2" />
            <h6>{t("Handover")}</h6>
            <span className="font-roboto">{projectData?.handover}</span>
          </Col>
        </Row>
      </div>
      <p>{parser(projectData?.project_description ?? "")}</p>

      {propertyFloorPlans.length > 0 && (
        <PropertyFloorPlan
          projectTitle={projectData?.project_title}
          propertyFloorPlans={propertyFloorPlans}
        />
      )}
      <section className="p-0">
        <Row>
          <h4 className="content-title my-5">
            {paymentPlan?.project_payment_plan_plan_title} {t("Payment Plan")}
          </h4>
          <Col md="7">
            <div className="overlay project-banner-container">
              <Img src={projectData?.project_image} className="w-100 h-100" />
            </div>
          </Col>
          <Col md="5">
            <div>
              <ul class="timeline-with-icons">
                <li class="timeline-item mb-5">
                  <span class="timeline-icon">
                    <FaSignature className="fa-lg" />
                  </span>

                  <h5 class="font-roboto fw-bold title-theme">
                    {paymentPlan?.project_payment_plan_on_booking_percentage}%
                    <small class="text-muted mb-2 fw-bold">
                      {t("On Booking")}
                    </small>
                  </h5>
                  <p>{t("On Booking SubText")}</p>
                </li>

                <li class="timeline-item mb-5">
                  <span class="timeline-icon">
                    <FaTrowelBricks className="fa-lg" />
                  </span>
                  <h5 class="font-roboto fw-bold">
                    {paymentPlan?.project_payment_plan_construction_percentage}%
                    <small class="text-muted mb-2 fw-bold">
                      {t("Construction")}
                    </small>
                  </h5>
                  <p>{t("Construction SubText")}</p>
                </li>

                <li class="timeline-item mb-5">
                  <span class="timeline-icon">
                    <FaKey className="fa-lg" />
                  </span>
                  <h5 class="font-roboto fw-bold title-theme">
                    {paymentPlan?.project_payment_plan_on_handover_percentage}%
                    <small class="text-muted mb-2 fw-bold">
                      {t("On Handover")}
                    </small>
                  </h5>
                  <p>{t("On Handover SubText")}</p>
                </li>

                <li class="timeline-item">
                  <span class="timeline-icon">
                    <FaHandsHelping className="fa-lg" />
                  </span>
                  <h5 class="font-roboto fw-bold title-theme">
                    {paymentPlan?.project_payment_plan_post_handover_percentage}
                    %
                    <small class="text-muted mb-2 fw-bold">
                      {t("Post Handover")}
                    </small>
                  </h5>
                  <p>{t("Post Handover SubText")}</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>
      {agents && (
        <section className="pb-2">
          <div className="agent-section">
            <h4 className="mb-4 text-muted">{t("More Info, Contact")}</h4>
            {agents.map((agent, i) => (
              <div className="our-agent mb-5" key={i}>
                <Row>
                  <Col sm="2" className="ratio_landscape">
                    <div className="agent-image bg-size rounded w-100 h-100">
                      <Img
                        src={agent?.agent_image}
                        className="img-fluid bg-img"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col sm="10">
                    <div className="our-agent-details">
                      <h5 className="f-w-600">{agent?.agent_name}</h5>
                      <h6>{agent?.agent_job}</h6>
                      <Row>
                        <Col md="7">
                          <p className="mt-4">{agent?.agent_language}</p>
                        </Col>
                        <Col md="5">
                          <ul className="inline-contact">
                            <li>
                              <a
                                className="btn btn-dashed btn-pill"
                                href={`mailto:${agent?.agent_email}`}
                              >
                                <FaEnvelope className="me-2" />
                                {t("Email")}
                              </a>
                            </li>
                            <li>
                              <a
                                className="btn btn-gradient btn-pill"
                                href={`tel:${agent?.agent_mobile_no}`}
                              >
                                <FaPhoneAlt className="me-2" />
                                {t("Call")}
                              </a>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default AboutProject;
