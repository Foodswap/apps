import { connect } from 'react-redux';
import App from '../components/App';

// Actions
import { fetchTypeDish, fetchTypeKitchen, fetchIngredients } from '../actions/dishesForm-actions';
import { saveLocation, saveLocationOnApi } from '../actions/auth-actions';

const mapStateToProps = (state) => ({
  isLoginOpen: state.user.isLoginOpen,
  isSignUpOpen: state.user.isSignUpOpen,
});

const mapDispatchToProps = (dispatch) => ({
  getIngredients: () => dispatch(fetchIngredients()),
  fetchTypeDish: () => dispatch(fetchTypeDish()),
  fetchTypeKitchen: () => dispatch(fetchTypeKitchen()),
  saveLocation: (position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    dispatch(saveLocation(position));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
