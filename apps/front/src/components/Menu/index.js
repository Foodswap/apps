import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo-fooswap.png';
import userLogo from '../../assets/images/user-connected.png';

import './style.scss';

const Menu = ({
  isLogged, loginFormToggle, signUpFormToggle, userLogout, username,
}) => (

  <nav className="menu">
    <div className="menu-logo">
      <a className="appHeader-link" href="/">
        <img className="appHeader-logo" src={logo} alt="logo de FoodSwap" />
      </a>
    </div>

    {!isLogged && (
    <nav className="menu-links-logout">
      <NavLink
        exact
        className="menu-link"
        to=""
        onClick={signUpFormToggle}
      >
        Inscription
      </NavLink>

      <NavLink exact className="menu-link" to="" onClick={loginFormToggle}>
        Connexion
      </NavLink>
    </nav>
    )}

    { isLogged && (
      <nav className="menu-links">
        <div className="menu-content">
          <NavLink exact className="menu-link" to="/">
            Accueil
          </NavLink>

          <NavLink exact className="menu-link" to="/v1/mydishes">
            Mes plats
          </NavLink>

          <NavLink exact className="menu-link" to="/v1/createdish">
            Créer un plat
          </NavLink>

          <NavLink exact className="menu-link" to="/v1/exchange-tracking">
            Suivi d'échange
          </NavLink>

          <NavLink exact className="menu-link" to="/v1/my-information">
            Mes informations
          </NavLink>
        </div>

        <div className="menu-username">
          <img className="menu-userLogo" src={userLogo} alt="icon utilisateur connecté" />
          <p className="menu-textForUser">Bonjour, {username}</p>
          <button className="logout-button" type="button" onClick={userLogout}> Se déconnecter </button>
        </div>
      </nav>
    )}
  </nav>
);

Menu.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  loginFormToggle: PropTypes.func.isRequired,
  signUpFormToggle: PropTypes.func.isRequired,
  userLogout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default Menu;
