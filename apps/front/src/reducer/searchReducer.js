import {
  SET_INPUT_VALUE
} from '../actions/user';

import { SEND_SEARCH_FORM, SET_SELECT_VALUE } from '../actions/search';

const initialState = {
  dish: "",
  kitchen: "",
  city: "",
  isSearching: false,
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
      default:
        return state;
  }
}
