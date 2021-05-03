import {
  UPDATE_LAST_DISHES,
} from '../actions/footer-actions';

const initialState = {
  footerLastDishes: null,

};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LAST_DISHES: return {
      ...state,
      footerLastDishes: action.payload,
    };

    default:
      return state;
  }
};
