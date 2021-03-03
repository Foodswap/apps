import { connect } from 'react-redux';
import Menu from '../../components/Menu';

const mapState = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatch = {};

export default connect(mapState, mapDispatch)(Menu);
