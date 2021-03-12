import {
  DELETE_ONE_DISH,
  DELETE_ONE_DISH_SUCCESS,
  DELETE_ONE_DISH_ERROR,
  UPDATE_SELECTED_DISH,
  UPDATE_LIST_OF_DISHES,
  DISH_EXCHANGE,
} from '../actions/dishes';

const initialState = {
  lastDishes: null,
  deleteMessage: '',
  userDishes: null,
  dishSelect: null,
};

export default (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case DELETE_ONE_DISH: return {
      ...state,
    };
    case DELETE_ONE_DISH_SUCCESS: return {
      ...state,
      userDishes: [...action.payload],
      deleteMessage: 'votre fiche de plat a bien été supprimée',
    };
    case DELETE_ONE_DISH_ERROR: return {
      ...state,
      deleteMessage: 'il y a eu un problème, votre fine n\'a pas pu être supprimé',
    };
    case UPDATE_SELECTED_DISH: return {
      ...state,
      dishSelect: action.payload,
    };
    case UPDATE_LIST_OF_DISHES: return {
      ...state,
      lastDishes: action.payload,
    };
    case DISH_EXCHANGE: return {
      ...state,
    };

    default:
      return state;
  }
};
