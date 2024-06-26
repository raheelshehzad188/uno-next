import React, { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { useDispatch } from "react-redux";
import { Col, FormGroup, Label } from "reactstrap";
import { useSelector } from "react-redux";
import NoSsr from "../../utils/NoSsr";
import { useTranslation } from "next-i18next";

const RangeInputFields = ({
  label,
  name,
  filterValues,
  setFilterValues,
  min,
  max,
  sm,
  lg,
}) => {
  const { t } = useTranslation("common");
  const { currency, currencyValue } = useSelector(
    (state) => state.currencyReducer
  );
  const { price, area } = useSelector((state) => state.inputsReducer);
  const dispatch = useDispatch();
  var [MIN, setMIN] = useState(min);
  var [MAX, setMAX] = useState(max);
  useEffect(() => {
    setMIN(min);
    setMAX(max);
  }, [max, min]);
  const STEP = 1;

  return (
    <Col lg={lg || 10} sm={sm || 10}>
      <NoSsr>
        <FormGroup>
          <div className="price-range">
            <Label>
              {label} :{" "}
              {name === "area"
                ? area[0]
                : new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: currency,
                    maximumFractionDigits: 0,
                  }).format(price[0] * currencyValue)}{" "}
              -{" "}
              {name === "area"
                ? area[1]
                : new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: currency,
                    maximumFractionDigits: 0,
                  }).format(price[1] * currencyValue)}{" "}
              {/* {name === "area" && <> &#13217;</>} */}
              {name === "area" && <> sqft</>}
            </Label>
            <div
              id={name === "price" ? "slider-1" : "slider-2"}
              className="theme-range-3"
            >
              <Range
                values={name === "price" ? price : area}
                step={STEP}
                min={MIN || 1000}
                max={MAX || 10000}
                onChange={(values) => {
                  setFilterValues({ ...filterValues, [`${name}`]: values });
                  dispatch({ type: name.toLowerCase(), payload: values });
                }}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                    }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values: label === "Price" ? price : area,
                          colors: ["#ccc", "var(--theme-default2)", "#ccc"],
                          min: MIN,
                          max: MAX,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div {...props}>
                    <div
                      style={{
                        height: "16px",
                        width: "8px",
                        borderRadius: "30%",
                        backgroundColor: "var(--theme-default2)",
                      }}
                    />
                  </div>
                )}
              />
            </div>
          </div>
        </FormGroup>
      </NoSsr>
    </Col>
  );
};

export default RangeInputFields;
