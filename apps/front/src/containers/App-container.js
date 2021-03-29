import { connect } from 'react-redux';
import App from '../components/App';

// Actions
import { fetchTypeDish, fetchTypeKitchen, fetchIngredients } from '../actions/dishesForm';

const mapStateToProps = (state) => ({
  isLoginOpen: state.user.isLoginOpen,
  isSignUpOpen: state.user.isSignUpOpen,
});

const mapDispatchToProps = (dispatch) => ({
  getIngredients: () => dispatch(fetchIngredients()),
  fetchTypeDish: () => dispatch(fetchTypeDish()),
  fetchTypeKitchen: () => dispatch(fetchTypeKitchen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
