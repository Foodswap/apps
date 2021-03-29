import {
  SET_INPUT_VALUE,
} from '../actions/user';

import { SEND_SEARCH_FORM, SET_SELECT_VALUE, FETCH_RESULTS_SUCCES } from '../actions/search';
import { FETCH_TYPE_DISH_SUCCES, FETCH_TYPE_KITCHEN_SUCCES } from '../actions/dishesForm';

const initialState = {
  dish: '',
  kitchen: '',
  city: '',
  isSearching: false,
  resultDishes: null,
  dishData: null,
  kitchenData: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    /**
    * update state whith all controlled inputs from search form
    */
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    /**
    * update state whith all inputs values from search form
    * to be able to send filters data on axios request
    */
    case SEND_SEARCH_FORM:
      return {
        ...state,
        [action.name]: action.value,
        isSearching: true,
      };

    /**
    * update state whith value of select inputs
    */
    case SET_SELECT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    /**
    * update state whith all dishes corresponding to filters
    */
    case FETCH_RESULTS_SUCCES:
      return {
        ...state,
        isSearching: false,
        resultDishes: action.payload,
      };

    /**
    * update state with all type dish of the api
    */
    case FETCH_TYPE_DISH_SUCCES:
      return {
        ...state,
        dishData: action.payload,
      };

    /**
    * update state with all type kitchen of the api
    */
    case FETCH_TYPE_KITCHEN_SUCCES:
      return {
        ...state,
        kitchenData: action.payload,
      };

    default:
      return state;
  }
};
