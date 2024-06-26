// import Link from "next/link";
import { useTranslation } from "next-i18next";
// import { usePathname } from "next/navigation";
import Img from "../../../utils/BackgroundImageRatio";
import { Col, Row } from "reactstrap";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Slider from "react-slick";
import NoSsr from "../../../utils/NoSsr";

const AgentCompact = ({ value, lang }) => {
  const { t } = useTranslation("common");
  //   const currentPathName = usePathname();

  const agents = value?.filter((agent) => {
    return agent.agent_language.includes(lang);
  });

  const slideSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Row key={lang} className="arrow-gradient">
      <NoSsr>
        <Slider {...slideSettings}>
          {agents &&
            agents.map((data, index) => (
              <Col md="3" key={index} className="px-4 pb-5">
                <div className="agent-box rounded">
                  <div className="agent-image rounded-top">
                    <Img src={data?.agent_image} className="bg-img" alt="" />
                  </div>
                  <div className="agent-content">
                    <h3>
                      {/* <Link href={currentPathName + "/" + data?.agent_slug}> */}
                      {data?.agent_name}
                      {/* </Link> */}
                    </h3>
                    <p className="font-roboto">{data?.agent_job}</p>
                    <span className="d-block mb-2">
                      {t("Specialist in")} {data.agent_specialties}
                    </span>

                    <ul className="inline-contact">
                      <li>
                        <a
                          className="btn btn-dashed btn-pill btn-sm py-1 px-2 me-3"
                          href={`mailto:${data?.agent_email}`}
                        >
                          <FaEnvelope />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-gradient btn-pill btn-sm py-1 px-2"
                          href={`tel:${data?.agent_mobile_no}`}
                        >
                          <FaPhoneAlt />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            ))}
        </Slider>
      </NoSsr>
    </Row>
  );
};

export default AgentCompact;
