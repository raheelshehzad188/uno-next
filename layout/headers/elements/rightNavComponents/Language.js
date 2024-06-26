import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Globe } from "react-feather";
import useOutsideDropdown from "../../../../utils/useOutsideDropdown";

const Language = ({ value }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideDropdown(false);
  const router = useRouter();
  const activeLang = router.locale;

  return (
    <li
      ref={ref}
      className={`dropdown language ${isComponentVisible && "active"}`}
    >
      <a>
        <Globe
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        />
      </a>
      <ul className={`nav-submenu ${isComponentVisible && "open"}`}>
        {value.option.map((language, i) => (
          <li key={i}>
            {activeLang !== language.lang ? (
              <Link locale={language.lang} href="/">
                {language.language}
              </Link>
            ) : (
              <a className="text-primary">{language.language}</a>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Language;
