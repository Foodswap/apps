import { connect } from 'react-redux';
import ExchangeTracking from '../../components/ExchangeTracking';

import {
  getOfExchangeList,
  updateActiveTab,
  getClickOnAccept,
  getClickOnRefuse,
} from '../../actions/exchangeTracking';

const mapStateToProps = (state) => ({
  askedPropositions: state.propositions.askedPropositions,
  receivedPropositions: state.propositions.receivedPropositions,
  activeTab: state.propositions.activeTab,
  userId: state.user.infos.id,
});

const mapDispatchToProps = (dispatch) => ({
  getExchangeList: (userId) => {
    const action = getOfExchangeList(userId);
    dispatch(action);
  },
  getActiveTab: (activeTab) => {
    const action = updateActiveTab(activeTab);
    dispatch(action);
  },
  getClickAccept: (propositionId, userId) => {
    const action = getClickOnAccept(propositionId, userId);
    dispatch(action);
  },
  getClickRefuse: (propositionId, userId) => {
    const action = getClickOnRefuse(propositionId, userId);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeTracking);
