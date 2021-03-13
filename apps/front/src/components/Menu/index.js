import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Menu = ({
  isLogged, loginFormToggle, signUpFormToggle, userLogout,
}) => (
  <nav className="menu">

    {!isLogged && (
    <nav>
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
      <nav>
        <NavLink exact className="menu-link" to="/">
          Accueil
        </NavLink>

        <NavLink exact className="menu-link" to="/v1/mydishes">
          Mes plats
        </NavLink>

        <NavLink exact className="menu-link" to="/v1/createdish">
          Créer une nouvelle fiche de plat
        </NavLink>

        <NavLink exact className="menu-link" to="/v1/exchange-tracking">
          Suivi d'échange
        </NavLink>

        <NavLink exact className="menu-link" to="/v1/my-information">
          Mes informations
        </NavLink>
        <button className="logout-button" type="button" onClick={userLogout}> Se déconnecter </button>
      </nav>
    )}
  </nav>
);

Menu.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  loginFormToggle: PropTypes.func.isRequired,
  signUpFormToggle: PropTypes.func.isRequired,
  userLogout: PropTypes.func.isRequired,
};

export default Menu;
