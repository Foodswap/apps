import {
  DELETE_ONE_DISH,
  DELETE_ONE_DISH_SUCCESS,
  DELETE_ONE_DISH_ERROR,
  UPDATE_SELECTED_DISH,
  UPDATE_LIST_OF_DISHES,
  DISH_EXCHANGE,
  UPDATE_ALL_DISHES_FROM_A_USER,
  GET_LIST_OF_DISHES,
} from '../actions/dishes';

const initialState = {
  lastDishes: null,
  deleteMessage: '',
  userDishes: null,
  dishSelect: null,
};

export default (state = initialState, action = {}) => {
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
      deleteMessage: 'il y a eu un problème, votre fiche n\'a pas pu être supprimé',
    };
    case UPDATE_SELECTED_DISH: return {
      ...state,
      dishSelect: action.payload,
    };
    case UPDATE_LIST_OF_DISHES: return {
      ...state,
      lastDishes: action.payload,
    };
    // case DISH_EXCHANGE: return {
    //   ...state,
    // };
    // case GET_LIST_OF_DISHES: return {
    //   ...state,
    //   lastDishes: action.payload,
    // }
    case UPDATE_ALL_DISHES_FROM_A_USER: return {
      ...state,
      userDishes: action.payload,
    };
    default:
      return state;
  }
};
