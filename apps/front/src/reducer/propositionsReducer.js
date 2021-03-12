import {
  UPDATE_OF_EXCHANGE_LIST_ASKED,
  UPDATE_OF_EXCHANGE_LIST_RECEIVED,
  UPDATE_ACTIVE_TAB,
} from '../actions/exchangeTracking';

const initialState = {
  askedPropositions: null,
  receivedPropositions: null,
  activeTab: 'received',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_OF_EXCHANGE_LIST_ASKED: return {
      ...state,
      askedPropositions: action.payload,
    };
    case UPDATE_OF_EXCHANGE_LIST_RECEIVED: return {
      ...state,
      receivedPropositions: action.payload,
    };
    case UPDATE_ACTIVE_TAB: return {
      ...state,
      activeTab: action.payload,
    };
    default:
      return state;
  }
};
