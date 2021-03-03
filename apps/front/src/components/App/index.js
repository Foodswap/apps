// == Import npm
import React from 'react';

// == Import
import AppHeader from '../AppHeader';
import Menu from '../../containers/Menu';
import LoginForm from '../../containers/LoginForm';

// == Import
import './styles.css';
import LoginForm from '../../containers/LoginForm';
import SignUpForm from '../../containers/SignUpForm';
import Footer from '../Footer';

// == Composant
const App = () => (

  <div className="app">
    <AppHeader />
    <Menu />
    <LoginForm />
    <SignUpForm />
    <Footer />
  </div>
);

// == Export
export default App;
