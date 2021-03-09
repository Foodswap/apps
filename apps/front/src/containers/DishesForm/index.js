import { connect } from 'react-redux';
import MealForm from '../../components/MealForm';
import { setInputValue } from '../../actions/formRecipe';

const mapStateToProps = (state) => ({
  dataFormMeal: state.formRecipe.dataFormMeal,
  isLogged: state.formRecipe.isLogged,
  loggedMessage: state.formRecipe.loggedMessage,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (value, name) => dispatch(setInputValue(value, name)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealForm);
