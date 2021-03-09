import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import userReducer from './userReducer';
import searchReducer from './searchReducer';
// exporter le resultat du combineReducer pour l'utiliser
// dans le createStore

export default combineReducers({
  recipes: recipeReducer,
  user: userReducer,
  search: searchReducer,
});
