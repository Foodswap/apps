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
