/**
 * It renders a dropdown menu with nested submenus
 * @returns A dropdown menu with a title and a list of items.
 */
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import useMobileSize from "../../../../utils/useMobileSize";
import { useRouter } from "next/router";

const DropdownMenus = ({
  navTitle,
  isOpen,
  setIsOpen,
  isOpenChild,
  setIsOpenChild,
  isOpenNestedChild,
  setIsOpenNestedChild,
  icon,
}) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  // get window width
  const mobileSize = useMobileSize();
  return (
    <li className="dropdown">
      {/* menuItems : HOME, LISTING, PROPERTY, MODULES, AGENT, CONTACT */}
      <a
        className={`nav-link menu-title ${
          isOpen === navTitle.title ? "active" : ""
        }`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(navTitle.title);
          isOpen === navTitle.title && setIsOpen();
        }}
      >
        {!mobileSize && icon && navTitle.icon}
        {t(navTitle.title)}
        <span className="according-menu">
          {isOpen === navTitle.title ? "-" : "+"}
        </span>
      </a>
      <ul
        className={`nav-submenu menu-content ${
          mobileSize && isOpen === navTitle.title
            ? "d-block"
            : "d-none d-xl-block"
        }`}
      >
        {navTitle.children.map((navList, index) => (
          <li key={index}>
            {!navList.children || navList.children.length === 0 ? (
              <>
                {navList.path !== router.pathname ? (
                  <Link href={"/" + navList.path}>{navList.menu_title}</Link>
                ) : (
                  <a>
                    {t(navList.menu_title)}
                    {navList.tag && (
                      <span className="label">{navList.tag}</span>
                    )}
                    {navList.icon && (
                      <span className="icon-trend label">
                        <i className="fas fa-bolt"></i>
                      </span>
                    )}
                  </a>
                )}
              </>
            ) : (
              <>
                <a
                  className="submenu-title"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpenChild(navList.menu_title);
                    isOpenChild === navList.menu_title && setIsOpenChild();
                  }}
                >
                  {t(navList.menu_title)}
                  <span className="according-menu">
                    {navList.children &&
                      navList.children.length > 0 &&
                      (isOpenChild === navList.menu_title ? "-" : "+")}
                  </span>
                </a>
                <ul
                  className={`nav-sub-childmenu level1 ${
                    mobileSize && isOpenChild === navList.menu_title
                      ? "d-block"
                      : ""
                  }`}
                >
                  {navList.children &&
                    navList.children.length > 0 &&
                    navList.children.map((childNavList, index) => (
                      <li key={index}>
                        {childNavList.path ? (
                          <Link
                            href={"/" + childNavList.path}
                            className={
                              childNavList.children &&
                              childNavList.children.length > 0
                                ? "submenu-title"
                                : ""
                            }
                            onClick={() => {
                              setIsOpenNestedChild(childNavList.menu_title);
                              isOpenNestedChild === childNavList.menu_title &&
                                setIsOpenNestedChild();
                            }}
                          >
                            {t(childNavList.menu_title)}
                            <span className="according-menu">
                              {childNavList.children &&
                                childNavList.children.length > 0 &&
                                (isOpenNestedChild === childNavList.menu_title
                                  ? "-"
                                  : "+")}
                            </span>
                          </Link>
                        ) : (
                          <a
                            className={
                              childNavList.children &&
                              childNavList.children.length > 0
                                ? "submenu-title"
                                : ""
                            }
                            onClick={() => {
                              setIsOpenNestedChild(childNavList.menu_title);
                              isOpenNestedChild === childNavList.menu_title &&
                                setIsOpenNestedChild();
                            }}
                          >
                            {t(childNavList.menu_title)}
                            <span className="according-menu">
                              {childNavList.children &&
                                childNavList.children.length > 0 &&
                                (isOpenNestedChild === childNavList.menu_title
                                  ? "-"
                                  : "+")}
                            </span>
                          </a>
                        )}
                        {childNavList.children &&
                          childNavList.children.length > 0 && (
                            <ul
                              className={`nav-sub-childmenu submenu-content level2  ${
                                mobileSize &&
                                isOpenNestedChild === childNavList.menu_title
                                  ? "d-block"
                                  : ""
                              }`}
                            >
                              {childNavList.children &&
                                childNavList.children.length > 0 &&
                                childNavList.children.map(
                                  (nestedChildNavList, index) => (
                                    <li key={index}>
                                      <Link
                                        href={"/" + nestedChildNavList.path}
                                      >
                                        {t(nestedChildNavList.menu_title)}
                                      </Link>
                                    </li>
                                  )
                                )}
                            </ul>
                          )}
                      </li>
                    ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropdownMenus;
