import { connect } from 'react-redux';
import SignUpForm from '../../components/SignUpForm';
import { setInputValue, sendSignUp } from '../../actions/user';
import loginFormToggle from '../../actions/modals';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  pseudo: state.user.pseudo,
  city: state.user.city,
  // loggedMessage: state.user.loggedMessage,
  isOpen: state.user.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),
  handleSignUp: (value, name) => dispatch(sendSignUp(value, name)),
  // signUpFormToggle: dispatch(modalsFormToggle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
