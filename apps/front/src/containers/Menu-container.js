import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { modalLoginFormToggle, modalSignUpFormToggle } from '../actions/modals-actions';
import { handleLogout, openOrCloseMenuBurger } from '../actions/auth-actions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  username: state.user.pseudonym,
  menuIsOpen: state.user.menuIsOpen,
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

  openOrCloseMenuBurger: (menuIsOpen) => {
    const action = openOrCloseMenuBurger(menuIsOpen);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
