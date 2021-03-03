import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Menu = ({ isLogged }) => (
  <nav className="menu">

    {!isLogged && (
    <nav>
      <NavLink className="menu-link" to="/inscription">
        Inscription
      </NavLink>

      <NavLink className="menu-link" to="/connexion">
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
};

export default Menu;
