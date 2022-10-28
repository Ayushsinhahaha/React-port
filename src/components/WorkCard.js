import './WorkCardStyles.css'
// import Web from '../assets/Web.avif'
// import WorkCardData from './WorkCardData'

import React from 'react'
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={props.imgsrc} alt="" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              <NavLink to="url.com" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard