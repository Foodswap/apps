import { connect } from 'react-redux';
import SignUpForm from '../../components/SignUpForm';
import { setInputValue } from '../../actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  pseudo: state.user.pseudo,
  city: state.user.city,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),
  // handleSignUp: () => dispatch(sendLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
