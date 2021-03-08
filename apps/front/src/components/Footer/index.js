import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Footer = () => (

  <nav className="footer">
    <NavLink className="footer-link" to="/v1/Qui sommes nous">
      Qui sommes-nous ?
    </NavLink>
    <a className="footer-mention" href="/v1/Mentions legales">
      Mentions légales
    </a>
  </nav>

);

export default Footer;
