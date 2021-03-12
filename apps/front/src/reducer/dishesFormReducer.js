import {
  SET_INPUT_VALUE,
  CANCEL_FORM_RECIPE,
  SEND_FORM_RECIPE_UP,
  CANCEL_FORM_RECIPE_SUCCESS,
  CANCEL_FORM_RECIPE_ERROR,
  SET_CATEGORY_SELECT,
  SEND_FORM_RECIPE_UP_SUCCESS,
  SEND_FORM_RECIPE_UP_ERROR,
  CHANGE_STATUS,
  FETCH_INGREDIENTS_SUCCES,
  HANDLE_MULTI_SELECT,
  SET_INGREDIENT,
  FETCH_TYPE_DISH_SUCCES
} from '../actions/dishesForm';

// export const initialState = {};

const initialState = {

  cancelMessage: '',
  picture: 'https://img.icons8.com/carbon-copy/2x/meal.png',
  name : '',
  portion: '',
  description: '',
  city: '',
  author: '',
  ingredients: [],
  dish: '',
  kitchen: '',
  online: false,
  isSucces: false,
  isError: false,
  ingredientsData: null,
  dishData: null,
  // imgIcon: 'https://img.icons8.com/carbon-copy/2x/meal.png',
  
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_CATEGORY_SELECT: 
      return {
        ...state,
        [action.name]: action.value,
      }
    case CANCEL_FORM_RECIPE:
      return {
        ...state,
        isLogged: false,
        infos: {},
      };
    case CANCEL_FORM_RECIPE_SUCCESS: return {
      ...state,
      dataFormMeal: [...action.payload],
      cancelMessage: 'votre fiche de création de plat a bien été supprimée',
    };
    case CANCEL_FORM_RECIPE_ERROR: return {
      ...state,
      deleteMessage: 'il y a eu un problème, votre fiche de création de plat n\'a pas pu être supprimé',
    };
    case SEND_FORM_RECIPE_UP:
      return {
        ...state,
        [action.name]: action.value,
        loggedMessage: 'Votre plat a été crée',
      };
    case SEND_FORM_RECIPE_UP_SUCCESS: 
      return {
        ...state,
        isSucces: true,
      };
      case SEND_FORM_RECIPE_UP_ERROR: 
      return {
        ...state,
        isError: true,
      };
    case CHANGE_STATUS:
      return {
        ...state,
        online: !state.online,
      };
    case FETCH_INGREDIENTS_SUCCES: 
      return {
        ...state,
        ingredientsData: action.payload,
      }
    case SET_INGREDIENT: 
      return {
        ...state,
        ingredients: action.payload,
      }
    case FETCH_TYPE_DISH_SUCCES: 
      return {
        ...state,
        dishData: action.payload,
      }

    default:
      return state;
  }
};
