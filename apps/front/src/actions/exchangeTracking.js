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

// Action pour cliqué sur le bouton accepter
export const GET_CLICK_ON_ACCEPT = 'GET_CLICK_ON_ACCEPT';
export const getClickOnAccept = (propositionId, userId) => ({
  type: GET_CLICK_ON_ACCEPT,
  payload: {
    propositionId, userId,
  },
});

// Action pour cliqué sur le bouton refuser
export const GET_CLICK_ON_REFUSE = 'GET_CLICK_ON_REFUSE';
export const getClickOnRefuse = (propositionId, userId) => ({
  type: GET_CLICK_ON_REFUSE,
  payload: {
    propositionId, userId,
  },
});

// get dish id of asker (when he selects his dish in swap modal)
export const GET_ASKER_DISH_ID = 'GET_ASKER_DISH_ID';
export const getAskerDishId = (payload) => ({
  type: GET_ASKER_DISH_ID,
  payload
})
