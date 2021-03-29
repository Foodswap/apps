import { connect } from 'react-redux';
import DishesForm from '../components/DishesForm';
import {
  setIngredient,
  setInputValue,
  sendFormRecipeUp,
  setCategorySelect,
  changeStatus,
  fetchIngredients,
  fetchTypeDish,
  fetchTypeKitchen,
  getADishToEdit,
  handleUpdatePicture,
  // cancelFormDish,
} from '../actions/dishesForm-actions';

const mapStateToProps = (state, ownProps) => ({
  dishId: ownProps.match ? +ownProps.match.params.id : null,
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
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),

  onFormSubmit: (value, name) => dispatch(sendFormRecipeUp(value, name)),

  onSetCategorySelect: (value, name) => dispatch(setCategorySelect(value, name)),

  changeOnline: () => dispatch(changeStatus()),

  getIngredients: () => dispatch(fetchIngredients()),
  handleMultiSelectChange: (ingredients, { action }) => {
    switch (action) {
      case 'select-option':
      case 'remove-value':
        dispatch(setIngredient(ingredients));
        break;
      default:
    }
  },

  fetchTypeDish: () => dispatch(fetchTypeDish()),

  fetchTypeKitchen: () => dispatch(fetchTypeKitchen()),

  getADish: (dishId) => {
    const action = getADishToEdit(dishId);
    dispatch(action);
  },

  handleUpdatePicture: (picture) => dispatch(handleUpdatePicture(picture)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DishesForm);
