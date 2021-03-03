import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { setInputValue, sendLogin, handleLogout } from '../../actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loggedMessage: state.user.loggedMessage,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),
  handleLogin: () => dispatch(sendLogin()),
  userLogout: () => dispatch(handleLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
