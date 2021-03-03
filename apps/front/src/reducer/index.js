import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import userReducer from './userReducer';
// exporter le resultat du combineReducer pour l'utiliser
// dans le createStore

export default combineReducers({
  recipes: recipeReducer,
  user: userReducer,
});
