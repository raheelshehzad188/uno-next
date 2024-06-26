/**
 * It maps through the RightNavMenuItem array and returns the appropriate component based on the title
 * of the object
 * @returns A list of items that are being mapped over.
 */
import Link from "next/link";
import React, { Fragment } from "react";

import Currency from "./rightNavComponents/Currency";
import Language from "./rightNavComponents/Language";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const RightNav = () => {
  return (
    <ul className="header-right">
      <li className="right-menu">
        <ul className="nav-menu">
          <li className={`dropdown`}>
            <Link href="https://api.whatsapp.com/send?phone=971585074581">
              <FaWhatsapp size={"auto"} />
            </Link>
          </li>
          <li className={`dropdown`}>
            <Link href="tel:+97145772051">
              <FaPhoneAlt size={"auto"} />
            </Link>
          </li>
          <Language
            value={{
              title: "language",
              option: [
                { lang: "en", language: "English" },
                // { lang: "ar", language: "Arabic" },
                // { lang: "fr", language: "French" },
                { lang: "de", language: "German" },
                // { lang: "ru", language: "Russian" },
                // { lang: "se", language: "Swedish" },
              ],
            }}
          />
          {/* <Currency
            value={[
              {
                currency: "AED",
                name: "United Arab Emirates Dirham",
                symbol: "AED",
                value: 1,
              },
              {
                currency: "USD",
                name: "dollar",
                symbol: "$",
                value: 0.27,
              },
              {
                currency: "EUR",
                name: "euro",
                symbol: "€",
                value: 0.25,
              },
              {
                currency: "GBP",
                name: "pound",
                symbol: "£",
                value: 0.21,
              },
            ]}
          /> */}
        </ul>
      </li>
    </ul>
  );
};

export default RightNav;
