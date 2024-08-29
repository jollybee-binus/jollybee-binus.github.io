import React from 'react';
import './footer.css';
import jollybeelogo from '../../assets/jollybeelogo.png';

const Footer = () => {
    return (
      <div className='footer'>
        <div className="footer__left">
          <img src={jollybeelogo} alt="Jollybee Logo" />
          <span>© 2024 Jollybee. All rights reserved.</span>
        </div>

        <div className="footer__right">
          <i className="fa-brands fa-discord fa-lg"></i>
          <i className="fa-brands fa-instagram fa-lg"></i>
          <i className="fa-brands fa-linkedin fa-lg"></i>
        </div>
      </div>
    )
}

export default Footer