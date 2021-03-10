// ations pour envoyé le search form
export const SEND_SEARCH_FORM = "SEND_SEARCH_FORM";
export const sendSearchForm = (payload) => ({
  type: SEND_SEARCH_FORM,
  payload,
});

export const SET_SELECT_VALUE = "SET_SELECT_VALUE";
export const setSelectValue = (value, name) => ({
  type: SET_SELECT_VALUE,
  name,
  value,
});

// action pour fetch les resultats de recherche
export const FETCH_RESULTS = 'FETCH_RESULTS';
export const fetchResults = (kitchenParam, dishParam, cityParam) => {
  console.log(kitchenParam, dishParam, cityParam);

  return {
    type: FETCH_RESULTS,
    payload: {
      kitchenParam, dishParam, cityParam
    }
  };
};

export const FETCH_RESULTS_SUCCES = "FETCH_RESULTS_SUCCES";
export const fetchResultsSucces = (payload) => ({ 
  type: FETCH_RESULTS_SUCCES,
  payload,
})

export const FETCH_RESULTS_ERROR = "FETCH_RESULTS_ERROR";
export const fetchResultsError = () => ({ 
  type: FETCH_RESULTS_ERROR,
})
