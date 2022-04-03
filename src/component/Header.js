import React from "react";
import "./Header.css";
import image from "../images/Logo.jpg";

function Header({ updateFilter }) {
  return (
    <div className="header">
      <img className="Logo" src={image} />
      <input className="input" id="search"></input>
      <button className="btn" onClick={updateFilter}>
        Search
      </button>
    </div>
  );
}

export default Header;
