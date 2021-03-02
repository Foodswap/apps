// == Import npm
import React from 'react';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';
import LoginForm from '../../containers/LoginForm';

// == Composant
const App = () => (

  <div className="app">
    <img src={reactLogo} alt="react logo" />
    <LoginForm />
  </div>
);

// == Export
export default App;
