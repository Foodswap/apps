import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import logo from '../../assets/images/logo-fooswap.png';

const AppHeader = () => (
  <header className="appHeader">
    <Link className="appHeader-link" to="/">
      <img className="appHeader-logo" src={logo} alt="logo de FoodSwap" />
    </Link>
  </header>
);

export default AppHeader;
