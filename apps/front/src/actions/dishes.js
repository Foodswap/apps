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
