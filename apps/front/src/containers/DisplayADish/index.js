import { connect } from 'react-redux';
import DisplayADish from '../../components/DisplayADish';

import { dishExchange } from '../../actions/dishes';

const mapStateToProps = (state) => ({
  dish: state.recipes.dishSelect,
});

const mapDispatchToProps = (dispatch) => ({
  dishSwap: () => {
    const action = dishExchange();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayADish);
