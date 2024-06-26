/**
 * It returns a section with a container, a row, and two columns. The first column has a div with a
 * class of video-details, which contains a span, an h2, a p, and a button. The second column has a div
 * with a class of play-icon, which contains a div with a class of icon-video, which contains a span
 * and an a tag. The a tag contains an i tag
 * @returns The return statement is returning the value of the function.
 */
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import CommunityBox from "../../community/details/CommunityBox";
import { useRouter } from "next/router";
import Typed from "typed.js";

const ProjectCommunity = ({ value }) => {
  const router = useRouter();
  const activeLanguage = router.locale;
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Where is the project?", "What community is it in?"],
      stringsElement: null,
      typeSpeed: 100,
      backSpeed: 35,
      showCursor: false,
      loop: true,
      cursorChar: "|",
      attr: null,
      contentType: "html",
      callback: function () {},
      preStringTyped: function () {},
      onStringTyped: function () {},
      resetCallback: function () {},
    });
    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section
      className="video-section"
      style={{
        backgroundImage: `url(${value?.community_image})`,
      }}
    >
      <div className="title-1">
        <span className="label label-gradient">You may be asking</span>
        <h2 ref={el} style={{ minHeight: "60px" }}>
          {" "}
        </h2>
        <hr />
      </div>

      <Container fluid={true}>
        <Row>
          <Col xl="7" lg="8">
            <div className="video-details mt-0">
              <h2 className="mt-1">{value?.community_title}</h2>
              <p className="font-roboto mb-3">{value?.community_description}</p>
              {/* <Link locale={activeLanguage} href={`/${value?.community_slug}`}>
                Check Projects of {value?.community_title}
              </Link> */}

              <CommunityBox galleryImages={value?.community_gallery} />
            </div>
          </Col>
          {/* <Col xl="5" lg="4" className="px-4">
            <div className="play-icon">
              <div className="icon-video">
                <span className="heart-animation to-btn"></span>
                <Link
                  locale={activeLanguage}
                  href={`/${value?.community_slug}`}
                  className="btn btn-gradient btn-pill"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectCommunity;
