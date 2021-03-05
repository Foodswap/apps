import { createStore, applyMiddleware, compose } from 'redux';

import ajaxMiddleware from '../middlewares/ajaxMiddleware';
import ajaxDishesMiddleware from '../middlewares/ajaxDishesMiddleware';

import reducer from '../reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // Je mets tous les middlewares que je veux exécuter
    // dans l'ordre où je veux les exécuter
    // Je mets tous les middlewares que je veux exécuter
    // dans l'ordre où je veux les exécuter
    ajaxMiddleware,
    ajaxDishesMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
