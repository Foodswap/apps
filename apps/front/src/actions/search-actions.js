// ations pour envoyé le search form
export const SEND_SEARCH_FORM = 'SEND_SEARCH_FORM';
export const sendSearchForm = (payload) => ({
  type: SEND_SEARCH_FORM,
  payload,
});

export const SET_SELECT_VALUE = 'SET_SELECT_VALUE';
export const setSelectValue = (value, name) => ({
  type: SET_SELECT_VALUE,
  name,
  value,
});

// action pour fetch les resultats de recherche
export const FETCH_RESULTS = 'FETCH_RESULTS';
export const fetchResults = (kitchenParam, dishParam, cityParam) => ({
  type: FETCH_RESULTS,
  payload: {
    kitchenParam, dishParam, cityParam,
  },
});

// action en cas de succes de la requete pour les resultats
export const FETCH_RESULTS_SUCCES = 'FETCH_RESULTS_SUCCES';
export const fetchResultsSucces = (payload) => ({
  type: FETCH_RESULTS_SUCCES,
  payload,
});

// action en cas de fail de la requete pour les resultats
export const FETCH_RESULTS_ERROR = 'FETCH_RESULTS_ERROR';
export const fetchResultsError = () => ({
  type: FETCH_RESULTS_ERROR,
});

// action pour recuperer les categories
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

// action en cas de succes de la requete pour les categories
export const FETCH_CATEGORIES_SUCCES = 'FETCH_CATEGORIES_SUCCES';
export const fetchCategoriesSucces = (payload) => ({
  type: FETCH_CATEGORIES_SUCCES,
  payload,
});

// action en cas de fail de la requete pour les categories
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';
export const fetchCategoriesError = () => ({
  type: FETCH_CATEGORIES_ERROR,
});

// fetch cities in API on Input change
export const FETCH_CITIES = 'FETCH_CITIES';
export const fetchCities = (payload) => ({
  type: FETCH_CITIES,
  payload,
});

export const FETCH_CITIES_SUCCES = 'FETCH_CITIES_SUCCES';
export const fetchCitiesSucces = (payload) => ({
  type: FETCH_CITIES_SUCCES,
  payload,
});

export const CLEAR_CITIES_INPUT = 'CLEAR_CITIES_INPUT';
export const clearCitiesInput = () => ({
  type: CLEAR_CITIES_INPUT,
});

export const SAVE_SELECTED_CITY = 'SAVE_SELECTED_CITY';
export const saveSelectedCity = (payload) => ({
  type: SAVE_SELECTED_CITY,
  payload,
});

export const CLEAR_INPUTS = 'CLEAR_INPUTS';
export const clearInputs = () => ({
  type: CLEAR_INPUTS,
});
