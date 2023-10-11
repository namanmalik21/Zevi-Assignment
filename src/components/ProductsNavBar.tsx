import React from "react";
import "../Styles/ProductsNavBar.scss";
import zevi_logo from "../assets/zevi-logo.svg";
import { RiSearchLine } from "react-icons/ri";

const ProductsNavBar = () => {
  return (
    <div className="products_navbar">
      <div></div>
      <form className="input_container">
        <input type="text" className="home_input" placeholder="Search" />
        <button className="search_icon_container">
          <RiSearchLine />
        </button>
      </form>
      <img src={zevi_logo} alt="logo" />
    </div>
  );
};

export default ProductsNavBar;
