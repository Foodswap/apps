import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { setInputValue, sendSignUp } from '../actions/auth-actions';
import { modalSignUpFormToggle, modalLoginFormToggle } from '../actions/modals-actions';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  pseudonym: state.user.pseudonym,
  city: state.user.city,
  loggedMessage: state.user.loggedMessage,
  isSignUpOpen: state.user.isSignUpOpen,
  signUpSuccesMessage: state.user.signUpSuccesMessage,
  signUpIsValid: state.user.signUpIsValid,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),
  handleSignUp: (value, name) => dispatch(sendSignUp(value, name)),
  signUpFormToggle: () => {
    const action = modalSignUpFormToggle();
    dispatch(action);
  },
  loginFormToggle: () => {
    const action = modalLoginFormToggle();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
