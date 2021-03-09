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
// import DisplayADish from '../../containers/DisplayADish';
import Footer from '../Footer';
import LastDishes from '../LastDishes';
import Faces from '../Faces';
import SearchForm from '../../containers/SearchForm';

// == Import
import './styles.css';
import dishes from '../../../dataDishes';

// import Data from '../../../data-userDishes';
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

    {/* <DisplayADish />  a relier sur une route */}
    <Footer />
  </div>
);

// == Export
export default App;
