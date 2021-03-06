/* eslint-disable no-lone-blocks */
import axios from 'axios';

import {
  GET_OF_EXCHANGE_LIST,
  GET_CLICK_ON_ACCEPT,
  GET_CLICK_ON_REFUSE,
  updateOfExchangeListAsked,
  updateOfExchangeListReceived,
  getOfExchangeList,
  SEND_PROPOSITION,
  sendPropositionError,
  sendPropositionSucces,
} from '../actions/exchangeTracking-actions';

import {
  FETCH_MY_DISHES_SWAP,
  fetchMyDishesSwapSucces,
} from '../actions/dishesForm-actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    /**
     * get all propositions received and asked of a user with his ID
     */
    case GET_OF_EXCHANGE_LIST: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/swaps/authorAsker/${action.payload}`,
      })
        .then((res) => {
          const actionToDispatch = updateOfExchangeListAsked(res.data.reverse());

          return store.dispatch(actionToDispatch);
        });

      axios({
        method: 'get',
        url: `${process.env.API_URL}/swaps/authorReceiver/${action.payload}`,
      })
        .then((res) => {
          const actionToDispatch = updateOfExchangeListReceived(res.data.reverse());

          return store.dispatch(actionToDispatch);
        });
    } break;

    /**
     * update a proposition's status on accept button click
     */
    case GET_CLICK_ON_ACCEPT: {
      axios({
        method: 'put',
        url: `${process.env.API_URL}/swaps/${action.payload.propositionId}`,
        data: { status: 1 },
      })
        .then(() => {
          const actionToDispatch = getOfExchangeList(action.payload.userId);

          return store.dispatch(actionToDispatch);
        });
    } break;

    /**
     * update a proposition's status on refuse button click
     */
    case GET_CLICK_ON_REFUSE: {
      axios({
        method: 'put',
        url: `${process.env.API_URL}/swaps/${action.payload.propositionId}`,
        data: { status: 2 },
      })
        .then(() => {
          const actionToDispatch = getOfExchangeList(action.payload.userId);

          return store.dispatch(actionToDispatch);
        });
    } break;

    /**
     * send a new proposition using asker dish ID and requested meal ID
     */
    case SEND_PROPOSITION: {
      const { askerDishId } = store.getState().propositions;
      const { dishSelect } = store.getState().dishes;

      if (askerDishId) {
        axios({
          method: 'post',
          url: `${process.env.API_URL}/swaps`,
          data: {
            offered_meal_id: askerDishId,
            requested_meal_id: dishSelect.id,
          },
        })
          .then(() => {
            const actionToDispatch = sendPropositionSucces();
            store.dispatch(actionToDispatch);
            setTimeout(() => {
              // eslint-disable-next-line no-restricted-globals
              location.href = '/v1/exchange-tracking';
            }, 800);
          });
      }
      else {
        const actionToDispatch = (sendPropositionError());
        return store.dispatch(actionToDispatch);
      }
    } break;

    /**
     * get all online dishes of a user to allow him to choose one for a new proposition
     */
    case FETCH_MY_DISHES_SWAP: {
      const token = localStorage.getItem('token');
      axios({
        method: 'get',
        url: `${process.env.API_URL}/dishes/online`,
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          const actionToDispatch = fetchMyDishesSwapSucces(res.data);

          return store.dispatch(actionToDispatch);
        });
    } break;
    default:
      return next(action);
  }

  return false;
};
