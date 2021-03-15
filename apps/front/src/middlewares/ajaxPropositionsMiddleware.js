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
  sendPropositionSucces 
} from '../actions/exchangeTracking';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // eslint-disable-next-line no-lone-blocks
    case GET_OF_EXCHANGE_LIST: {
      axios({
        method: 'get',
        url: `${process.env.FAKE_API_URL}/propositions?asker.user_id=${action.payload}`,
      })
        .then((res) => {
          console.log(`response ok : ${res}`);
          const actionToDispatch = updateOfExchangeListAsked(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(`${error} error on get one dish`);
        })
        .finally(() => {
          console.log('login done');
        });

      axios({
        method: 'get',
        url: `${process.env.FAKE_API_URL}/propositions?receiver.user_id=${action.payload}`,
      })
        .then((res) => {
          console.log(`response ok : ${res}`);
          const actionToDispatch = updateOfExchangeListReceived(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(`${error} error on get one dish`);
        })
        .finally(() => {
          console.log('login done');
        });
    } break;
    case GET_CLICK_ON_ACCEPT: {
      axios({
        method: 'patch',
        url: `${process.env.FAKE_API_URL}/propositions/${action.payload.propositionId}`,
        data: { status: 1 },
      })
        .then((res) => {
          console.log(`response ok : ${res}`);
          const actionToDispatch = getOfExchangeList(action.payload.userId);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(`${error} error on get one dish`);
        })
        .finally(() => {
          console.log('login done');
        });
    } break;
    case GET_CLICK_ON_REFUSE: {
      axios({
        method: 'patch',
        url: `${process.env.FAKE_API_URL}/propositions/${action.payload.propositionId}`,
        data: { status: 2 },
      })
        .then((res) => {
          console.log(`response ok : ${res}`);
          const actionToDispatch = getOfExchangeList(action.payload.userId);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(`${error} error on get one dish`);
        })
    } break;
    case SEND_PROPOSITION: {

      const { askerDishId } = store.getState().propositions;
      const { dishSelect } = store.getState().recipes;
      // ! TODO recuperer l'id dans l'url du plat requested 
      if (askerDishId) {
        axios({
          method: 'post',
          url: `${process.env.API_URL}/swaps`,
          data: { 
            offered_meal_id: askerDishId,
            requested_meal_id: dishSelect.id,
          }
        })
        .then((res) => {
          console.log(`response ok : ${res}`);
          const actionToDispatch = sendPropositionSucces();
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(`${error} error on send proposition`);
        })
      } else {
        const actionToDispatch = (sendPropositionError());
        return store.dispatch(actionToDispatch);
      }
    }

    default:
      return next(action);
  }
};
