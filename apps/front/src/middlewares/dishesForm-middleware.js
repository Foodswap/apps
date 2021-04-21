/* eslint-disable no-lone-blocks */
import axios from 'axios';
import { toast } from 'react-toastify';

import {
  SEND_FORM_RECIPE_UP,
  FETCH_INGREDIENTS,
  FETCH_TYPE_KITCHEN,
  FETCH_TYPE_DISH,
  sendFormRecipeUpSuccess,
  sendFormRecipeUpError,
  fetchIngredientsSucces,
  fetchIngredientsError,
  fetchTypeDishSucces,
  fetchTypeKitchenSucces,
  GET_A_DISH_TO_EDIT,
  updateADishToEdit,
  DISH_FORM_FETCH_CITIES,
  dishFetchCitiesSucces,
} from '../actions/dishesForm-actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    /**
     * Create a new dish or edit a selected one
     */
    case SEND_FORM_RECIPE_UP: {
      const {
        dishId,
        picture,
        name,
        description,
        ingredients,
        portion,
        city,
        dish,
        kitchen,
        online,
      } = store.getState().dishesForm;

      const { infos } = store.getState().user;
      const formData = new FormData();
      formData.append('picture', picture);
      formData.append('author_id', infos.id);
      formData.append('name', name);
      formData.append('description', description);
      formData.append('ingredients', ingredients.map((ingredient) => ingredient.value || ingredient.id).join(','));
      formData.append('portion', portion);
      formData.append('city', city);
      formData.append('categories', `${kitchen},${dish}`);
      formData.append('online', online);

      const token = localStorage.getItem('token');
      axios({
        method: dishId ? 'put' : 'post',
        url: dishId ? `${process.env.API_URL}/dishes/${dishId}` : `${process.env.API_URL}/dishes`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      })
        .then(() => {
          const actionToDispatch = sendFormRecipeUpSuccess();
          store.dispatch(actionToDispatch);

          setTimeout(() => {
            // eslint-disable-next-line no-restricted-globals
            location.href = '/v1/mydishes';
          }, 200);

          dishId ? toast.success('Votre plat a bien été modifié') : toast.success('Votre plat a bien été créé');
        })
        .catch(() => {
          const actionToDispatch = sendFormRecipeUpError();
          store.dispatch(actionToDispatch);
        });
    }
      break;

    /**
     * Get the list of all ingredients
     */
    case FETCH_INGREDIENTS: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/ingredients`,
      })
        .then((res) => {
          const actionToDispatch = fetchIngredientsSucces(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch(() => {
          const actionToDispatch = fetchIngredientsError();

          return store.dispatch(actionToDispatch);
        });
    } break;

    /**
     * Get the list of all dish types
     */
    case FETCH_TYPE_DISH: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/categories/dish`,
      })
        .then((res) => {
          const actionToDispatch = fetchTypeDishSucces(res.data);

          return store.dispatch(actionToDispatch);
        });
    } break;

    /**
     * Get the list of all kitchen types
     */
    case FETCH_TYPE_KITCHEN: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/categories/kitchen`,
      })
        .then((res) => {
          const actionToDispatch = fetchTypeKitchenSucces(res.data);

          return store.dispatch(actionToDispatch);
        });
    } break;

    /**
     * Get all informations of a dish with it's ID, in order to edit it
     */
    case GET_A_DISH_TO_EDIT: {
      const dishId = action.payload;

      if (dishId) {
        axios({
          method: 'get',
          url: `${process.env.API_URL}/dishes/${action.payload}`,
        })
          .then((res) => {
            const actionToDispatch = updateADishToEdit(res.data);
            return store.dispatch(actionToDispatch);
          });
      }
    } break;

    /**
    * When the user type in city input, fetch cities in api
    */
    case DISH_FORM_FETCH_CITIES: {
      if (action.payload.length >= 3) {
        axios({
          method: 'get',
          url: `${process.env.API_URL}/city/${action.payload}`,
        })
          .then((res) => {
            const actionToDispatch = dishFetchCitiesSucces(res.data);
            return store.dispatch(actionToDispatch);
          });
      }
    } break;
    default:
      return next(action);
  }

  return false;
};
