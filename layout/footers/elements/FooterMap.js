import React from "react";
import { Col } from "reactstrap";
import { useTranslation } from "next-i18next";
import GoogleMapPosition from "../../../components/listing/gridView/map/GoogleMapPosition";

const FooterMap = () => {
  const { t } = useTranslation("common");
  return (
    <Col xl="3" md="6" className="order-xl">
      <GoogleMapPosition
        position={{ lat: 25.18000168433177, lng: 55.27239071077095 }}
      />
    </Col>
  );
};

export default FooterMap;
