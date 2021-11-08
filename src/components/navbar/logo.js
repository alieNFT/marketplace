import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export const Logo = () => {
  return (
    <Link to={"/"}>
      <div>
        <img src={logo} alt="" className="w-32 h-auto" />
      </div>
    </Link>
  );
};

export default Logo;
