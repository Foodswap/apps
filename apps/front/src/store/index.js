import { createStore, applyMiddleware, compose } from 'redux';

import authMiddleware from '../middlewares/auth-middleware';
import dishesMiddleware from '../middlewares/dishes-middleware';
import propositionsMiddleware from '../middlewares/propositions-middleware';
import searchMiddleware from '../middlewares/search-middleware';
import dishesFormMiddleware from '../middlewares/dishes-form-middleware';

import reducer from '../reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // Je mets tous les middlewares que je veux exécuter
    // dans l'ordre où je veux les exécuter
    authMiddleware,
    dishesMiddleware,
    searchMiddleware,
    propositionsMiddleware,
    dishesFormMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
