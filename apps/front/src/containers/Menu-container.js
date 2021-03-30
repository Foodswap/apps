import { connect } from 'react-redux';
import { clearDishInformations } from '../actions/dishesForm-actions';
import Menu from '../components/Menu';
import { modalLoginFormToggle, modalSignUpFormToggle } from '../actions/modals-actions';
import { handleLogout, updateMenuBurgerStatus } from '../actions/auth-actions';

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

  updateMenuBurgerStatus: (menuIsOpen) => {
    const action = updateMenuBurgerStatus(menuIsOpen);
    dispatch(action);
  },

  handleClickToCreateDish: (menuIsOpen) => {
    const menuBurgerCloseOrOpen = updateMenuBurgerStatus(menuIsOpen);
    dispatch(menuBurgerCloseOrOpen);

    const clearInfo = clearDishInformations();
    dispatch(clearInfo);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
