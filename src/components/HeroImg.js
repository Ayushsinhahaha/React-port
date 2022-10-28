import './HeroImgStyles.css'
import IntroImg from '../assets/background.jpg'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="introimg"
          src={IntroImg}
          alt=""
          height="100%"
          width="100%"
        />
      </div>
      <div className="content">
        <p>HEY 🙋‍♂️ I AM AYUSH SINHA</p>
        <h1>Web Developer</h1>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
