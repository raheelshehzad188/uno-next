import React from "react";
import Slider from "react-slick";
import Img from "../../utils/BackgroundImageRatio";
import NoSsr from "../../utils/NoSsr";

export const propertySlider = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  fade: true,
  waitForAnimate: false,
};

const ImageSlider = ({ images }) => {
  return (
    <NoSsr>
      <Slider className="property-slider" {...propertySlider}>
        {images?.map((data, i) => (
          <div key={i}>
            <div>
              <Img src={data} className="bg-img" />
            </div>
          </div>
        ))}
      </Slider>
    </NoSsr>
  );
};

export default ImageSlider;
