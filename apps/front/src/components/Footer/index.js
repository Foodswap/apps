import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <span>
        © 2021 Copyright
      </span>
    </div>

    <div className="footer-content">
      <NavLink
        className="footer-link"
        to="/v1/Qui-sommes-nous"
      >
        <span>
          Qui sommes-nous ?
        </span>
      </NavLink>
    </div>

    <div className="footer-content">
      <NavLink
        className="footer-mention"
        to="/v1/privacy-policy"
      >
        <span>
          Mentions légales
        </span>
      </NavLink>
    </div>

    <div className="footer-content">
      <a href="#" className="footer-haut-de-page">Haut de page</a>
    </div>
  </div>

);

export default Footer;
