// == Import npm
import React from 'react';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';
import LoginForm from '../LoginForm';

// == Composant
const App = () => {
  const handleLogin = () => {
    console.log('handleLogin');
  };
  const handleInputChange = (evt) => {
    const newValue = evt.target.value;
    console.log(`handleInputChange + value :${newValue}`);
  };
  return (

    <div className="app">
      <img src={reactLogo} alt="react logo" />
      <h1>Composant : App</h1>
      <LoginForm handleLogin={handleLogin} email="test@gmail.fr" password="pass" handleInputChange={handleInputChange} />
    </div>
  );
};

// == Export
export default App;
