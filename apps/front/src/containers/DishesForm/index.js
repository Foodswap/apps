import { connect } from 'react-redux';
import DishesForm from '../../components/DishesForm';
import {
  setIngredient,
  setInputValue,
  sendFormRecipeUp,
  setCategorySelect,
  changeStatus,
  fetchIngredients,
  handleMultiSelectChange,
  fetchTypeDish,
  fetchTypeKitchen,
  getADishToEdit,
  handleUpdatePicture,
  // cancelFormDish,
} from '../../actions/dishesForm';

const mapStateToProps = (state, ownProps) => ({
  dishId: ownProps.match ? +ownProps.match.params.id : null,
  dataFormMeal: state.dishes.dataFormMeal,
  isLogged: state.dishes.isLogged,
  loggedMessage: state.dishes.loggedMessage,
  picture: state.dishes.picture,
  name: state.dishes.name,
  portion: state.dishes.portion,
  description: state.dishes.description,
  city: state.dishes.city,
  author: state.dishes.author,
  ingredients: state.dishes.ingredients,
  dish: state.dishes.dish,
  kitchen: state.dishes.kitchen,
  online: state.dishes.online,
  isSucces: state.dishes.isSucces,
  isError: state.dishes.isError,
  ingredientsData: state.dishes.ingredientsData,
  dishData: state.dishes.dishData,
  kitchenData: state.dishes.kitchenData,
  selectedIngredients: state.dishes.selectedIngredients,
  previewPicture: state.dishes.previewPicture,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),

  onFormSubmit: (value, name) => dispatch(sendFormRecipeUp(value, name)),

  onSetCategorySelect: (value, name) => dispatch(setCategorySelect(value, name)),

  changeOnline: () => dispatch(changeStatus()),

  getIngredients: () => dispatch(fetchIngredients()),
  handleMultiSelectChange: (ingredients, { action }) => {
    console.log(action);
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

/*   cancelAction: () => {
    const action = cancelFormDish();
    dispatch(action);
  }, */
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DishesForm);
