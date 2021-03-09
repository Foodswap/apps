// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

// == Import
import AppHeader from '../AppHeader';
import Menu from '../../containers/Menu';
import DescriptionHomepage from '../DescriptionHomepage';
import LoginForm from '../../containers/LoginForm';
import SignUpForm from '../../containers/SignUpForm';
import MyDishes from '../../containers/MyDishes';
import Footer from '../Footer';
import LastDishes from '../LastDishes';
import Faces from '../Faces';
import SearchForm from '../SearchForm';
// == Import
import './styles.css';
import dishes from '../../../dataDishes';

// == Composant
const App = () => (

  <div className="app">
    <AppHeader />
    <Menu />
    <Route exact path="/">
      <DescriptionHomepage />
      <SearchForm />
      <LastDishes dishes={dishes} />
      <LoginForm />
      <SignUpForm />
    </Route>
    <Route exact path="/v1/meals">
      <MyDishes />
    </Route>
    <Route exact path="/v1/Qui sommes nous">
      <Faces />
    </Route>
    <Footer />
  </div>
);

// == Export
export default App;
