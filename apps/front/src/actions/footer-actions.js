// Action for get ten last dishes for footer
export const GET_LAST_DISHES = 'GET_LAST_DISHES';
export const getLastDishes = (payload) => ({
  type: GET_LAST_DISHES,
  payload,
});
// Action for update last dishes in the footer
export const UPDATE_LAST_DISHES = 'UPDATE_LAST_DISHES';
export const updateLastDishes = (payload) => ({
  type: UPDATE_LAST_DISHES,
  payload,
});
