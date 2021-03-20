/* eslint-disable no-lone-blocks */
import axios from 'axios';
import { set } from 'date-fns';
import { resetWarningCache } from 'prop-types';
import { toast } from 'react-toastify';

import {
  DELETE_ONE_DISH,
  ONE_DISH_SELECT,
  // DISH_EXCHANGE,
  GET_LIST_OF_DISHES,
  GET_ALL_DISHES_FROM_A_USER,
  deleteOneDishSuccess,
  deleteOneDishError,
  updateSElectedDish,
  updateListOfDishes,
  // dishExchange,
  updateAllDishesFromAUser,
} from '../actions/dishes';
import { SEND_SEARCH_FORM, FETCH_RESULTS, fetchResultsSucces, FETCH_CATEGORIES, fetchCategoriesSucces } from '../actions/search';

import {
  CANCEL_FORM_RECIPE,
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
  FETCH_MY_DISHES_SWAP,
  fetchMyDishesSwapSucces,
  GET_A_DISH_TO_EDIT,
  updateADishToEdit,
  clearDishInformations,
  // cancelSuccess,
} from '../actions/dishesForm';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_ONE_DISH: {
      const { userDishes } = store.getState().recipes;
      // eslint-disable-next-line no-console
      console.log(userDishes);

      const dishIndexToRemove = userDishes.findIndex((dish) => dish.id === action.payload);

      if (dishIndexToRemove !== -1) {
        userDishes.splice(dishIndexToRemove, 1);
        const actionToDispatch = deleteOneDishSuccess(userDishes);
        // console.log(userDishes);

        return store.dispatch(actionToDispatch);
      }

      const actionToDispatch = deleteOneDishError();
      return store.dispatch(actionToDispatch);
    }
    // eslint-disable-next-line no-lone-blocks
    case ONE_DISH_SELECT: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/meals/${action.payload}`,
      })
        .then((res) => {
          console.log(`response ok : ${res}`);
          const actionToDispatch = updateSElectedDish(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(`${error} error on get one dish`);
        })
        .finally(() => {
          console.log('login done');
        });
    } break;
    // eslint-disable-next-line no-lone-blocks
    // get last 6 dishes
    case GET_LIST_OF_DISHES: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/sixMeals`,
      })
        .then((res) => {
          console.log(`response ok : ${res}`);
          const actionToDispatch = updateListOfDishes(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(`${error} error on get last dishes`);
        });
    } break;
    // case DISH_EXCHANGE: {
    //   const { userDishes } = store.getState().recipes;
    //   const actionToDispatch = dishExchange(userDishes);
    //   return store.dispatch(actionToDispatch);
    // };
    case FETCH_RESULTS: {
      
      axios({
        method: 'get',
        url: `${process.env.API_URL}/meals/${action.payload.kitchenParam.toLowerCase()}/${action.payload.dishParam.toLowerCase()}/${action.payload.cityParam.toLowerCase()}`,
      })
      .then((res) => {
        console.log("ok send search " + res.data);
        const actionToDispatch = fetchResultsSucces(res.data);
        return store.dispatch(actionToDispatch);
      })
      .catch((error) => {
        console.log(error)
      });
    };
    // case FETCH_CATEGORIES: {
    //   console.log("action payload " + action.payload);
    //   axios({
    //     method: 'get',
    //     url: `http://localhost:3000/category`,
    //   })
    //   .then((res) => {
    //     console.log("ok send search category " + res.data);
    //     const actionToDispatch = fetchCategoriesSucces(res.data);
    //     return store.dispatch(actionToDispatch);
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   });
    // }
    case SEND_FORM_RECIPE_UP: {
      const {
        dishId,
        picture,
        name,
        description,
        ingredients,
        portion,
        city,
        author,
        dish,
        kitchen,
        online,
      } = store.getState().dishes;

      const { infos } = store.getState().user;
      console.log('send form middleware');

      console.log(picture,
        name,
        description,
        ingredients,
        portion,
        city,
        author,
        dish,
        kitchen,
        online);

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

      axios({
        method: dishId ? 'put' : 'post',
        url: dishId ? `${process.env.API_URL}/meals/${dishId}` : `${process.env.API_URL}/meals`,
        //! \\ Fake API
        // url: dishId ? `http://localhost:3000/dishes/${dishId}` : `${process.env.API_URL}/meals`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((res) => {
          console.log(`response ok : ${res}`);
          const actionToDispatch = sendFormRecipeUpSuccess();
          store.dispatch(actionToDispatch);
          setTimeout(() => {
            // eslint-disable-next-line no-restricted-globals
            location.href = '/v1/mydishes';
          }, 200);
          console.log(res.data);
          toast.success('Votre plat a bien été créé');
        })
        .catch((error) => {
          console.log(`${error} erreur au post du formulaire`);
          const actionToDispatch = sendFormRecipeUpError();
          store.dispatch(actionToDispatch);
        })
        .finally(() => {
          console.log('post form done');
        });
    }
      break;
    // eslint-disable-next-line no-lone-blocks
    case FETCH_INGREDIENTS: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/ingredients`,
      })
        .then((res) => {
        // console.log("ok send search ingredients " + res.data);
        // console.dir(res.data);
          const actionToDispatch = fetchIngredientsSucces(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
          const actionToDispatch = fetchIngredientsError();
          return store.dispatch(actionToDispatch);
        });
    } break;
    // eslint-disable-next-line no-lone-blocks
    case FETCH_TYPE_DISH: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/categories/dish`,
      })
        .then((res) => {
          const actionToDispatch = fetchTypeDishSucces(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
        });
    } break;
    // eslint-disable-next-line no-lone-blocks
    case FETCH_TYPE_KITCHEN: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/categories/kitchen`,
      })
        .then((res) => {
          console.log(res.data);
          const actionToDispatch = fetchTypeKitchenSucces(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
        });
    }
      break;
    case FETCH_MY_DISHES_SWAP: {
      const { picture, name } = store.getState().dishes;
      const { infos, pseudonym } = store.getState().user;
      axios({
        method: 'get',
        // url: `http://localhost:3000/dishes?author.id=${infos.id}`,
        url: `${process.env.API_URL}/meals/author/${infos.id}`,
      })
        .then((res) => {
          console.log(res.data);
          const actionToDispatch = fetchMyDishesSwapSucces(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log('fetch dishes swap done');
        });
    }
      break;
    case GET_ALL_DISHES_FROM_A_USER: {
      //! \\ sur fake API
      axios({
        method: 'get',
        url: `${process.env.API_URL}/meals/author/${action.payload}`,
        // url: `http://localhost:3000/dishes?author.id=${action.payload}`,
      })
        .then((res) => {
          console.log(action.payload);
          console.log(res.data);
          const actionToDispatch = updateAllDishesFromAUser(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
        });
    } break;
    case GET_A_DISH_TO_EDIT: {
      const dishId = action.payload;
      //! \\ sur fake API
      if (dishId) {
        axios({
          method: 'get',
          url: `${process.env.API_URL}/meals/${action.payload}`,
          // url: `http://localhost:3000/dishes?id=${dishId}`,
        })
          .then((res) => {
            console.log(action.payload);
            console.log(res.data);
            const actionToDispatch = updateADishToEdit(res.data);
            return store.dispatch(actionToDispatch);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      else {
        const actionToDispatch = clearDishInformations();
        return store.dispatch(actionToDispatch);
      }
    } break;
      /*     case CANCEL_FORM_DISH: {
      .then((res) => {
        console.log(`response ok : ${res}`);
        const actionToDispatch = cancelSuccessDish();
        store.dispatch(actionToDispatch);
      })
      .catch((error) => {
        console.log(`${error} erreur sur l'annulation`);
      })
      .finally(() => {
        console.log('post form done');
      });
    } break; */
    default:
      return next(action);
  }
};
