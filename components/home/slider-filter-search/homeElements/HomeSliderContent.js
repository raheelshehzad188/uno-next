/**
 * It returns a div with a div inside it, which has an image, a heading, a subheading, and a button
 * @returns A div with a div inside of it.
 */
import React from "react";

const HomeSliderContent = ({ img, mainTitle }) => {
  return (
    <div>
      <div className="home-content">
        <div>
          <img src={img} className="img-fluid m-0" alt="" />
          <h1>{mainTitle}</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeSliderContent;
