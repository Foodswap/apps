import {
  DELETE_ONE_DISH,
  DELETE_ONE_DISH_SUCCESS,
  DELETE_ONE_DISH_ERROR,
  UPDATE_SELECTED_DISH,
  UPDATE_LIST_OF_DISHES,
  UPDATE_ALL_DISHES_FROM_A_USER,
  UPDATE_OPEN_DELETE_MODAL,
  UPDATE_DISH_ID_SELECT,
  CANCEL_DELETION,
} from '../actions/dishes-actions';

const initialState = {
  lastDishes: null,
  deleteMessage: '',
  userDishes: null,
  dishIdSelect: null,
  openDeleteModal: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    /**
    * update property openDeleteModal on true
    */
    case UPDATE_OPEN_DELETE_MODAL: return {
      ...state,
      openDeleteModal: action.payload,
    };

    /**
    * update property dishIdSelect
    */
    case UPDATE_DISH_ID_SELECT: return {
      ...state,
      dishIdSelect: action.payload,
    };

    /**
    * update dishIdSelect and modal on undo
    */
    case CANCEL_DELETION: return {
      ...state,
      openDeleteModal: false,
      dishIdSelect: null,
    };

    /**
    * return state when a dish is deleted
    */
    case DELETE_ONE_DISH: return {
      ...state,
    };

    /**
    * deletion of dishes select and update all user dishes
    */
    case DELETE_ONE_DISH_SUCCESS: return {
      ...state,
      userDishes: [...state.userDishes.filter((element) => element.id !== action.payload)],
      openDeleteModal: false,
      dishIdSelect: action.payload,
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
