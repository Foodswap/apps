import {
  SET_INPUT_VALUE,
  SET_CATEGORY_SELECT,
  SEND_FORM_RECIPE_UP_SUCCESS,
  SEND_FORM_RECIPE_UP_ERROR,
  CHANGE_STATUS,
  FETCH_INGREDIENTS_SUCCES,
  SET_INGREDIENT,
  FETCH_TYPE_DISH_SUCCES,
  FETCH_TYPE_KITCHEN_SUCCES,
  UPDATE_A_DISH_TO_EDIT,
  CLEAR_DISH_INFORMATIONS,
  HANDLE_UPDATE_PICTURE,
  RESIZE_IMAGE,
  DISH_FORM_SAVE_SELECTED_CITY,
  DISH_FORM_FETCH_CITIES_SUCCES,
  DISH_FORM_CLEAR_CITIES_INPUT,

} from '../actions/dishesForm-actions';

// export const initialState = {};

const initialState = {
  dishId: null,
  cancelMessage: '',
  picture: '',
  previewPicture: 'https://img.icons8.com/carbon-copy/2x/meal.png',
  name: '',
  portion: '',
  description: '',
  city: '',
  author: null,
  ingredients: [],
  dish: null,
  kitchen: null,
  online: false,
  isSucces: false,
  isError: false,
  ingredientsData: [],
  dishData: null,
  kitchenData: null,
  myDishesOnline: null,
  selectedIngredients: [],
  citiesData: [],
  selectedCity: null,
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    /**
    * input controlled on form to create or edit a dish
    */
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    /**
    * when a category is selected, update state
    */
    case SET_CATEGORY_SELECT:
      return {
        ...state,
        [action.name]: action.value,
      };

    /**
    * update succes message on state
    */
    case SEND_FORM_RECIPE_UP_SUCCESS:
      return {
        ...state,
        isSucces: true,
      };

    /**
    * change state isError to true
    */
    case SEND_FORM_RECIPE_UP_ERROR:
      return {
        ...state,
        isError: true,
      };

    /**
    * change online status of a dish
    */
    case CHANGE_STATUS:
      return {
        ...state,
        online: action.payload,
      };

    /**
    * update ingredients on state when the request is a succes
    */
    case FETCH_INGREDIENTS_SUCCES:
      return {
        ...state,
        ingredientsData: action.payload.map((ingredient) => ({
          ...ingredient,
          label: ingredient.name,
          value: ingredient.id,
        })),
      };

    /**
    * update state with ingredients selected on form
    */
    case SET_INGREDIENT:
      return {
        ...state,
        ingredients: action.payload,
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
    * update state with all datas of the selected dish to edit it
    * and to already have informations on inputs
    */
    case UPDATE_A_DISH_TO_EDIT:
      return {
        ...state,
        dishId: action.payload.id,
        picture: action.payload.picture,
        name: action.payload.name,
        portion: action.payload.portion,
        description: action.payload.description,
        city: action.payload.city,
        author: action.payload.author.id,
        ingredients: action.payload.ingredients,
        dish: action.payload.categories.length
          ? action.payload.categories.find((category) => category.type === 'dish').id
          : '',
        kitchen: action.payload.categories.length
          ? action.payload.categories.find((category) => category.type === 'kitchen').id
          : '',
        online: action.payload.online,
        myDishesOnline: action.payload.myDishesOnline,
        selectedIngredients: action.payload.ingredients.length
          ? action.payload.ingredients.map((ingredient) => ({
            ...ingredient,
            label: ingredient.name,
            value: ingredient.id,
          }))
          : [],
        previewPicture: `${process.env.API_URL}/dishes/${action.payload.id}/picture`,
      };

    /**
    * remove all informations about a dish on state
    */
    case CLEAR_DISH_INFORMATIONS: return {
      ...state,
      dishId: null,
      cancelMessage: '',
      picture: '',
      previewPicture: 'https://img.icons8.com/carbon-copy/2x/meal.png',
      name: '',
      portion: '',
      description: '',
      city: '',
      author: null,
      dish: null,
      kitchen: null,
      online: false,
      isSucces: false,
      isError: false,
      myDishesOnline: null,
      selectedIngredients: [],
    };

    /**
    * get picture url to be able to preview it when we create or edit a dish
    */
    case HANDLE_UPDATE_PICTURE: {
      return {
        ...state,
        previewPicture: action.payload,
      };
    }

    /**
    * save on state new size of image
    */
    case RESIZE_IMAGE: {
      return {
        ...state,
        picture: action.payload,
      };
    }

    /**
    * When the user type in city input, fetch cities in api and if succes, save the result in state
    */
    case DISH_FORM_FETCH_CITIES_SUCCES:
      return {
        ...state,
        citiesData: action.payload,
      };

    /**
    * clear autocomplete city input
    */
    case DISH_FORM_CLEAR_CITIES_INPUT:
      return {
        ...state,
        citiesData: [],
      };

    /**
    * when user click on suggestion in autocomplete input, save his selection on state
    */
    case DISH_FORM_SAVE_SELECTED_CITY:
      return {
        ...state,
        selectedCity: action.payload,
      };

    default:
      return state;
  }
};
