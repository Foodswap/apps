import {
  DELETE_ONE_DISH,
  DELETE_ONE_DISH_SUCCESS,
  DELETE_ONE_DISH_ERROR,
  UPDATE_SELECTED_DISH,
  UPDATE_LIST_OF_DISHES,
  UPDATE_ALL_DISHES_FROM_A_USER,
} from '../actions/dishes';

const initialState = {
  lastDishes: null,
  deleteMessage: '',
  userDishes: null,
  dishSelect: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    /**
    * return state when a dish is deleted
    */
    case DELETE_ONE_DISH: return {
      ...state,
    };

    /**
    * update succes message on state when a dish is succesfully deleted
    * and update all user dishes on state
    */
    case DELETE_ONE_DISH_SUCCESS: return {
      ...state,
      userDishes: [...action.payload],
      deleteMessage: 'votre fiche de plat a bien été supprimée',
    };

    /**
    * update error message on state when a dish couldn't be deleted
    */
    case DELETE_ONE_DISH_ERROR: return {
      ...state,
      deleteMessage: 'il y a eu un problème, votre fiche n\'a pas pu être supprimé',
    };

    /**
    * update state whith the selected dish informations
    */
    case UPDATE_SELECTED_DISH: return {
      ...state,
      dishSelect: action.payload,
    };

    /**
    * update state whith all last dishes informations
    */
    case UPDATE_LIST_OF_DISHES: return {
      ...state,
      lastDishes: action.payload,
    };

    /**
    * update state whith all dishes from a user
    */
    case UPDATE_ALL_DISHES_FROM_A_USER: return {
      ...state,
      userDishes: action.payload,
    };

    default:
      return state;
  }
};
