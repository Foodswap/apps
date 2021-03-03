// == Import npm
import React from 'react';

import AppHeader from '../AppHeader';

// == Import
import './styles.css';
import LoginForm from '../../containers/LoginForm';
import SignUpForm from '../../containers/SignUpForm';
import Footer from '../Footer';

// == Composant
const App = () => (

  <div className="app">
    <LoginForm />
    <SignUpForm />
    <Footer />
  </div>
);

// == Export
export default App;
