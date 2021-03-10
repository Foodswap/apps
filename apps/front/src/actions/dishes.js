// Action pour supprimer un plat (une fiche de plat)
export const DELETE_ONE_DISH = 'DELETE_ONE_DISH';
export const deleteOneDish = (payload) => ({
  type: DELETE_ONE_DISH,
  payload,
});

// Action  pour la réussite de supression
export const DELETE_ONE_DISH_SUCCESS = 'DELETE_ONE_DISH_SUCCESS';
export const deleteOneDishSuccess = (payload) => ({
  type: DELETE_ONE_DISH_SUCCESS,
  payload,
});

// Action pour la supression non réussie
export const DELETE_ONE_DISH_ERROR = 'DELETE_ONE_DISH_ERROR';
export const deleteOneDishError = (payload) => ({
  type: DELETE_ONE_DISH_ERROR,
  payload,
});

// Action pour sélectionné un plat (par son id)
export const ONE_DISH_SELECT = 'ONE_DISH_SELECT';
export const oneDishSelect = (payload) => ({
  type: ONE_DISH_SELECT,
  payload,
});

// Action pour mettre à jour le plat sélectionné
export const UPDATE_SELECTED_DISH = 'UPDATE_SELECTED_DISH';
export const updateSElectedDish = (payload) => ({
  type: UPDATE_SELECTED_DISH,
  payload,
});

// Action pour récupérer les plats
export const GET_LIST_OF_DISHES = 'GET_LIST_OF_DISHES';
export const getListOfDishes = (payload) => ({
  type: GET_LIST_OF_DISHES,
  payload,
});

// Action pour mettre à jour de la liste des plats
export const UPDATE_LIST_OF_DISHES = 'UPDATE_LIST_OF_DISHES';
export const updateListOfDishes = (payload) => ({
  type: UPDATE_LIST_OF_DISHES,
  payload,
});

// Action pour cliqué sur le bouton swap pour affiché part la suite la modale
export const DISH_EXCHANGE = 'DISH_SWAP';
export const dishExchange = () => ({
  type: DISH_EXCHANGE,
});



