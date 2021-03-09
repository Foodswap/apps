import { connect } from 'react-redux';
import DishesForm from '../../components/DishesForm';
import { setInputValue } from '../../actions/dishesForm';

const mapStateToProps = (state) => ({
  dataFormMeal: state.dishes.dataFormMeal,
  isLogged: state.dishes.isLogged,
  loggedMessage: state.dishes.loggedMessage,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (value, name) => dispatch(setInputValue(value, name)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DishesForm);
