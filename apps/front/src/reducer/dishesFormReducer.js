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
} from '../actions/dishesForm';

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
        online: !state.online,
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

    default:
      return state;
  }
};
