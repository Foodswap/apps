import { connect } from 'react-redux';
import imageCompression from 'browser-image-compression';

import DishesForm from '../components/DishesForm';
import {
  setIngredient,
  setInputValue,
  sendFormRecipeUp,
  setCategorySelect,
  changeStatus,
  getADishToEdit,
  handleUpdatePicture,
  resizeImage,
  dishFetchCities,
  dishClearCitiesInput,
  dishSaveSelectedCity,
} from '../actions/dishesForm-actions';

const mapStateToProps = (state, ownProps) => ({
  dishIdToEdit: ownProps.match && ownProps.match.params.id ? +ownProps.match.params.id : null,
  dishId: state.dishesForm.dishId,
  dataFormMeal: state.dishesForm.dataFormMeal,
  isLogged: state.dishesForm.isLogged,
  loggedMessage: state.dishesForm.loggedMessage,
  picture: state.dishesForm.picture,
  name: state.dishesForm.name,
  portion: state.dishesForm.portion,
  description: state.dishesForm.description,
  city: state.dishesForm.city,
  author: state.dishesForm.author,
  ingredients: state.dishesForm.ingredients,
  dish: state.dishesForm.dish,
  kitchen: state.dishesForm.kitchen,
  online: state.dishesForm.online,
  isSucces: state.dishesForm.isSucces,
  isError: state.dishesForm.isError,
  ingredientsData: state.dishesForm.ingredientsData,
  dishData: state.dishesForm.dishData,
  kitchenData: state.dishesForm.kitchenData,
  selectedIngredients: state.dishesForm.selectedIngredients,
  previewPicture: state.dishesForm.previewPicture,
  citiesData: state.dishesForm.citiesData,

});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),

  onFormSubmit: (value, name) => dispatch(sendFormRecipeUp(value, name)),

  onSetCategorySelect: (value, name) => dispatch(setCategorySelect(value, name)),

  changeOnline: (online) => {
    const action = changeStatus(online);
    dispatch(action);
  },

  handleMultiSelectChange: (ingredients, { action }) => {
    switch (action) {
      case 'select-option':
      case 'remove-value':
        dispatch(setIngredient(ingredients));
        break;
      default:
    }
  },

  getADish: (dishId) => {
    const action = getADishToEdit(dishId);
    dispatch(action);
  },

  handleUpdatePicture: (picture) => dispatch(handleUpdatePicture(picture)),

  resizeImage: (picture) => {
    const options = {
      maxSizeMB: 0.1,
      maxWidthOrHeight: 650,
      useWebWorker: true,
    };
    imageCompression(picture, options)
      .then((compressedFile) => {
        dispatch(resizeImage(compressedFile));
      });
  },
  dishFetchCities: (value) => {
    dispatch(dishFetchCities(value));
  },
  dishClearCitiesInput: () => dispatch(dishClearCitiesInput()),
  dishSaveSelectedCity: (value) => dispatch(dishSaveSelectedCity(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DishesForm);
