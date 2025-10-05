import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className='footer'>
        <div className="footer__left">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/assets/jollybeelogo.png"} alt="Jollybee Logo" />
          </Link>
          <span>© 2024 Jollybee. All rights reserved.</span>
        </div>

        <div className="footer__right">
          <a href="https://discord.gg/fSaFuT3PaA"><i className="fa-brands fa-discord social-icon"></i></a>
          <a href="https://www.instagram.com/binusjollybee"><i className="fa-brands fa-instagram social-icon"></i></a>
          <a href="https://www.linkedin.com/company/jollybee-binus/"><i className="fa-brands fa-linkedin  social-icon"></i></a>
        </div>
      </div>
    )
}

export default Footer