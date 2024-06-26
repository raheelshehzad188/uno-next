import Img from "../../../../utils/BackgroundImageRatio";
import Link from "next/link";
import { useRouter } from "next/router";
import parser from "html-react-parser";
import { useTranslation } from "next-i18next";

const ProjectDeveloper = ({ projectData, projectDeveloper }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const activeLanguage = router.locale;
  return (
    <div className="about page-section" id="developer">
      <h4 className="content-title">
        {projectData?.project_title} {t("is developed by")}{" "}
        {projectDeveloper?.developer_title}
      </h4>

      <div className="banner-text-box">
        <div
          style={{
            backgroundImage: `url(${projectDeveloper?.developer_image})`,
          }}
          className="black-overlay"
        >
          <Img src={projectDeveloper?.developer_logo} />
        </div>

        <p>{parser(projectDeveloper?.developer_description ?? "")}</p>

        <Link
          locale={activeLanguage}
          href={`/${projectDeveloper?.developer_slug}`}
        >
          {t("Check Projects of")} {projectDeveloper?.developer_title}
        </Link>
      </div>
    </div>
  );
};

export default ProjectDeveloper;
