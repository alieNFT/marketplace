import React from "react";
import { Link } from "react-router-dom";

export const NavLink = ({ link, active }) => {
  console.log(link);
  const linkActive = active
    ? "text-primary font-semibold"
    : "text-gray-300 hover:text-gray-300";
  return (
    <Link to={`${link.linkUrl}`}>
      <li
        className={`${linkActive} font-medium text-sm font-alien mr-4 cursor-pointer`}
      >
        {link.linkText}
      </li>
    </Link>
  );
};

export default NavLink;
