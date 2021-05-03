import { createStore, applyMiddleware, compose } from 'redux';

import authMiddleware from '../middlewares/auth-middleware';
import dishesMiddleware from '../middlewares/dishes-middleware';
import exchangeTrackingMiddleware from '../middlewares/exchangeTracking-middleware';
import searchMiddleware from '../middlewares/search-middleware';
import dishesFormMiddleware from '../middlewares/dishesForm-middleware';
import footerMiddleware from '../middlewares/footer-middleware';

import reducer from '../reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // Je mets tous les middlewares que je veux exécuter
    // dans l'ordre où je veux les exécuter
    authMiddleware,
    dishesMiddleware,
    searchMiddleware,
    exchangeTrackingMiddleware,
    dishesFormMiddleware,
    footerMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
