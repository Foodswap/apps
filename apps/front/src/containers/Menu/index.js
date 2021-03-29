import { connect } from 'react-redux';
import Menu from '../../components/Menu';
import { modalLoginFormToggle, modalSignUpFormToggle } from '../../actions/modals';
import { clearDishInformations } from '../../actions/dishesForm';
import { handleLogout, updateMenuBurgerStatus } from '../../actions/user';

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

  updateMenuBurgerStatus: () => {
    const action = updateMenuBurgerStatus();
    dispatch(action);
  },

  handleClickToCreateDish: (menuIsOpen) => {
    const action = openOrCloseMenuBurger(menuIsOpen);
    dispatch(action);

    const clearInfo = clearDishInformations();
    dispatch(clearInfo);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
