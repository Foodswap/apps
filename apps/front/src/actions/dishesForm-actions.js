// action pour changer la valeur des input du login form
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const setInputValue = (value, name) => ({
  type: SET_INPUT_VALUE,
  name,
  value,
});
// action pour l'envoi du form de création de plat
export const SEND_FORM_RECIPE_UP = 'SEND_FORM_RECIPE_UP';
export const sendFormRecipeUp = (payload) => ({
  type: SEND_FORM_RECIPE_UP,
  payload,
});

// Action  pour la réussite de l'envoi
export const SEND_FORM_RECIPE_UP_SUCCESS = 'SEND_FORM_RECIPE_UP_SUCCESS';
export const sendFormRecipeUpSuccess = (payload) => ({
  type: SEND_FORM_RECIPE_UP_SUCCESS,
  payload,
});

// Action pour l' echec de l'envoi
export const SEND_FORM_RECIPE_UP_ERROR = 'SEND_FORM_RECIPE_UP_ERROR';
export const sendFormRecipeUpError = (payload) => ({
  type: SEND_FORM_RECIPE_UP_ERROR,
  payload,
});

// Action  pour la réussite de l'annulation
export const CANCEL_FORM_RECIPE_SUCCESS = 'CANCEL_FORM_RECIPE_SUCCESS';
export const cancelFormRecipeSuccess = (payload) => ({
  type: CANCEL_FORM_RECIPE_SUCCESS,
  payload,
});

// Action pour l' annulation non réusssi
export const CANCEL_FORM_RECIPE_ERROR = 'CANCEL_FORM_RECIPE_ERROR';
export const cancelFormRecipeError = (payload) => ({
  type: CANCEL_FORM_RECIPE_ERROR,
  payload,
});

// action pour envoyer dans le state la valeur des select
export const SET_CATEGORY_SELECT = 'SET_CATEGORY_SELECT';
export const setCategorySelect = (value, name) => ({
  type: SET_CATEGORY_SELECT,
  name,
  value,
});

// action pour changer le mode en ligne / hors ligne
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const changeStatus = (payload) => ({
  type: CHANGE_STATUS,
  payload,
});

// action pour recuperer les ingredients
export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS';
export const fetchIngredients = (payload) => ({
  type: FETCH_INGREDIENTS,
  payload,
});

export const FETCH_INGREDIENTS_SUCCES = 'FETCH_INGREDIENTS_SUCCES';
export const fetchIngredientsSucces = (payload) => ({
  type: FETCH_INGREDIENTS_SUCCES,
  payload,
});

export const FETCH_INGREDIENTS_ERROR = 'FETCH_INGREDIENTS_ERROR';
export const fetchIngredientsError = () => ({
  type: FETCH_INGREDIENTS_ERROR,
});

export const SET_INGREDIENT = 'SET_INGREDIENT';
export const setIngredient = (payload) => ({
  type: SET_INGREDIENT,
  payload,
});

export const FETCH_TYPE_DISH = 'FETCH_TYPE_DISH';
export const fetchTypeDish = () => ({
  type: FETCH_TYPE_DISH,
});

export const FETCH_TYPE_DISH_SUCCES = 'FETCH_TYPE_DISH_SUCCES';
export const fetchTypeDishSucces = (payload) => ({
  type: FETCH_TYPE_DISH_SUCCES,
  payload,
});

export const FETCH_TYPE_KITCHEN = 'FETCH_TYPE_KITCHEN';
export const fetchTypeKitchen = () => ({
  type: FETCH_TYPE_KITCHEN,
});

export const FETCH_TYPE_KITCHEN_SUCCES = 'FETCH_TYPE_KITCHEN_SUCCES';
export const fetchTypeKitchenSucces = (payload) => ({
  type: FETCH_TYPE_KITCHEN_SUCCES,
  payload,
});

// action pour recuperer le / les plats dans le SWAP

export const FETCH_MY_DISHES_SWAP = 'FETCH_MY_DISHES_SWAP';
export const fetchMyDishesSwap = (payload) => ({
  type: FETCH_MY_DISHES_SWAP,
  payload,
});

// Action en cas de succes de recup du form

export const FETCH_MY_DISHES_SWAP_SUCCES = 'FETCH_MY_DISHES_SWAP_SUCCES';
export const fetchMyDishesSwapSucces = (payload) => ({
  type: FETCH_MY_DISHES_SWAP_SUCCES,
  payload,
});

// Action utiliser dans le fichier MyDishes (boutton Editer)
// Action pour séléctionné l'id du plat à éditer
export const GET_A_DISH_TO_EDIT = 'GET_A_DISH_TO_EDIT';
export const getADishToEdit = (payload) => ({
  type: GET_A_DISH_TO_EDIT,
  payload,
});

// Action utiliser dans le fichier MyDishes (boutton Editer)
// Action pour mettre à jour l'id du plat à éditer
export const UPDATE_A_DISH_TO_EDIT = 'UPDATE_A_DISH_TO_EDIT';
export const updateADishToEdit = (payload) => ({
  type: UPDATE_A_DISH_TO_EDIT,
  payload,
});

// Action utiliser dans le fichier dishMiddleware
// Action pour vider les champs du formulaire
export const CLEAR_DISH_INFORMATIONS = 'CLEAR_DISH_INFORMATIONS';
export const clearDishInformations = (payload) => ({
  type: CLEAR_DISH_INFORMATIONS,
  payload,
});

export const HANDLE_UPDATE_PICTURE = 'HANDLE_UPDATE_PICTURE';
export const handleUpdatePicture = (payload) => ({
  type: HANDLE_UPDATE_PICTURE,
  payload,
});

export const RESIZE_IMAGE = 'RESIZE_IMAGE';
export const resizeImage = (payload) => ({
  type: RESIZE_IMAGE,
  payload,
});

// fetch cities in API on Input change
export const DISH_FORM_FETCH_CITIES = 'DISH_FORM_FETCH_CITIES';
export const dishFetchCities = (payload) => ({
  type: DISH_FORM_FETCH_CITIES,
  payload,
});

export const DISH_FORM_FETCH_CITIES_SUCCES = 'DISH_FORM_FETCH_CITIES_SUCCES';
export const dishFetchCitiesSucces = (payload) => ({
  type: DISH_FORM_FETCH_CITIES_SUCCES,
  payload,
});

export const DISH_FORM_CLEAR_CITIES_INPUT = 'DISH_FORM_CLEAR_CITIES_INPUT';
export const dishClearCitiesInput = () => ({
  type: DISH_FORM_CLEAR_CITIES_INPUT,
});

export const DISH_FORM_SAVE_SELECTED_CITY = 'DISH_FORM_SAVE_SELECTED_CITY';
export const dishSaveSelectedCity = (payload) => ({
  type: DISH_FORM_SAVE_SELECTED_CITY,
  payload,
});
