import React from "react";
import "../Header/HeaderStyles.css";
import headerAnimoji from "..//..//..//assets/headerAnimoji.svg";
import locationIcon from "..//..//..//assets/locationIcon.svg";
import githubIcon from "..//..//..//assets/gtihubIcon.svg";
import linkedinIcon from "..//..//..//assets/linkedinIcon.svg";
import downloadIcon from "..//..//../assets/downloadIcon.svg";
const Header = () => {
  const openGithub = () => {
    window.open("https://github.com/Iaadi1", "_blank");
  };
  const openLinkedin= () => {
    window.open("https://linkedin.com/in/adityadeshpande1", "_blank");
  };

  return (
    <div className="header-main-container">
      <div className="header-profile-container">
        <h1 className="intro-text">Hi, I'm Aditya</h1>
        <p className="header-profile-para">
          Results-driven Front End Developer with 2 years of experience in HTML,
          CSS, JavaScript, React, React Native, and Figma. Proven expertise in
          creating responsive, visually appealing web applications.
          Collaborative team player with a passion for staying current in
          technology trends. Eager to contribute skills to a dynamic and
          innovative work environment.
        </p>
        <div className="header-location-tag">
          <img
            className="header-location-icon"
            src={locationIcon}
            alt="location"
          />
          <h4 className="header-location-text">Pune, India</h4>
        </div>
        <div className="header-button-group">
          <button onClick={openGithub} className="header-githubLink-btn">
            <img src={githubIcon} />
          </button>
          <button onClick={openLinkedin} className="header-linkedinLink-btn">
            <img src={linkedinIcon} />
          </button>
          <button className="header-download-btn">
            <img src={downloadIcon} />
          </button>
          <button className="header-proj-btn">Explore Projects</button>
        </div>
      </div>
      <div className="header-image-container">
        <img
          src={headerAnimoji}
          className="header-animoji-image"
          alt="Animoji"
        />
      </div>
    </div>
  );
};

export default Header;
