import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className='logo'>
              <img src="../images/logo.png" alt="logo" />
            </div>
            <p>Copy Right © Design By Hassan El_Shiat , All Rights Reserved</p>
            <div className="socials">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </div>
    </div>
  )
}

export default Footer