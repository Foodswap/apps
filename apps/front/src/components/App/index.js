// Vendors
import React from 'react';
import { Route } from 'react-router-dom';

// Dumb components
import AppHeader from '../AppHeader';
import Footer from '../Footer';
import Faces from '../Faces';
import Menu from '../../containers/Menu';
import DescriptionHomepage from '../DescriptionHomepage';

// Container components
import LoginForm from '../../containers/LoginForm';
import SignUpForm from '../../containers/SignUpForm';
import MyDishes from '../../containers/MyDishes';
import DisplayADish from '../../containers/DisplayADish';
import LastDishes from '../../containers/LastDishes';
import SearchForm from '../../containers/SearchForm';
import DishesForm from '../../containers/DishesForm';

// Style
import './styles.css';
import dishes from '../../../dataDishes';
import Results from '../Results';

/**
 * App component
 * Application Layout
 */
const App = () => (
  <div className="app">
    <AppHeader />
    <Menu />

    <Route exact path="/">
      <DescriptionHomepage />
      <SearchForm />
      <LastDishes />
      <LoginForm />
      <SignUpForm />
    </Route>

    <Route exact path="/v1/dish/:id" component={DisplayADish} />

    <Route exact path="/results">
      <Results dishes={dishes} />
    </Route>
    <Route exact path="/v1/meals">
      <MyDishes />
    </Route>
    <Route exact path="/v1/meal/:id">
      <DishesForm />
    </Route>
    <Route exact path="/v1/Qui sommes nous">
      <Faces />
    </Route>

    <Footer />
  </div>
);

// == Export
export default App;
