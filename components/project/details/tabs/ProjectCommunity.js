import Img from "../../../../utils/BackgroundImageRatio";
import Link from "next/link";
import { useRouter } from "next/router";
import DynamicFaIcon from "../../../../utils/DynamicIcon/DynamicFaIcon";
import parser from "html-react-parser";
import CommunityBox from "../../../community/details/CommunityBox";
import { useTranslation } from "next-i18next";

const ProjectCommunity = ({ projectData, projectCommunity }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const activeLanguage = router.locale;
  return (
    <div className="about page-section" id="community">
      <h4 className="content-title">
        {projectData?.project_title} {t("locates in")}{" "}
        {projectCommunity?.community_title}
      </h4>

      <ul className="features mb-5">
        {projectCommunity?.community_facilities &&
          Object.values(projectCommunity?.community_facilities).map(
            (data, i) => (
              <li key={i}>
                <DynamicFaIcon name={data.facility_icon ?? ""} />
                <span className="mx-1 align-middle">{data.facility_title}</span>
              </li>
            )
          )}
      </ul>

      <div className="img-text-box">
        <Img src={projectCommunity?.community_image} />
        <p>{parser(projectCommunity?.community_description ?? "")}</p>
        <Link
          locale={activeLanguage}
          href={`/${projectCommunity?.community_slug}`}
          className="d-block mt-3"
        >
          {t("Check Projects of")} {projectCommunity?.community_title}
        </Link>
      </div>

      <CommunityBox galleryImages={projectCommunity?.community_gallery} />
    </div>
  );
};

export default ProjectCommunity;
