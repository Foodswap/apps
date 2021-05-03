import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import instagramLogo from '../../assets/logo-social/instagram-white-brands.svg';
import facebookLogo from '../../assets/logo-social/facebook-white-square-brands.svg';
import twitterLogo from '../../assets/logo-social/twitter-white-square-brands.svg';
import logoFoodSwap from '../../assets/images/logo-fooswap.png';

import './style.scss';

const year = new Date().getFullYear();

const Footer = ({ dishes, getLastDishes }) => {
  useEffect(() => getLastDishes(), []);

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logoFoodSwap} className="footer-logo-FS" alt="logo foodSwap" />
      </div>

      <div className="footer-legal">
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

      <div className="footer-lastDishes">
        <h2>Les 10 derniers plats ajoutés</h2>

        <div className="footer-lastDishes-list">
          { dishes && (
            dishes.map((dish) => {
              const dishLinkUrl = `/v1/dish/${dish.id}`;

              return (
                <div className="footer-last-dishes" key={dish.id}>
                  <Link to={dishLinkUrl} className="footer-last-dishInfos">
                    <h3 className="last-dishes-card-name">{dish.name}</h3>
                  </Link>
                  <p className="footer-last-dishes-city">
                    , à {dish.city.name}
                  </p>
                </div>
              );
            })
          )}
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
};

Footer.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      city: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    }),
  ),
  getLastDishes: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  dishes: null,
};

export default Footer;
