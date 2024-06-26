import { Facebook, Instagram, Printer, Twitter } from "react-feather";
import { Col, Container, Row } from "reactstrap";
import DynamicFaIcon from "../../../utils/DynamicIcon/DynamicFaIcon";
import { useSelector } from "react-redux";

const TopTitle = ({ value }) => {
  const { currency, currencyValue } = useSelector(
    (state) => state.currencyReducer
  );
  return (
    <section className="without-top property-main p-0 h-100">
      <div className="single-property-section">
        <div className="single-title h-100">
          <div className="left-single w-100">
            <div className="d-flex">
              <h1>{value?.community_title}</h1>
            </div>
            <h6 className="mb-3 glassy">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: currency,
                maximumFractionDigits: 0,
              }).format(value?.starting_price * currencyValue)}{" "}
              <small>/ Start From</small>
            </h6>
            <p className="mt-1">{value?.community_short_description}</p>

            <ul className="features">
              {value?.community_facility &&
                Object.values(value?.community_facility).map((data, i) => (
                  <li key={i}>
                    <DynamicFaIcon name={data.icon ?? ""} />
                    <span className="mx-1 align-middle">{data.title}</span>
                  </li>
                ))}
            </ul>
            <div className="share-buttons float-end">
              <button className="btn btn-light btn-pill">
                <i className="fas fa-solid fa-headset"></i>
                Get More Info
              </button>
              <div className="d-inline-block">
                <a className="btn btn-dashed btn-pill ms-md-2 ms-1">
                  <i className="fas fa-share-square"></i>
                  Share
                </a>
                <div className="share-hover">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="icon-facebook"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Facebook></Facebook>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="icon-twitter"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Twitter></Twitter>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="icon-instagram"
                        rel="noreferrer"
                      >
                        <Instagram></Instagram>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopTitle;
