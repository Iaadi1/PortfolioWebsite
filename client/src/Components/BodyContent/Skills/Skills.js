import React from "react";
import reactLogo from "..//.//..//..//assets/iconReact.svg";
import iconCSS from "..//..//..//assets/iconCSS.svg";
import iconFigma from "..//..//..//assets/iconFigma.svg";
import iconHTML from "..//..//..//assets/iconHTML.svg";
import iconJira from "..//..//..//assets/iconJira.svg";
import iconSass from "..//..//..//assets/iconSass.svg";
import iconGit from "..//..//..//assets/iconGit.svg";
import iconJavascript from "..//..//..//assets/iconJavascript.svg";
import iconTypescript from "..//..//..//assets/iconTypescript.svg";
import "..//Skills/SkillsStyles.css";
const Skills = () => {
  return (
    <div className="skill-main-container">
      <div className="skill-title-container">
        <h3 className="skill-title">Skills</h3>
        <p className="skill-para">The skills, tools and technologies I am really good at:</p>
      </div>
      <div className="skill-grid-container">
        <div className="skill-grid-item">
          <img src={reactLogo} alt="react" />
          <p>React</p>
        </div>
        <div className="skill-grid-item">
          <img src={iconJavascript} alt="react" />
          <p>Javascript</p>
        </div>
        <div className="skill-grid-item">
          <img src={iconTypescript} alt="react" />
          <p>Typescript</p>
        </div>
        <div className="skill-grid-item">
          <img src={iconHTML} alt="react" />
          <p>HTML</p>
        </div>
        <div className="skill-grid-item">
          <img src={iconCSS} alt="react" />
          <p>CSS</p>
        </div>
        <div className="skill-grid-item">
          <img src={iconSass} alt="react" />
          <p>Sass</p>
        </div>
        <div className="skill-grid-item">
          <img src={iconFigma} alt="react" />
          <p>Figma</p>
        </div>
        <div className="skill-grid-item">
          <img src={iconGit} alt="react" />
          <p>Git</p>
        </div>
        <div className="skill-grid-item">
          <img src={iconJira} alt="react" />
          <p>Jira</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
