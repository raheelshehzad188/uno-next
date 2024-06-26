import React from "react";
import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div className="loader-wrapper">
      <div className="row loader-text">
        <div className="col-12">
          <img
            src="/assets/images/loader/loader.gif"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-12">
          <div>
            <h3 className="mb-0">UNO is loading...</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoadingScreen2 = () => {
  return (
    <div className="loader-wrapper img-gif">
      <img
        src="/assets/images/loader/loader-4.gif"
        className="img-fluid"
        alt=""
      />
    </div>
  );
};

const LoadingScreen3 = () => {
  return (
    <div className="loader-wrapper">
      <div className="row loader-img">
        <div className="col-12">
          <img
            src="/assets/images/loader/loader-2.gif"
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export { LoadingScreen, LoadingScreen2, LoadingScreen3 };
