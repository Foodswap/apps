import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { setInputValue, sendLogin } from '../../actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),
  handleLogin: () => dispatch(sendLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
