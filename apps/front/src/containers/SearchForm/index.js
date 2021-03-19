import { connect } from 'react-redux';
import SearchForm from '../../components/SearchForm';
import { setInputValue } from '../../actions/user';
import { sendSearchForm, setSelectValue } from '../../actions/search';
import { fetchTypeDish, fetchTypeKitchen } from '../../actions/dishesForm';


const mapStateToProps = (state) => ({
  city: state.search.city,
  kitchen: state.search.kitchen,
  dish: state.search.dish,
  isSearching: state.search.isSearching,
  dishData: state.search.dishData,
  kitchenData: state.search.kitchenData,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),
  handleSearch: (value, name) => dispatch(sendSearchForm(value, name)),
  handleSelectDish: (value, name) => dispatch(setSelectValue(value, name)),
  fetchTypeDish: () => dispatch(fetchTypeDish()),
  fetchTypeKitchen: () => dispatch(fetchTypeKitchen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
