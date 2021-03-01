import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
// exporter le resultat du combineReducer pour l'utiliser
// dans le createStore

export default combineReducers({
  recipes: recipeReducer,
});
