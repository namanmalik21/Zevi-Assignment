import React from "react";
import zevi_logo from "../assets/zevi-logo.svg";
import "../Styles/HomeHeader.scss";
const HomeHeader = () => {
  return (
    <div className="home_header">
      <img src={zevi_logo} alt="" />
    </div>
  );
};

export default HomeHeader;
