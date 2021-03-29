import axios from 'axios';
import {
  FETCH_RESULTS, fetchResultsSucces,
} from '../actions/search';

export default (store) => (next) => (action) => {
  switch (action.type) {
    /**
    * When the search form is submitted, fetch results according to filters
    */
    // eslint-disable-next-line no-lone-blocks
    case FETCH_RESULTS: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/dishes/${action.payload.kitchenParam.toLowerCase()}/${action.payload.dishParam.toLowerCase()}/${action.payload.cityParam.toLowerCase()}`,
      })
        .then((res) => {
          res.data.sort((a, b) => b.id - a.id);
          const actionToDispatch = fetchResultsSucces(res.data);
          return store.dispatch(actionToDispatch);
        });
    } break;
    default:
      return next(action);
  }
  return false;
};
