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
export const sendFormRecipeUpSuccess = () => ({
  type: SEND_FORM_RECIPE_UP_SUCCESS,
});

// Action pour l' echec de l'envoi
export const SEND_FORM_RECIPE_UP_ERROR = 'SEND_FORM_RECIPE_UP_ERROR';
export const sendFormRecipeUpError = (payload) => ({
  type: SEND_FORM_RECIPE_UP_ERROR,
  payload,
});

// action pour annuler le form de creation de plat
export const CANCEL_FORM_RECIPE = 'CANCEL_FORM_RECIPE';
export const cancelFormRecipe = () => ({
  type: CANCEL_FORM_RECIPE,
});

// ajouter deux actions  success et error

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
  value
})

// action pour changer le mode en ligne / hors ligne
export const CHANGE_STATUS = "CHANGE_STATUS";
export const changeStatus = () => ({
  type: CHANGE_STATUS,
})

