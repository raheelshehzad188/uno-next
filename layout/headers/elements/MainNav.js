/**
 * It renders a navbar with a list of menu items
 * @returns A navbar with a dropdown menu and a mega menu.
 */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState, useEffect } from "react";
import DropdownMenus from "./mainNavComponents/DropdownMenus";
import { getData } from "../../../utils/getData";
import { useTranslation } from "next-i18next";

const MainNav = ({ center, icon }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const activeLanguage = router.locale;

  const [openNavbar, setOpenNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState();
  const [isOpenChild, setIsOpenChild] = useState();
  const [isOpenNestedChild, setIsOpenNestedChild] = useState();
  const [mainNavMenuItems, setMainNavMenuItems] = useState([]);

  useEffect(() => {
    getData(`${process.env.API_URL + activeLanguage}/home/get-site-menu`)
      .then((response) => {
        setMainNavMenuItems(response.data.data.header);
      })
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <nav>
      <div className="main-navbar">
        <div id="mainnav">
          {/* open navbar button in mobile size */}
          <div className="toggle-nav">
            <i
              className="fa fa-bars sidebar-bar"
              onClick={() => setOpenNavbar(true)}
            ></i>
          </div>
          <ul className={`nav-menu ${openNavbar ? "open" : ""}`}>
            {/* close navbar button in mobile size */}
            <li className="back-btn">
              <div className="mobile-back text-end">
                <span onClick={() => setOpenNavbar(false)}>Back</span>
                <i aria-hidden="true" className="fa fa-angle-right ps-2"></i>
              </div>
            </li>
            {mainNavMenuItems.map((navTitle, index) => (
              <Fragment key={index}>
                {navTitle.children.length > 0 ? (
                  <DropdownMenus
                    navTitle={navTitle}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    isOpenChild={isOpenChild}
                    setIsOpenChild={setIsOpenChild}
                    isOpenNestedChild={isOpenNestedChild}
                    setIsOpenNestedChild={setIsOpenNestedChild}
                    icon={icon}
                  />
                ) : (
                  <li className="dropdown">
                    <Link href={"/" + navTitle.path_prefix}>
                      {t(navTitle.title)}
                    </Link>
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
          {center && (
            <div className="brand-logo">
              <Link href="/home/slider-filter-search">
                <img
                  src="/assets/images/logo/uno.png"
                  alt=""
                  className="img-fluid for-light"
                />
                <img
                  src="/assets/images/logo/uno.png"
                  alt=""
                  className="img-fluid for-dark"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
