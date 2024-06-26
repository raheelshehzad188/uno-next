/**
 * It returns a header element with a container element with a row element with a column element with a
 * div element with a logo element and two nav elements
 * @returns A header with a container with a row with a column with a div with a logo and two navs.
 */
import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Logo } from "../../components/elements/Logo";
import useStickyBar from "../../utils/useStickyBar";
import MainNav from "./elements/MainNav";
import RightNav from "./elements/RightNav";
import { useTranslation } from "next-i18next";

const Navbar = ({ logo, fixed, lightBG, specialHeaderClx, shadow = true }) => {
  const { t } = useTranslation("common");
  const fix = useStickyBar();
  return (
    <header
      className={`${
        lightBG ? "header-2 light-header" : "header-1 " + specialHeaderClx
      }
        ${shadow ? "shadow-cls" : ""}
        ${fixed ? "fixed-header header-1" : ""} ${
        fixed && fix ? "fixed light-header shadow-cls" : ""
      } `}
    >
      <Container>
        <Row>
          <Col>
            <div className="menu">
              {logo || <Logo subText={t("Real Estate")} />}
              <MainNav />
              <RightNav />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Navbar;
