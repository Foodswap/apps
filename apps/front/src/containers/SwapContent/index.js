import { connect } from 'react-redux';
import SwapContent from '../../components/SwapContent';

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

export default connect(mapStateToProps, mapDispatchToProps)(SwapContent);
