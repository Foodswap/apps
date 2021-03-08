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
import LastDishes from '../LastDishes';

// == Import
import './styles.css';
import dishes from '../../../dataDishes';

// == Composant
const App = () => (

  <div className="app">
    <AppHeader />
    <Menu />
    <DescriptionHomepage />
    <LastDishes dishes={dishes} />
    <LoginForm />
    <SignUpForm />
    <MyDishes />
    <Footer />
  </div>
);

// == Export
export default App;
