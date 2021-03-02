import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Footer = () => (

  <div className="footer">
    <a className="footer-link" href="/Qui sommes-nous?">Qui sommes-nous ?</a>
    <a className="footer-mention" href="/Mentions legales">Mentions légales</a>
  </div>

);

export default Footer;
