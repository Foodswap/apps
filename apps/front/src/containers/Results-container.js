import { connect } from 'react-redux';
import queryString from 'query-string';
import Results from '../components/Results';
import { fetchResults } from '../actions/search-actions';

const mapStateToProps = (state, ownProps) => {
  const queryStringParams = queryString.parse(ownProps.location.search);

  return {
    dishes: state.search.resultDishes,
    kitchenParam: queryStringParams.kitchen,
    dishParam: queryStringParams.dish,
    cityParam: queryStringParams.city,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getResults: (kitchenParam, dishParam, cityParam) => {
    const action = fetchResults(kitchenParam, dishParam, cityParam);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
