import { connect } from 'react-redux';
import SwapContent from '../../components/SwapContent';

import { fetchMyDishesSwap } from '../../actions/dishesForm';
import { getAskerDishId } from '../../actions/exchangeTracking';

const mapStateToProps = (state) => ({
  dishes: state.propositions.myDishesOnline,
  userLogged: state.user.infos.id,
  isSelected: state.propositions.isSelected
});

const mapDispatchToProps = (dispatch) => ({
  fetchMyDishesSwap: () => {
    const action = fetchMyDishesSwap();
    dispatch(action);
  },
  getAskerDishId: (id) => {
    const action = getAskerDishId(id);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SwapContent);
