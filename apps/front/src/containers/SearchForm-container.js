import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import { setInputValue } from '../actions/auth-actions';
import {
  handleCheck,
  sendSearchForm,
  setSelectValue,
  fetchCities,
  clearCitiesInput,
  clearInputs,
  saveSelectedCity,
  handleAroundValue,
} from '../actions/search-actions';
import { fetchTypeDish, fetchTypeKitchen } from '../actions/dishesForm-actions';

const mapStateToProps = (state) => ({
  city: state.search.city,
  kitchen: state.search.kitchen,
  dish: state.search.dish,
  isSearching: state.search.isSearching,
  dishData: state.search.dishData,
  kitchenData: state.search.kitchenData,
  citiesData: state.search.citiesData,
  aroundChecked: state.search.aroundChecked,
  aroundValue: state.search.aroundValue,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (value, name) => dispatch(setInputValue(value, name)),
  handleSearch: (value, name) => dispatch(sendSearchForm(value, name)),
  handleSelectDish: (value, name) => dispatch(setSelectValue(value, name)),
  fetchTypeDish: () => dispatch(fetchTypeDish()),
  fetchTypeKitchen: () => dispatch(fetchTypeKitchen()),
  fetchCities: (value) => {
    dispatch(fetchCities(value));
  },
  clearCitiesInput: () => dispatch(clearCitiesInput()),
  saveSelectedCity: (value) => dispatch(saveSelectedCity(value)),
  clearInputs: () => dispatch(clearInputs()),
  handleCheck: () => dispatch(handleCheck()),
  handleAroundValue: (value) => dispatch(handleAroundValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
