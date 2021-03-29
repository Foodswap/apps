import { FETCH_MY_DISHES_SWAP_SUCCES } from '../actions/dishesForm-actions';
import {
  UPDATE_OF_EXCHANGE_LIST_ASKED,
  UPDATE_OF_EXCHANGE_LIST_RECEIVED,
  UPDATE_ACTIVE_TAB,
  GET_ASKER_DISH_ID,
  SEND_PROPOSITION_SUCCES,
  SEND_PROPOSITION_ERROR,
} from '../actions/exchangeTracking-actions';

const initialState = {
  askedPropositions: null,
  receivedPropositions: null,
  activeTab: 'received',
  myDishesOnline: null,
  askerDishId: null,
  isSelected: false,
  succesPropositionMsg: '',
  errorPropositionMsg: '',
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

    case FETCH_MY_DISHES_SWAP_SUCCES:
      return {
        ...state,
        myDishesOnline: action.payload,
      };

    case GET_ASKER_DISH_ID: return {
      ...state,
      askerDishId: action.payload,
      isSelected: true,
    };

    case SEND_PROPOSITION_SUCCES: return {
      ...state,
      succesPropositionMsg: 'Votre proposition à bien été envoyée !',
    };

    case SEND_PROPOSITION_ERROR: return {
      ...state,
      errorPropositionMsg: 'Vous devez choisir un plat à proposer',
    };

    default:
      return state;
  }
};
