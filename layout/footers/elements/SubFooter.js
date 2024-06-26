import React from "react";
import { Container, Row } from "reactstrap";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SubFooter = ({ values }) => {
  return (
    <div className={`sub-footer ${values} && ${values} `}>
      <Container>
        <Row className="row">
          <div className="col-xl-6 col-md-6">
            <div className="footer-social sub-footer-link">
              <ul>
                <li>
                  <a href={values?.site_setting_facebook_url} target="_blank">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href={values?.site_setting_twitter_url} target="_blank">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href={values?.site_setting_instagram_url} target="_blank">
                    <FaInstagram />
                  </a>
                </li>

                <li>
                  <a href={values?.site_setting_linkedin_url} target="_blank">
                    <FaLinkedin />
                  </a>
                </li>

                <li>
                  <a href={values?.site_setting_youtube_url} target="_blank">
                    <FaYoutube />
                  </a>
                </li>

                <li>
                  <a href={values?.site_seeting_tiktok} target="_blank">
                    <FaTiktok />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 text-end">
            <div className="copy-right">
              <p className="mb-0">UNO Estate © 2024</p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SubFooter;
