import React from "react";
import * as Fa from "react-icons/fa";
// import * as Md from "react-icons/md";
import * as Fa6 from "react-icons/fa6";
// import * as Bs from "react-icons/bs";
// import * as Gi from "react-icons/gi";
// import * as Bi from "react-icons/bi";
// import * as Tb from "react-icons/tb";
// import * as Pi from "react-icons/pi";
// import * as Io from "react-icons/io";
// import * as Io5 from "react-icons/io5";
// import * as Is from "react-icons/si";

const Icons = {
  ...Fa,
  // ...Md,
  ...Fa6,
  // ...Bs,
  // ...Gi,
  // ...Bi,
  // ...Tb,
  // ...Pi,
  // ...Io,
  // ...Io5,
  // ...Is,
};

/* Your icon name from database data can now be passed as prop */
const DynamicFaIcon = ({ name }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    // Return a default one
    return <Icons.FaDev />;
  }

  return <IconComponent />;
};

export default DynamicFaIcon;
