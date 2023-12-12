import React, { useState } from "react";
import navbarLogo from "..//..//assets/navLogo.svg";
import menuIcon from "..//..//assets/menu_button.svg";
import downloadIcon from '..//..//assets/downloadIcon.svg';
import "../Navbar/Navbar.css";

const Navbar = () => {
  const navbarLinks = ["Home", "About Me", "Projects"];
  const [breadMenuOpen, setBreadMenuOpen] = useState(false);

  const toggleBreadMenu = () => {
    setBreadMenuOpen(!breadMenuOpen);
  };

  return (
    <div className={`navbar-main-container ${breadMenuOpen ? "open" : ""}`}>
      <div className="navbar-image-container">
        <img src={navbarLogo} className="navbar-image" alt="navbar logo" />
      </div>
      <div className={`navbar-links ${breadMenuOpen ? "open" : ""}`}>
        {navbarLinks.map((links) => (
          <a href="#">{links}</a>
        ))}
        <button className="navbar-btn">
          <img className="download-img" src={downloadIcon} alt="download" />
          <h6 className="navbar-button-text">Resume</h6>
        </button>
      </div>
      <div className="navbar-breadMenu-btn" onClick={toggleBreadMenu}>
        <img src={menuIcon} alt="Menu Icon" />
      </div>
    </div>
  );
};

export default Navbar;
