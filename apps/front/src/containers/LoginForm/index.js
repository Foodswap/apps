import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';

const mapStateToProps = (state) => ({
  email: state.userReducer.email,
  password: state.userReducer.password,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),
  handleLogin: () => dispatch(sendLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
