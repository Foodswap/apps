import { connect } from 'react-redux';
import DisplayADish from '../components/DisplayADish';

import { oneDishSelect } from '../actions/dishes-actions';

const mapStateToProps = (state, ownProps) => ({
  dish: state.recipes.dishSelect,
  dishId: ownProps.match.params.id,
});

const mapDispatchToProps = (dispatch) => ({
  getOneDish: (id) => {
    const action = oneDishSelect(id);
    dispatch(action);
  },
/*   dishSwap: () => {
    const action = dishExchange();
    dispatch(action);
  }, */
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayADish);
