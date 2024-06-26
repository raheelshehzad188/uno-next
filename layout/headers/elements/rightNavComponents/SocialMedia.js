import Link from "next/link";
import React from "react";
import useOutsideDropdown from "../../../../utils/useOutsideDropdown";

const SocialMedia = ({ value }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideDropdown(false);

  return (
    <li ref={ref} className={`dropdown ${isComponentVisible && "active"}`}>
      <a
        onClick={() => {
          setIsComponentVisible(!isComponentVisible);
        }}
      >
        {value.title}
      </a>
      <ul className={`nav-submenu ${isComponentVisible && "open"}`}>
        {value.option.map((plateform, i) => (
          <li key={i}>
            <Link href={plateform.link}>{plateform.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default SocialMedia;
