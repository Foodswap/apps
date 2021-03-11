import axios from 'axios';

import {
  GET_OF_EXCHANGE_LIST,
  updateOfExchangeListAsked,
  updateOfExchangeListReceived,
} from '../actions/exchangeTracking';

export default (store) => (next) => (action) => {
  switch (action.type) {
    // eslint-disable-next-line no-lone-blocks
    case GET_OF_EXCHANGE_LIST: {
      axios({
        method: 'get',
        url: `http://localhost:3000/propositions?asker.user_id=${action.payload}`,
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
        url: `http://localhost:3000/propositions?receiver.user_id=${action.payload}`,
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
    default:
      return next(action);
  }
};
