import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

// import logo and icon
import logo from '../../assets/images/logo-fooswap.png';
import userLogo from '../../assets/images/user-connected.png';
import menuBurger from '../../assets/images/menuBurger/menuBurger.svg';
import closeMenuBurger from '../../assets/images/menuBurger/closeMenu.svg';

import './style.scss';

const Menu = ({
  isLogged,
  loginFormToggle,
  signUpFormToggle,
  userLogout,
  username,
  menuIsOpen,
  updateMenuBurgerStatus,
}) => (

  <nav className="menu">
    { isLogged && (
      <div className="menu-burger" onClick={() => updateMenuBurgerStatus()}>
        {!menuIsOpen && (
        <img className="menu-burger-open icon" src={menuBurger} alt="burger icon" />
        )}
        {menuIsOpen && (
        <img className="menu-burger-close icon" src={closeMenuBurger} alt="croix de fermeture" />
        )}
      </div>
    )}

    <div className="menu-logo">
      <Link className="appHeader-link" to="/">
        <img className={isLogged ? 'appHeader-logo' : 'appHeader-logo anonymous'} src={logo} alt="logo de FoodSwap" />
      </Link>
    </div>

    {!isLogged && (
    <nav className="menu-links-logout">
      <NavLink
        exact
        className="menu-link-logout no-border"
        to=""
        onClick={signUpFormToggle}
      >
        Inscription
      </NavLink>

      <NavLink exact className="menu-link-logout no-border" to="" onClick={loginFormToggle}>
        Connexion
      </NavLink>
    </nav>
    )}

    { isLogged && (
      <nav className="menu-links">
        <div className={menuIsOpen ? 'menu-content open' : 'menu-content'}>
          <NavLink exact className="menu-link" to="/" onClick={() => updateMenuBurgerStatus()}>
            Accueil
          </NavLink>

          <NavLink exact className="menu-link" to="/v1/mydishes" onClick={() => updateMenuBurgerStatus()}>
            Mes plats
          </NavLink>

          <NavLink exact className="menu-link" to="/v1/createdish" onClick={() => updateMenuBurgerStatus()}>
            Créer un plat
          </NavLink>

          <NavLink exact className="menu-link" to="/v1/exchange-tracking" onClick={() => updateMenuBurgerStatus()}>
            Suivi d'échange
          </NavLink>

          <NavLink exact className="menu-link" to="/v1/my-information" onClick={() => updateMenuBurgerStatus()}>
            Mes informations
          </NavLink>
          <button className="menu-logoutButton" type="button" onClick={() => userLogout() && updateMenuBurgerStatus()}> Se déconnecter </button>
        </div>

        <div className="menu-username">
          <img className="menu-userLogo" src={userLogo} alt="icon utilisateur connecté" />
          <p className="menu-textForUser">Bonjour {username}</p>
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
  menuIsOpen: PropTypes.bool.isRequired,
  updateMenuBurgerStatus: PropTypes.func.isRequired,
};

export default Menu;
