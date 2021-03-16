import { connect } from 'react-redux';
import Menu from '../../components/Menu';
import { modalLoginFormToggle, modalSignUpFormToggle } from '../../actions/modals';
import { handleLogout } from '../../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.pseudonym,
});

const mapDispatchToProps = (dispatch) => ({
  loginFormToggle: () => {
    const action = modalLoginFormToggle();
    dispatch(action);
  },
  signUpFormToggle: () => {
    const action = modalSignUpFormToggle();
    dispatch(action);
  },
  userLogout: () => dispatch(handleLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
