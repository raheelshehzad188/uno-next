import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../layout/headers/Navbar";
import { getData } from "../../utils/getData";
import AgentProfile from "../agent/details/AgentProfile";
import ProjectProfile from "../project/details/ProjectProfile";
import FooterOne from "../../layout/footers/FooterOne";

const ChildEntityBySlug = ({ entityType, entityData }) => {
  // const router = useRouter();
  // const activeLanguage = router.locale;
  // const [entityType, setEntityType] = useState("");
  // const [entityData, setEntityData] = useState("");

  // useEffect(() => {
  //   getData(`${process.env.API_URL + activeLanguage}/entity-child/${slug}`)
  //     .then((response) => {
  //       setEntityType(response.data.data.entity_type);
  //       setEntityData(response.data.data.entity_data);
  //     })
  //     .catch((error) => console.log("Error", error));
  // }, [slug]);

  return (
    <>
      <Navbar
        lightBG={entityType === "project"}
        fixed={true}
        shadow={entityType !== "project"}
      />
      {entityType === "agent" && <AgentProfile agentData={entityData} />}
      {entityType === "project" && <ProjectProfile projectData={entityData} />}
      <FooterOne />
    </>
  );
};

export default ChildEntityBySlug;
