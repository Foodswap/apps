import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Menu = ({
  isLogged, loginFormToggle,
}) => (
  <nav className="menu">

    {!isLogged && (
    <nav>
      <NavLink
        className="menu-link"
        to=""
        onClick={() => {
          console.log('inscription open modale');
        }}
      >
        Inscription
      </NavLink>

      <NavLink className="menu-link" to="" onClick={loginFormToggle}>
        Connexion
      </NavLink>
    </nav>
    )}

    { isLogged && (
      <nav>
        <NavLink className="menu-link" to="/">
          Accueil
        </NavLink>

        <NavLink className="menu-link" to="/mesPlats">
          Mes plats
        </NavLink>

        <NavLink className="menu-link" to="/creerFicheDePlat">
          Créer une nouvelle fiche de plat
        </NavLink>

        <NavLink className="menu-link" to="/suiviEchange">
          Suivi d'échange
        </NavLink>

        <NavLink className="menu-link" to="/mesInformation">
          Mes informations
        </NavLink>
      </nav>
    )}
  </nav>
);

Menu.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  // signUpFormToggle: PropTypes.func.isRequired,
  loginFormToggle: PropTypes.func.isRequired,
};

export default Menu;
