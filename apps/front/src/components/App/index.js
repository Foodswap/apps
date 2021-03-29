// Vendors
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

// Dumb components
import AppHeader from '../AppHeader';
import Footer from '../Footer';
import Faces from '../Faces';
import PrivacyPolicy from '../PrivacyPolicy';
// import Results from '../Results';
import Error from '../Error';
import Description from '../Description';

// Container components
import Menu from '../../containers/Menu';
import Exchangetracking from '../../containers/ExchangeTracking';

// Container components
import DescriptionHomepage from '../DescriptionHomepage';
import LoginForm from '../../containers/LoginForm';
import SignUpForm from '../../containers/SignUpForm';
import MyDishes from '../../containers/MyDishes';
import DisplayADish from '../../containers/DisplayADish';
import LastDishes from '../../containers/LastDishes';
import SearchForm from '../../containers/SearchForm';
import Results from '../../containers/Results';
import DishesForm from '../../containers/DishesForm';

import MyInformation from '../../containers/MyInformation';

// Style
import './styles.css';

// Fake data from file
// import dishes from '../../../dataDishes';
import ScrollToTop from '../ScrollToTop';

/**
 * App component
 * Application Layout
 */
const App = ({
  // eslint-disable-next-line no-shadow
  isLoginOpen, isSignUpOpen, getIngredients, fetchTypeDish, fetchTypeKitchen,
}) => (
  <div className="app">
    {(isLoginOpen || isSignUpOpen) && <div className="backdrop" />}
    {
      useEffect(() => {
        getIngredients();
        fetchTypeDish();
        fetchTypeKitchen();
      }, [])
    }
    {/* <AppHeader /> */}

    <Menu />
    <ScrollToTop />
    <Switch onUpdate={() => window.scrollTo(0, 0)}>
      <Route exact path="/v1/my-information" component={MyInformation} />

      <Route exact path="/v1/exchange-tracking" component={Exchangetracking} />

      <Route exact path="/">
        <DescriptionHomepage />
        <Description />
        <SearchForm />
        <LastDishes />
        <LoginForm />
        <SignUpForm />
      </Route>

      <Route exact path="/v1/dish/:id" component={DisplayADish} />

      <Route exact path="/v1/dishes/edit/:id" component={DishesForm} />

      <Route exact path="/results/:kitchen/:dish/:city" component={Results} />

      <Route exact path="/v1/mydishes">
        <MyDishes />
      </Route>

      <Route
        exact
        path="/v1/createdish"
        render={(props) => <DishesForm {...props} key={Date.now()} />}
      />

      <Route exact path="/v1/Qui-sommes-nous">
        <Faces />
      </Route>

      <Route exact path="/v1/privacy-policy">
        <PrivacyPolicy />
      </Route>

      <Route component={Error} />
    </Switch>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
    />

    <Footer />
  </div>
);

App.propTypes = {
  isLoginOpen: PropTypes.bool.isRequired,
  isSignUpOpen: PropTypes.bool.isRequired,
  getIngredients: PropTypes.func.isRequired,
  fetchTypeDish: PropTypes.func.isRequired,
  fetchTypeKitchen: PropTypes.func.isRequired,
};
export default App;
