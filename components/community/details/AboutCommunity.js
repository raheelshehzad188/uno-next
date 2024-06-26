import { Col, Container, Row } from "reactstrap";
import parse from "html-react-parser";
import { useTranslation } from "next-i18next";
import GoogleMapPosition from "../../listing/gridView/map/GoogleMapPosition";

const AboutCommunity = ({ communityTitle, desc }) => {
  const { t } = useTranslation("common");
  return (
    <section className="ratio3_2 pb-0">
      <Container>
        <div className="card about-property">
          <Row>
            <Col md="8">
              <div className="title-1 pb-3 pt-4">
                <h2>
                  {t("About")} {communityTitle}
                </h2>
                <hr />
              </div>
              <div className="card-body">
                <p className="property-desc">{parse(desc || "")}</p>
              </div>
            </Col>
            <Col md="4">
              <GoogleMapPosition
                position={{
                  lat: 25.211392229588935,
                  lng: 55.26824933874438,
                }}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutCommunity;
