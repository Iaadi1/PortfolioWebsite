import React from "react";
import "../Experience/ExperienceStyles.css";
import briefcaseIcon from "..//..//..//assets/iconBriefcase.svg";
import educationIcon from "..//..//..//assets/iconEducation.svg";
import rectangleIcon from "..//..//..//assets/Rectangle.svg";
import infosysImage from "..//..//..//assets/InfosysImage.png";
import SgbauImage from '..//..//..//assets/SGBAU.jpeg';
const Experience = () => {
  const skillTags = [
    "ReactJs",
    "React Native",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "UI Developement",
    "RWD",
    "Jira",
    
  ];

  return (
    <div className="exp-main-container">
      <h2>Experience</h2>
      <div className="exp-content-container">
        <div className="exp-education-timeline">
          <div className="exp-briefcase-img-div">
            <img className="exp-briefcase-img" src={briefcaseIcon} />
          </div>
          <div className="exp-reactangle-img-div">
            <img className="exp-reactangle-img" src={rectangleIcon} />
          </div>
          <div className="exp-education-img-div">
            <img className="exp-education-img" src={educationIcon} />
          </div>
        </div>
        <div className="exp-cards-container">
          <div className="exp-card">
            <div className="exp-card-upperpart">
              <div className="exp-upperpart-text">
                <p className="exp-cmpname-text">Infosys Limited</p>
                <p className="exp-position-text">System Engineer (ReactJs)</p>
                <p className="exp-duration-text">february 2022 - present</p>
              </div>
              <div>
                <img
                  className="ex-cmpimage"
                  src={infosysImage}
                  alt="Company Image"
                />
              </div>
            </div>
            <div>
              <hr></hr>
            </div>
            <div>
              <p className="exp-skills-title">Skills Which I use Here</p>
              <div className="exp-skillchip-container">
                {skillTags.map((tags)=>(<div className="exp-skillchip">
                  <p className="exp-skills-text">{tags}</p>
                </div>))}
              </div>
            </div>
          </div>
          <div className="exp-card">
            <div className="exp-card-upperpart">
              <div className="exp-upperpart-text">
                <p className="exp-cmpname-text">Amravati University</p>
                <p className="exp-position-text">Bachelor of Engineering (BE)</p>
                <p className="exp-duration-text">2015 -2019</p>
              </div>
              <div>
                <img
                  className="ex-cmpimage"
                  src={SgbauImage}
                  alt="Company Image"
                />
              </div>
            </div>
            <div>
              <hr></hr>
            </div>
            <div>
              <p className="exp-edu-title">Specialization : Mechanical Engineering</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
