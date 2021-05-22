import { connect } from 'react-redux';
import Footer from '../components/Footer/index';

import { getLastDishes } from '../actions/footer-actions';

const mapStateToProps = (state) => ({
  dishes: state.footer.footerLastDishes,
});

const mapDispatchToProps = (dispatch) => ({
  getLastDishes: () => {
    const action = getLastDishes();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
