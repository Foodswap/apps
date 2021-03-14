import { connect } from 'react-redux';
import SwapContent from '../../components/SwapContent';

import { fetchMyDishesSwap } from '../../actions/dishesForm';

const mapStateToProps = (state) => ({
  dishes: state.propositions.myDishesOnline,
  userLogged: state.user.infos.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMyDishesSwap: () => {
    const action = fetchMyDishesSwap();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SwapContent);
