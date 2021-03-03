// == Import npm
import React from 'react';

// == Import
import AppHeader from '../AppHeader';
import Menu from '../../containers/Menu';
import LoginForm from '../../containers/LoginForm';

import './styles.css';

// == Composant
const App = () => (

  <div className="app">
    <AppHeader />
    <Menu />
    <LoginForm />
  </div>
);

// == Export
export default App;
