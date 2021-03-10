import { connect } from 'react-redux';
import LastDishes from '../../components/LastDishes';

import { getListOfDishes } from '../../actions/dishes';

const mapStateToProps = (state) => ({
  dishes: state.recipes.lastDishes,
});

const mapDispatchToProps = (dispatch) => ({
  getListDishes: () => {
    const action = getListOfDishes();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LastDishes);
