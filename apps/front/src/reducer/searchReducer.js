import {
  SET_INPUT_VALUE
} from '../actions/user';

import { SEND_SEARCH_FORM, SET_SELECT_VALUE, FETCH_RESULTS_SUCCES, FETCH_CATEGORIES_SUCCES } from '../actions/search';

const initialState = {
  dish: "",
  kitchen: "",
  city: "",
  isSearching: false,
  resultDishes: null,
  categories: {
    typeKitchen: null,
    typeDish: null
  }
    
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SEND_SEARCH_FORM: 
      return {
        ...state,
        [action.name]: action.value,
        isSearching: true,
      };
    case SET_SELECT_VALUE: 
      return {
        ...state,
        [action.name]: action.value,
      };
    case FETCH_RESULTS_SUCCES: 
      return {
        ...state,
        isSearching: false,
        resultDishes: action.payload,
      };
    case FETCH_CATEGORIES_SUCCES: 
      return {
        ...state,
        categories: action.payload,

      }
      default:
        return state;
  }
}
