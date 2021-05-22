import { combineReducers } from 'redux';
import dishesReducer from './dishes-reducer';
import userReducer from './auth-reducer';
import searchReducer from './search-reducer';
import dishesFormReducer from './dishesForm-reducer';
import exchangeTrackingReducer from './exchangeTracking-reducer';
import footerReducer from './Footer-reducer';
// exporter le resultat du combineReducer pour l'utiliser
// dans le createStore

export default combineReducers({
  dishes: dishesReducer,
  user: userReducer,
  search: searchReducer,
  dishesForm: dishesFormReducer,
  propositions: exchangeTrackingReducer,
  footer: footerReducer,
});
