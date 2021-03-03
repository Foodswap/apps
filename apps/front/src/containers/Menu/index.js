import { connect } from 'react-redux';
import Menu from '../../components/Menu';
import { modalLoginFormToggle } from '../../actions/modals';

const mapState = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatch = (dispatch) => ({
  loginFormToggle: () => {
    const action = modalLoginFormToggle();
    dispatch(action);
  },
  // signUpFormToggle: dispatch(modalsFormToggle()),
});

export default connect(mapState, mapDispatch)(Menu);
