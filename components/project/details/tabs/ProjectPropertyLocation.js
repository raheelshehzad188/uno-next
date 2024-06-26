import { useRouter } from "next/router";
import GoogleMap from "../../../listing/gridView/map/GoogleMap";

const ProjectPropertyLocation = ({ mapLink }) => {
  return (
    <div className="about page-section" id="locations">
      <GoogleMap mapLink={mapLink} />
    </div>
  );
};

export default ProjectPropertyLocation;
