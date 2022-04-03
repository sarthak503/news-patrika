import React from "react";
import "./Header.css";
import image from "../images/Logo.jpg";

function Header({ updateFilter }) {
  return (
    <div className="header">
      <div>
        <img className="Logo" src={image} />
      </div>
      <div className="search-bar">
        <input className="input" id="search"></input>
        <button className="btn" onClick={updateFilter}>
          Filter
        </button>
      </div>
    </div>
  );
}

export default Header;
