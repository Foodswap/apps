// Vendors
import React from 'react';
import { Route } from 'react-router-dom';

// Dumb components
import AppHeader from '../AppHeader';
import Footer from '../Footer';
import Faces from '../Faces';
import MyInformation from '../../containers/MyInformation';

// Container components
import Menu from '../../containers/Menu';
import DescriptionHomepage from '../DescriptionHomepage';
import LoginForm from '../../containers/LoginForm';
import SignUpForm from '../../containers/SignUpForm';
import MyDishes from '../../containers/MyDishes';
import DisplayADish from '../../containers/DisplayADish';
import LastDishes from '../../containers/LastDishes';
import SearchForm from '../../containers/SearchForm';

// Style
import './styles.css';

/**
 * App component
 * Application Layout
 */
const App = () => (
  <div className="app">
    <AppHeader />
    <Menu />
    <MyInformation />
    <Route exact path="/">
      <DescriptionHomepage />
      <SearchForm />
      <LastDishes />
      <LoginForm />
      <SignUpForm />
    </Route>

    <Route exact path="/v1/dish/:id" component={DisplayADish} />

    <Route exact path="/v1/meals">
      <MyDishes />
    </Route>

    <Route exact path="/v1/qui-sommes-nous">
      <Faces />
    </Route>

    <Footer />
  </div>
);

// == Export
export default App;
