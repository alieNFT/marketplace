import React from "react";
import { useHistory, useLocation, useParams } from "react-router";
import NavLink from "./navLink";

export const NavLinks = () => {
  const activeLink = useLocation();
  const links = [
    { linkText: "Home", linkUrl: "" },
    { linkText: "Discover", linkUrl: "discover" },
  ];
  return (
    <ul className="hidden sm:flex items-center">
      {links.map((link) => {
        var isLinkActive = activeLink.pathname.includes(link.linkUrl);
        return <NavLink link={link} active={isLinkActive} />;
      })}
    </ul>
  );
};

export default NavLinks;
