import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import instagramLogo from '../../assets/logo-social/instagram-white-brands.svg';
import facebookLogo from '../../assets/logo-social/facebook-white-square-brands.svg';
import twitterLogo from '../../assets/logo-social/twitter-white-square-brands.svg';
import logoFoodSwap from '../../assets/images/logo-fooswap.png';

import arrowUp from '../../assets/arrow-up-blanc.svg';

import './style.scss';

const year = new Date().getFullYear();

const Footer = ({ dishes, getLastDishes }) => {
  useEffect(() => getLastDishes(), []);

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logoFoodSwap} className="footer-logo-FS" alt="logo foodSwap" />
      </div>

      <div className="footer-logo-social">
        <a className="footer-logo-social-content insta" href="#">
          <img src={instagramLogo} className="footer-logo-social-instagram" alt="logo instagram" />
          <p className="footer-logo-social-text">instagram</p>
        </a>
        <a className="footer-logo-social-content fb" href="#">
          <img src={facebookLogo} className="footer-logo-social-facebook-square" alt="logo facebook" />
          <p className="footer-logo-social-text">facebook</p>
        </a>
        <a className="footer-logo-social-content tw">
          <img src={twitterLogo} className="footer-logo-social-twitter-square" alt="logo twitter" />
          <p className="footer-logo-social-text">twitter</p>
        </a>
      </div>

      <div className="footer-city-entreesLink">
        <h2 className="footer-city-entreesLink-title">Les dernières entrées</h2>
        <div className="footer-city-entreesLink-list">

          <a className="footer-city-entreesLink-tenLastDishes" href="#">les 10 derniers entrées à Paris</a>
          <a className="footer-city-entreesLink-tenLastDishes" href="#">les 10 derniers entrées à Rouen</a>
          <a className="footer-city-entreesLink-tenLastDishes" href="#">les 10 derniers entrées à Lille</a>
          <a className="footer-city-entreesLink-tenLastDishes" href="#">les 10 derniers entrées à Rennes</a>
          <a className="footer-city-entreesLink-tenLastDishes" href="#">les 10 derniers entrées à Nantes</a>
          <a className="footer-city-entreesLink-tenLastDishes" href="#">les 10 derniers entrées à Angers</a>
          <a className="footer-city-entreesLink-tenLastDishes" href="#">les 10 derniers entrées à Tours</a>
          <a className="footer-city-entreesLink-tenLastDishes" href="#">les 10 derniers entrées à Orléans</a>
          <a className="footer-city-entreesLink-tenLastDishes" href="#">les 10 derniers entrées à Strasbourg</a>
          <a className="footer-city-entreesLink-tenLastDishes" href="#">les 10 derniers entrées à Dijon</a>
        </div>
      </div>

      <div className="footer-city-dishesLink">
        <h2 className="footer-city-dishesLink-title">Les dernières plats</h2>

        <div className="footer-city-dishesLink-list">
          <a className="footer-city-dishesLink-tenLastDishes" href="#">les 10 derniers plats à Clermont-Ferrand</a>
          <a className="footer-city-dishesLink-tenLastDishes" href="#">les 10 derniers plats à Lyon</a>
          <a className="footer-city-dishesLink-tenLastDishes" href="#">les 10 derniers plats à Bordeaux</a>
          <a className="footer-city-dishesLink-tenLastDishes" href="#">les 10 derniers plats à Grenoble</a>
          <a className="footer-city-dishesLink-tenLastDishes" href="#">les 10 derniers plats à Nice</a>
          <a className="footer-city-dishesLink-tenLastDishes" href="#">les 10 derniers plats à Toulon</a>
          <a className="footer-city-dishesLink-tenLastDishes" href="#">les 10 derniers plats à Marseille</a>
          <a className="footer-city-dishesLink-tenLastDishes" href="#">les 10 derniers plats à Monpellier</a>
          <a className="footer-city-dishesLink-tenLastDishes" href="#">les 10 derniers plats à Toulouse</a>
        </div>
      </div>

      <div className="footer-city-dessertLink">
        <h2 className="footer-city-dessertLink-title">Les dernières dessert</h2>

        <div className="footer-city-dessertLink-list">
          <a className="footer-city-dessertLink-tenLastDishes" href="#">les 10 derniers desserts à Paris</a>
          <a className="footer-city-dessertLink-tenLastDishes" href="#">les 10 derniers desserts à Rennes</a>
          <a className="footer-city-dessertLink-tenLastDishes" href="#">les 10 derniers desserts à Lyon</a>
          <a className="footer-city-dessertLink-tenLastDishes" href="#">les 10 derniers desserts à Bordeaux</a>
          <a className="footer-city-dessertLink-tenLastDishes" href="#">les 10 derniers desserts à Nice</a>
          <a className="footer-city-dessertLink-tenLastDishes" href="#">les 10 derniers desserts à Toulon</a>
          <a className="footer-city-dessertLink-tenLastDishes" href="#">les 10 derniers desserts à Marseille</a>
          <a className="footer-city-dessertLink-tenLastDishes" href="#">les 10 derniers desserts à Monpellier</a>
          <a className="footer-city-dessertLink-tenLastDishes" href="#">les 10 derniers desserts à Toulouse</a>
        </div>
      </div>

      <div className="footer-lastDishes">
        <h2 className="footer-lastDishes-title">Les 10 derniers plats ajoutés</h2>
        <div className="footer-lastDishes-list">
          { dishes && (
            dishes.map((dish) => {
              const dishLinkUrl = `/v1/dish/${dish.id}`;

              return (
                <div className="footer-lastDishes-dish" key={dish.id}>
                  <Link to={dishLinkUrl} className="footer-lastDishes-dishInfos">
                    <h3 className="footer-lastDishes-name">{dish.name}</h3>
                    <p className="footer-lastDishes-city">
                      , à {dish.city.name}
                    </p>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="footer-legal">
        <div className="footer-content">
          <NavLink
            className="footer-link"
            to="/v1/Qui-sommes-nous"
          >
            <span className="footer-text">
              Qui sommes-nous ?
            </span>
          </NavLink>
        </div>

        <div className="footer-content">
          <NavLink
            className="footer-mention"
            to="/v1/privacy-policy"
          >
            <span className="footer-text">
              Mentions légales
            </span>
          </NavLink>
        </div>
      </div>

      <div className="footer-nav">
        <div className="footer-content footer-hautPage">
          <a href="#" className="footer-haut-de-page">
            <p className="footer-up-page">Haut de page</p>
            <p className="footer-arrow-up">^</p>
          </a>
        </div>

        <div className="footer-content">
          <span className="footer-text">
            © {year} - FoodSwap
          </span>
        </div>
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
        name: PropTypes.string,
      }),
    }),
  ),
  getLastDishes: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  dishes: null,
};

export default Footer;
