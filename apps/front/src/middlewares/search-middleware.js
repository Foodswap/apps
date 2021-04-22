import axios from 'axios';
import {
  FETCH_RESULTS, fetchResultsSucces, FETCH_CITIES, fetchCitiesSucces,
} from '../actions/search-actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    /**
    * When the search form is submitted, fetch results according to filters
    */
    // eslint-disable-next-line no-lone-blocks
    case FETCH_RESULTS: {
      const {
        aroundValue,
      } = store.getState().search;
      const { latitude } = Number(localStorage.getItem('latitude'));
      const { longitude } = Number(localStorage.getItem('longitude'));
      const dishId = action.payload.dishParam;
      const kitchenId = action.payload.kitchenParam;
      const city = action.payload.cityParam;

      axios({
        method: 'get',
        url: `${process.env.API_URL}/search?${kitchenId ? `kitchenId=${kitchenId}` : ''}&${dishId ? `dishId=${dishId}` : ''}&${city ? `city=${city}` : ''}&${aroundValue ? `around=${aroundValue}` : ''}&${latitude ? `latitude=${latitude}` : ''}&${longitude ? `longitude=${longitude}` : ''}`,
      })
        .then((res) => {
          res.data.sort((a, b) => b.id - a.id);
          const actionToDispatch = fetchResultsSucces(res.data);

          return store.dispatch(actionToDispatch);
        });
    } break;

    /**
    * When the user type in city input, fetch cities in api
    */
    // eslint-disable-next-line no-lone-blocks
    case FETCH_CITIES: {
      if (action.payload.length >= 3) {
        axios({
          method: 'get',
          url: `${process.env.API_URL}/city/${action.payload}`,
        })
          .then((res) => {
            const actionToDispatch = fetchCitiesSucces(res.data);
            return store.dispatch(actionToDispatch);
          });
      }
    } break;

    default:
      return next(action);
  }
  return false;
};
