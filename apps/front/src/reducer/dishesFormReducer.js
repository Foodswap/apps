import {
  SET_INPUT_VALUE,
  SEND_FORM_RECIPE_UP,
  CANCEL_FORM_RECIPE_SUCCESS,
  CANCEL_FORM_RECIPE_ERROR,
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
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SET_CATEGORY_SELECT:
      return {
        ...state,
        [action.name]: action.value,
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
        ingredientsData: action.payload.map((ingredient) => ({
          ...ingredient,
          label: ingredient.name,
          value: ingredient.id,
        })),
      };

    case SET_INGREDIENT:
      return {
        ...state,
        ingredients: action.payload,
      };

    case FETCH_TYPE_DISH_SUCCES:
      return {
        ...state,
        dishData: action.payload,
      };

    case FETCH_TYPE_KITCHEN_SUCCES:
      return {
        ...state,
        kitchenData: action.payload,
      };

      // En cas de success, je recupere mes props dont j'ai besoin
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
