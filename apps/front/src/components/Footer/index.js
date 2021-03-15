import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Footer = () => (

  <nav className="footer">
    <NavLink className="footer-link" to="/v1/Qui-sommes-nous">
      Qui sommes-nous ?
    </NavLink>
    <NavLink className="footer-mention" to="/v1/privacy-policy">
      Mentions légales
    </NavLink>
  </nav>

);

export default Footer;
