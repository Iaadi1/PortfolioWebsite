import React from "react";
import "../Experience/ExperienceStyles.css";
import briefcaseIcon from "..//..//..//assets/iconBriefcase.svg";
import educationIcon from "..//..//..//assets/iconEducation.svg";
import rectangleIcon from "..//..//..//assets/Rectangle.svg";
import infosysImage from '..//..//..//assets/InfosysImage.png';
const Experience = () => {
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
            <div style={{display:"flex", justifyContent:"space-between", flexDirection:"row"}}>
              <div>
                <p>Infosys Limited</p>
                <p>System Engineer (ReactJs)</p>
                <p>february 2022 - present</p>
              </div>
              <div>
                <img src={infosysImage} alt="Company Image"/>
              </div>
            </div>
            <div>
              <hr></hr>
            </div>
            <div>
              <p>Skills Which I use Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
