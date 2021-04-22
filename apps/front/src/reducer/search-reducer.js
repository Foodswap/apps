import {
  SET_INPUT_VALUE,
} from '../actions/auth-actions';

import {
  SEND_SEARCH_FORM,
  SET_SELECT_VALUE,
  FETCH_RESULTS_SUCCES,
  FETCH_CITIES_SUCCES,
  CLEAR_CITIES_INPUT,
  SAVE_SELECTED_CITY,
  CLEAR_INPUTS,
  HANDLE_CHECK,
  HANDLE_AROUND_VALUE,
} from '../actions/search-actions';
import { FETCH_TYPE_DISH_SUCCES, FETCH_TYPE_KITCHEN_SUCCES } from '../actions/dishesForm-actions';

const initialState = {
  dish: '',
  kitchen: '',
  city: '',
  isSearching: false,
  resultDishes: null,
  dishData: null,
  kitchenData: null,
  citiesData: [],
  selectedCity: null,
  aroundChecked: false,
  aroundValue: null,
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

    /**
    * When the user type in city input, fetch cities in api and if succes, save the result in state
    */
    case FETCH_CITIES_SUCCES:
      return {
        ...state,
        citiesData: action.payload,
      };

    /**
    * clear autocomplete city input
    */
    case CLEAR_CITIES_INPUT:
      return {
        ...state,
        citiesData: [],
      };

    /**
    * when user click on suggestion in autocomplete input, save his selection on state
    */
    case SAVE_SELECTED_CITY:
      return {
        ...state,
        selectedCity: action.payload,
      };

    /**
    * clear all inputs of search form
    */
    case CLEAR_INPUTS:
      return {
        ...state,
        citiesData: [],
        city: '',
        aroundChecked: false,
        aroundValue: null,
      };
    /**
    * change value of aroundChecked onClick on input
    */
    case HANDLE_CHECK:
      return {
        ...state,
        aroundChecked: !state.aroundChecked,
        aroundValue: null,
        city: '',
      };

    /**
    * change value of around slider input
    */
    case HANDLE_AROUND_VALUE:
      return {
        ...state,
        aroundValue: action.payload,
      };
    default:
      return state;
  }
};
