import { connect } from 'react-redux';
import SwapContent from '../../components/SwapContent';

import { fetchMyDishesSwap } from '../../actions/dishesForm';
import { getAskerDishId, sendProposition } from '../../actions/exchangeTracking';

const mapStateToProps = (state, ownProps) => ({
  dishes: state.propositions.myDishesOnline,
  userLogged: state.user.infos.id,
  isSelected: state.propositions.isSelected,
  succesPropositionMsg: state.propositions.succesPropositionMsg,
  errorPropositionMsg: state.propositions.errorPropositionMsg,
  // requested_meal_id: ownProps.match.params.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMyDishesSwap: () => {
    const action = fetchMyDishesSwap();
    dispatch(action);
  },
  getAskerDishId: (id) => {
    const action = getAskerDishId(id);
    dispatch(action);
  },
  sendProposition: () => {
    const action = sendProposition();
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SwapContent);
