import { connect } from 'react-redux';
import LastDishes from '../components/LastDishes';

import { getListOfDishes } from '../actions/dishes-actions';

const mapStateToProps = (state) => ({
  dishes: state.dishes.lastDishes,
});

const mapDispatchToProps = (dispatch) => ({
  getListDishes: () => {
    const action = getListOfDishes();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LastDishes);
