import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const year = new Date().getFullYear();

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <span>
        © {year} - FoodSwap
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
      <NavLink
        className="footer-mention"
        to="/v1/conditions-generales-utilisation"
      >
        <span>
          Conditions générales d'utilisation
        </span>
      </NavLink>
    </div>

    <div className="footer-content">
      <a href="#" className="footer-haut-de-page">Haut de page</a>
    </div>
  </div>

);

export default Footer;
