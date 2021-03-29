import { FETCH_MY_DISHES_SWAP_SUCCES } from '../actions/dishesForm';
import {
  UPDATE_OF_EXCHANGE_LIST_ASKED,
  UPDATE_OF_EXCHANGE_LIST_RECEIVED,
  UPDATE_ACTIVE_TAB,
  GET_ASKER_DISH_ID,
  SEND_PROPOSITION_SUCCES,
  SEND_PROPOSITION_ERROR,
} from '../actions/exchangeTracking';

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
    /**
    * update state with all asked propositions informations
    */
    case UPDATE_OF_EXCHANGE_LIST_ASKED: return {
      ...state,
      askedPropositions: action.payload,
    };

    /**
    * update state with all received propositions informations
    */
    case UPDATE_OF_EXCHANGE_LIST_RECEIVED: return {
      ...state,
      receivedPropositions: action.payload,
    };

    /**
    * update state to know wich tab is active on exchange tracking page
    */
    case UPDATE_ACTIVE_TAB: return {
      ...state,
      activeTab: action.payload,
    };

    /**
    * update state with all propositions of a user
    */
    case FETCH_MY_DISHES_SWAP_SUCCES:
      return {
        ...state,
        myDishesOnline: action.payload,
      };

    /**
    * update state with asker dish id
    */
    case GET_ASKER_DISH_ID: return {
      ...state,
      askerDishId: action.payload,
      isSelected: true,
    };

    /**
    * update succes message on state when the proposition is succesfully send
    */
    case SEND_PROPOSITION_SUCCES: return {
      ...state,
      succesPropositionMsg: 'Votre proposition à bien été envoyée !',
    };

    /**
    * update error message on state when the proposition couldn't be send
    */
    case SEND_PROPOSITION_ERROR: return {
      ...state,
      errorPropositionMsg: 'Vous devez choisir un plat à proposer',
    };

    default:
      return state;
  }
};
