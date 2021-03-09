// == Import npm
import React from 'react';

// == Import
import AppHeader from '../AppHeader';
import Menu from '../../containers/Menu';
import DescriptionHomepage from '../DescriptionHomepage';
import LoginForm from '../../containers/LoginForm';
import SignUpForm from '../../containers/SignUpForm';
import MyDishes from '../../containers/MyDishes';
// import DisplayADish from '../../containers/DisplayADish';
import Footer from '../Footer';

// == Import
import './styles.css';

// import Data from '../../../data-userDishes';
// == Composant
const App = () => (

  <div className="app">
    <AppHeader />
    <Menu />
    <DescriptionHomepage />
    <LoginForm />
    <SignUpForm />
    <MyDishes />
    {/* <DisplayADish />  a relier sur une route */}
    <Footer />
  </div>
);

// == Export
export default App;
