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

// Action pour cliqué sur le bouton swap pour affiché part la suite la modale
export const DISH_EXCHANGE = 'DISH_SWAP';
export const dishExchange = () => ({
  type: DISH_EXCHANGE,
});
