// action pour récupérer la liste des échanges
export const GET_OF_EXCHANGE_LIST = 'GET_OF_EXCHANGE_LIST';
export const getOfExchangeList = (payload) => ({
  type: GET_OF_EXCHANGE_LIST,
  payload,
});

// Action pour mettre a jour la liste d'échange du demandeur d'échange
export const UPDATE_OF_EXCHANGE_LIST_ASKED = 'UPDATE_OF_EXCHANGE_LIST_ASKED';
export const updateOfExchangeListAsked = (payload) => ({
  type: UPDATE_OF_EXCHANGE_LIST_ASKED,
  payload,
});

// Action pour mettre a jour la liste d'échange du receveur d'échange
export const UPDATE_OF_EXCHANGE_LIST_RECEIVED = 'UPDATE_OF_EXCHANGE_LIST_RECEIVED';
export const updateOfExchangeListReceived = (payload) => ({
  type: UPDATE_OF_EXCHANGE_LIST_RECEIVED,
  payload,
});

// Action pour activer un onglet
export const UPDATE_ACTIVE_TAB = 'UPDATE_ACTIVE_TAB';
export const updateActiveTab = (payload) => ({
  type: UPDATE_ACTIVE_TAB,
  payload,
});
