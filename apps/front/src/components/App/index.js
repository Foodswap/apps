// Vendors
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
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

// Fake data from file
// import dishes from '../../../dataDishes';
import ScrollToTop from '../ScrollToTop';

/**
 * App component
 * Application Layout
 */
const App = ({ isLoginOpen, isSignUpOpen }) => (
  <div className="app">
    {(isLoginOpen || isSignUpOpen) && <div className="backdrop" />}
    {/* <AppHeader /> */}

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

      <Route exact path="/results/:kitchen/:dish/:city" component={ResultsContainer} />

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

const mapStateToProps = (state) => ({
  isLoginOpen: state.user.isLoginOpen,
  isSignUpOpen: state.user.isSignUpOpen,
});

App.propTypes = {
  isLoginOpen: PropTypes.bool.isRequired,
  isSignUpOpen: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps)(App);
