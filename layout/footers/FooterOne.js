import React, { useState, useEffect, Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Logo } from "../../components/elements/Logo";
import FooterContactUsDetails from "./elements/FooterContactUsDetails";
import FooterLink from "./elements/FooterLink";
import FooterMap from "./elements/FooterMap";
import SubFooter from "./elements/SubFooter";
import { getData } from "../../utils/getData";
import { useRouter } from "next/router";

const FooterOne = ({ logo }) => {
  const router = useRouter();
  const activeLanguage = router.locale;
  const [footerItems, setFooterItems] = useState([]);
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [banner, setBanner] = useState([]);

  const [isActive, setIsActive] = useState();

  useEffect(() => {
    getData(`${process.env.API_URL + activeLanguage}/home/get-site-footer`)
      .then((response) => {
        setFooterItems(response.data.data.footer);
      })
      .catch((error) => console.log("Error", error));

    getData(`${process.env.API_URL + activeLanguage}/home/pages`)
      .then((response) => {
        setSocialMediaLinks(response.data.data.siteSettings);

        const homeSittings = response.data.data.pages?.find(
          (page) => page.page_code === "home"
        );
        setBanner(homeSittings?.page_footer_image);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <footer
      className="footer footer-bg black-overlay mt-5"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="footer">
        <Container>
          <Row className="row">
            <FooterContactUsDetails
              isActive={isActive}
              setIsActive={setIsActive}
              logo={logo || <Logo />}
            />
            {footerItems?.map((value, i) => (
              <Fragment key={i}>
                <FooterLink
                  value={value}
                  isActive={isActive}
                  setIsActive={setIsActive}
                  activeLanguage={activeLanguage}
                />
              </Fragment>
            ))}
            <FooterMap isActive={isActive} setIsActive={setIsActive} />
          </Row>
        </Container>
      </div>
      <SubFooter values={socialMediaLinks} />
    </footer>
  );
};

export default FooterOne;
