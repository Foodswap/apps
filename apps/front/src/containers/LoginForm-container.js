import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { setInputValue, sendLogin, handleLogout } from '../actions/auth-actions';
import { modalLoginFormToggle } from '../actions/modals-actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loggedMessage: state.user.loggedMessage,
  isLoginOpen: state.user.isLoginOpen,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),
  handleLogin: () => dispatch(sendLogin()),
  userLogout: () => dispatch(handleLogout()),
  loginFormToggle: () => {
    const action = modalLoginFormToggle();
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
