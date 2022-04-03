import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerStyle = {
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
    textAlign: "center",
    backgroundColor: "tomato",
    color: "white",
    padding: "0.5rem",
    fontSize: "1.2rem",
  };
  return (
    <div style={footerStyle}>Copyright &copy; {currentYear} News Patrika </div>
  );
};

export default Footer;
