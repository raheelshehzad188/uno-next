import React from "react";
import { DollarSign } from "react-feather";
import { useDispatch } from "react-redux";
import useOutsideDropdown from "../../../../utils/useOutsideDropdown";

const Currency = ({ value }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideDropdown(false);
  const dispatch = useDispatch();

  return (
    <li
      ref={ref}
      className={`dropdown currency ${isComponentVisible && "active"}`}
    >
      <a>
        <DollarSign
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        />
      </a>
      <ul className={`nav-submenu ${isComponentVisible && "open"}`}>
        {value.map((currency, i) => (
          <li key={i}>
            <a
              onClick={() =>
                dispatch({ type: "currencyChange", payload: currency })
              }
            >
              {currency.currency}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Currency;
