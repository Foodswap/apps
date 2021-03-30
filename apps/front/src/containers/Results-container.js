import { connect } from 'react-redux';
import Results from '../components/Results';
import { fetchResults } from '../actions/search-actions';

const mapStateToProps = (state, ownProps) => ({
  dishes: state.search.resultDishes,
  kitchenParam: ownProps.match.params.kitchen,
  dishParam: ownProps.match.params.dish,
  cityParam: ownProps.match.params.city,
});

const mapDispatchToProps = (dispatch) => ({
  getResults: (kitchenParam, dishParam, cityParam) => {
    const action = fetchResults(kitchenParam, dishParam, cityParam);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
