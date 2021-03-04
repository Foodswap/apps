// == Import npm
import React from 'react';

// == Import
import AppHeader from '../AppHeader';
import Menu from '../../containers/Menu';
import DescriptionHomepage from '../DescriptionHomepage';
import LoginForm from '../../containers/LoginForm';
import SignUpForm from '../../containers/SignUpForm';
import MyDishes from '../../containers/MyDishes';
import Footer from '../Footer';

// == Import
import './styles.css';

// == Composant
const App = () => (

  <div className="app">
    <AppHeader />
    <Menu />
    <DescriptionHomepage />
    <LoginForm />
    <SignUpForm />
    <MyDishes />
    <Footer />
  </div>
);

// == Export
export default App;
