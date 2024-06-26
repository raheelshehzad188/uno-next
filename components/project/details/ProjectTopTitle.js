import useStickyBar from "../../../utils/useStickyBar";
import { Button, Col, Row } from "reactstrap";
import ProjectBox from "./ProjectBox";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import DynamicFaIcon from "../../../utils/DynamicIcon/DynamicFaIcon";
import { FaCalendarCheck, FaKey, FaWallet } from "react-icons/fa";

const ProjectTopTitle = ({ value, galleryImages, toggleInquiryModal }) => {
  const fix = useStickyBar();
  const { t } = useTranslation("common");
  const { currency, currencyValue } = useSelector(
    (state) => state.currencyReducer
  );

  return (
    <section
      className={`project-landing-page ${fix ? "fix-header-margin" : ""}`}
    >
      <div className="container">
        <div className="project-header">
          <div className="project-title">
            <span className="label label-white label-flat font-roboto">
              {value?.project_community.community_title}
            </span>
            <h1 className="fw-bold">
              <span className="text-gradient">
                {value?.project_property_types &&
                  value?.project_property_types
                    .map((data, i) => data.property_type_title)
                    .join(", ")}
              </span>{" "}
              in {value?.project.project_title}
            </h1>

            <p>{value?.project.project_short_description}</p>

            <div className="mt-4">
              <Button
                type="button"
                className="btn btn-gradient next1 me-3 btn-pill"
                onClick={() => toggleInquiryModal(true)}
              >
                Enquiry
              </Button>
              <Button
                type="button"
                className="btn btn-dashed btn-pill"
                href="tel:+97145772051"
              >
                Call
              </Button>
            </div>
          </div>
        </div>

        <div className="project-img">
          <ProjectBox
            mainImage={value?.project.project_image}
            galleryImages={galleryImages ?? []}
            logo={value?.project.project_logo}
          />
        </div>

        <div className="project-features mt-3">
          <Row>
            <Col className="feature-box col-4">
              <FaWallet className="h3 me-2" />
              <h6>{t("Start From")}</h6>
              <span className="font-roboto">
                {value?.project?.project_starting_price
                  ? new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: currency,
                      maximumFractionDigits: 0,
                    }).format(
                      value?.project?.project_starting_price * currencyValue
                    )
                  : t("Coming Soon")}
              </span>
            </Col>
            <Col className="feature-box col-4">
              <FaCalendarCheck className="h3 me-2" />
              <h6>{t("Payment Plan")}</h6>
              <span className="font-roboto">
                {value?.project_payment_plan?.project_payment_plan_plan_title ??
                  t("Coming Soon")}
              </span>
            </Col>
            <Col className="feature-box col-4">
              <FaKey className="h3 me-2" />
              <h6>{t("Handover")}</h6>
              <span className="font-roboto">{value?.project?.handover}</span>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default ProjectTopTitle;
