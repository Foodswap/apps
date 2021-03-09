import { connect } from 'react-redux';
import SearchForm from '../../components/SearchForm';
import { setInputValue } from '../../actions/user';

const mapStateToProps = (state) => ({
  city: state.search.city,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
