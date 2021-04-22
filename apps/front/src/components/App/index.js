// Vendors
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

// Dumb components
import Footer from '../Footer';
import Faces from '../Faces';
import PrivacyPolicy from '../PrivacyPolicy';
import Error from '../Error';
import Description from '../Description';
import DescriptionHomepage from '../DescriptionHomepage';

// Container components
import MenuContainer from '../../containers/Menu-container';
import ExchangetrackingContainer from '../../containers/ExchangeTracking-container';
import LoginFormContainer from '../../containers/LoginForm-container';
import SignUpFormContainer from '../../containers/SignUpForm-container';
import MyDishesContainer from '../../containers/MyDishes-container';
import DisplayADishContainer from '../../containers/DisplayADish-container';
import LastDishesContainer from '../../containers/LastDishes-container';
import SearchFormContainer from '../../containers/SearchForm-container';
import ResultsContainer from '../../containers/Results-container';
import DishesFormContainer from '../../containers/DishesForm-container';
import MyInformationContainer from '../../containers/MyInformation-container';

// Style
import './styles.css';

import ScrollToTop from '../ScrollToTop';

/**
 * App component
 * Application Layout
 */
const App = ({
  // eslint-disable-next-line no-shadow
  isLoginOpen, isSignUpOpen, getIngredients, fetchTypeDish, fetchTypeKitchen, saveLocation, kitchenId, dishId, city,
}) => (
  <div className="app">
    {(isLoginOpen || isSignUpOpen) && <div className="backdrop" />}
    {
      useEffect(() => {
        getIngredients();
        fetchTypeDish();
        fetchTypeKitchen();
        const getLocation = () => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(saveLocation);
          }
        };
        getLocation();
      }, [])
    }

    <MenuContainer />
    <ScrollToTop />
    <Switch onUpdate={() => window.scrollTo(0, 0)}>
      <Route exact path="/v1/my-information" component={MyInformationContainer} />

      <Route exact path="/v1/exchange-tracking" component={ExchangetrackingContainer} />

      <Route exact path="/">
        <DescriptionHomepage />
        <Description />
        <SearchFormContainer />
        <LastDishesContainer />
        <LoginFormContainer />
        <SignUpFormContainer />
      </Route>

      <Route exact path="/v1/dish/:id" component={DisplayADishContainer} />

      <Route exact path="/v1/dishes/edit/:id" component={DishesFormContainer} />

      <Route path={`/v1/results?kitchenId=${kitchenId}&dishId=${dishId}&city=${city}`} component={ResultsContainer} />
      {/* <Route path={`/v1/results?${kitchenId ? `kitchenId=${kitchenId}` : ''}${dishId ? `&dishId=${dishId}` : ''}${city ? `&city=${city}` : ''}`} component={ResultsContainer} /> */}
      {/* <Route path="/v1/results?kitchenId&dishId&city" component={ResultsContainer} /> */}
      {/* <Route path="/v1/results?:kitchenId&:dishId&:city" component={ResultsContainer} />  */}

      <Route exact path="/v1/mydishes">
        <MyDishesContainer />
      </Route>

      <Route
        exact
        path="/v1/createdish"
        render={(props) => <DishesFormContainer {...props} key={Date.now()} />}
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
  saveLocation: PropTypes.func.isRequired,
};
export default App;
