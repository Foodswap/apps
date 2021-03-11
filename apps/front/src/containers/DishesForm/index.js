import { connect } from 'react-redux';
import DishesForm from '../../components/DishesForm';
import { setInputValue, sendFormRecipeUp, setCategorySelect, changeStatus } from '../../actions/dishesForm';

const mapStateToProps = (state) => ({
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
  isError: state.dishes.isError
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),
  onFormSubmit: (value, name) => dispatch(sendFormRecipeUp(value, name)),
  onSetCategorySelect: (value, name) => dispatch(setCategorySelect(value, name)),
  changeOnline: () => dispatch(changeStatus()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DishesForm);
