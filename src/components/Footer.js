import './FooterStyles.css'
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>Kochi,Kerala,India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              +91-8434759272
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              iamayush02@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the Developer</h4>
          <p>
            This is me Ayush Sinha.I am a Web Developer.I enjoy learning and
            creating new Projects.
          </p>
          <div className="social">
            <FaGithub
              size={20}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaLinkedin
              size={20}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
