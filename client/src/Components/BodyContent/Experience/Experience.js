import React from 'react'
import infosysImage from '..//..//..//assets/InfosysImage.svg'
import '../Experience/ExperienceStyles.css'
const Experience = () => {
  return (
    <div className='exp-main-container'>
      <div className='exp-content-div'>
        <div className='exp-image-container'>
          <img src={infosysImage} alt='company image'/>
        </div>
        <div className='exp-right-content'>
          <div className='exp-roletitle-div'>
            <p>System Engineer (React)</p>
            <p>Feb 2022 to Present</p>
          </div>
          <div className='exp-skills-chips-container'>
            <div className='exp-skill-chip'>
              <p>ReactJs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;