import { connect } from 'react-redux';
import SearchForm from '../../components/SearchForm';
import { setInputValue } from '../../actions/user';
import { sendSearchForm, setSelectValue } from '../../actions/search';

const mapStateToProps = (state) => ({
  city: state.search.city,
  kitchen: state.search.kitchen,
  dish: state.search.dish,
  isSearching: state.search.isSearching,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),
  handleSearch: (value, name) => dispatch(sendSearchForm(value, name)),
  handleSelectDish: (value, name) => dispatch(setSelectValue(value, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
