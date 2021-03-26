import React from "react";
import "./Header.css";
import logo from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="dog logo" />
      <h4>Breed Finder Gallery</h4>
    </div>
  );
};

export default Header;
