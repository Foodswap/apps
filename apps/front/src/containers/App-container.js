import { connect } from 'react-redux';
import App from '../components/App';

// Actions
import { fetchTypeDish, fetchTypeKitchen, fetchIngredients } from '../actions/dishesForm-actions';
import { saveLocation } from '../actions/auth-actions';

const mapStateToProps = (state) => ({
  isLoginOpen: state.user.isLoginOpen,
  isSignUpOpen: state.user.isSignUpOpen,
  kitchenId: state.search.kitchen,
  dishId: state.search.dish,
  city: state.search.city,
});

const mapDispatchToProps = (dispatch) => ({
  getIngredients: () => dispatch(fetchIngredients()),
  fetchTypeDish: () => dispatch(fetchTypeDish()),
  fetchTypeKitchen: () => dispatch(fetchTypeKitchen()),
  saveLocation: (position) => {
    dispatch(saveLocation(position));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
