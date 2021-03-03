import React from 'react';
import './style.scss';

import logo from '../../assets/images/logo-fooswap.png';

const AppHeader = () => (
  <header className="appHeader">
    <a className="appHeader-link" href="/">
      <img className="appHeader-logo" src={logo} alt="logo de FoodSwap" />
    </a>
  </header>
);

export default AppHeader;
