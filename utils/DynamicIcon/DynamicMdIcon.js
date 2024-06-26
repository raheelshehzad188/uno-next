import React from "react";
import * as Icons from "react-icons/md";

/* Your icon name from database data can now be passed as prop */
const DynamicFaIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return <Icons.MdLogoDev />;
  }

  return <IconComponent />;
};
