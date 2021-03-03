import { connect } from 'react-redux';
import Menu from '../../components/Menu';
import { modalLoginFormToggle, modalSignUpFormToggle } from '../../actions/modals';

const mapState = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatch = (dispatch) => ({
  loginFormToggle: () => {
    const action = modalLoginFormToggle();
    dispatch(action);
  },
  signUpFormToggle: () => {
    const action = modalSignUpFormToggle();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatch)(Menu);
