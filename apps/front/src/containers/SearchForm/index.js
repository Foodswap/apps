import { connect } from 'react-redux';
import SearchForm from '../../components/SearchForm';
import { setInputValue } from '../../actions/user';
import { sendSearchForm, setSelectValue, fetchCategories } from '../../actions/search';

const mapStateToProps = (state) => ({
  city: state.search.city,
  kitchen: state.search.kitchen,
  dish: state.search.dish,
  isSearching: state.search.isSearching,
  typeKitchen: state.search.typeKitchen,
  typeDish: state.search.typeDish,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),
  handleSearch: (value, name) => dispatch(sendSearchForm(value, name)),
  handleSelectDish: (value, name) => dispatch(setSelectValue(value, name)),
  getCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
