import React from 'react';
import { NavLink } from 'react-router-dom';
import instagramLogo from '../../assets/logo-social/instagram-white-brands.svg';
import facebookLogo from '../../assets/logo-social/facebook-white-square-brands.svg';
import twitterLogo from '../../assets/logo-social/twitter-white-square-brands.svg';
import logoFoodSwap from '../../assets/images/logo-fooswap.png';
import './style.scss';

const year = new Date().getFullYear();

const Footer = () => (
  <div className="footer">
    <div className="footer-logo">
      <img src={logoFoodSwap} className="footer-logo-FS" alt="logo foodSwap" />
    </div>

    <div>
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
    </div>

    <div className="footer-logo-social">
      <div>
        <img src={instagramLogo} className="logo-social-instagram" alt="logo instagram" />
        <p>instagram</p>
      </div>
      <div>
        <img src={facebookLogo} className="logo-social-facebook-square" alt="logo facebook" />
        <p>facebook</p>
      </div>
      <div>
        <img src={twitterLogo} className="logo-social-twitter-square" alt="logo twitter" />
        <p>twitter</p>
      </div>
    </div>

    <div className="footer-content">
      <a href="#" className="footer-haut-de-page">Haut de page</a>
    </div>

    <div className="footer-content">
      <span>
        © {year} - FoodSwap
      </span>
    </div>
  </div>

);

export default Footer;
