import { createStore, applyMiddleware, compose } from 'redux';

import ajaxMiddleware from '../middlewares/ajaxMiddleware';
import ajaxDishesMiddleware from '../middlewares/ajaxDishesMiddleware';
import ajaxPropositionsMiddleware from '../middlewares/ajaxPropositionsMiddleware';
import searchMiddleware from '../middlewares/search-middleware';
import dishesFormMiddleware from '../middlewares/dishes-form-middleware';

import reducer from '../reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // Je mets tous les middlewares que je veux exécuter
    // dans l'ordre où je veux les exécuter
    ajaxMiddleware,
    ajaxDishesMiddleware,
    searchMiddleware,
    ajaxPropositionsMiddleware,
    dishesFormMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
