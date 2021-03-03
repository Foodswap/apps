// == Import npm
import React from 'react';

import AppHeader from '../AppHeader';

// == Import
import './styles.css';
import LoginForm from '../../containers/LoginForm';
import SignUp from '../SignUp';
import Footer from '../Footer';

// == Composant
const App = () => (

  <div className="app">
    <LoginForm />
    <SignUp />
    <Footer />
  </div>
);

// == Export
export default App;
