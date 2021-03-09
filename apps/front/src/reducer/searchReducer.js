import {
  SET_INPUT_VALUE
} from '../actions/user';

const initialState = {
  dish: "",
  kitchen: "",
  city: "",
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
      default:
        return state;
  }
}
