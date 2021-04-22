import React, { useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import Highlighter from 'react-highlight-words';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import PropTypes from 'prop-types';
import './style.scss';

// !! TODO : propTypes

const SearchForm = ({
  handleInputChange,
  city,
  handleSearch,
  kitchen,
  dish,
  handleSelectDish,
  dishData,
  kitchenData,
  fetchTypeDish,
  fetchTypeKitchen,
  fetchCities,
  citiesData,
  clearCitiesInput,
  saveSelectedCity,
  clearInputs,
  handleCheck,
  aroundChecked,
  handleAroundValue,
  aroundValue,
}) => {
  useEffect(() => {
    fetchTypeDish();
    fetchTypeKitchen();
    clearInputs();
  }, []);

  const latitudeStorage = localStorage.getItem('latitude');
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      kitchen,
      dish,
      city,
    };

    const searchParams = new URLSearchParams(data);

    location.href = `/v1/results?${searchParams}`;
    handleSearch();
  };

  const getSuggestion = (suggestion) => {
    handleInputChange(suggestion.name, 'city');
    saveSelectedCity(suggestion);
  };

  const inputProps = {
    placeholder: 'Votre ville',
    value: city,
    type: 'search',
    name: 'city',
    className: 'search-form-input',
    onChange: (evt) => {
      handleInputChange(evt.target.value, evt.target.name);
      fetchCities(evt.target.value);
    },
  };

  const onSuggestionsFetchRequested = (value, reason) => {
    // console.log(value, reason);
  };

  const renderSuggestion = (suggestion) => (
    <div>
      <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={[city]}
        autoEscape
        caseSensitive={false}
        textToHighlight={suggestion.name}
      />
    </div>
  );

  return (

    <div className="search-form-div">

      <h2 className="search-form-title">Cherchez un bon petit plat</h2>
      <form className="search-form-form" onSubmit={handleSubmit}>
        <select name="dish" onChange={(evt) => handleSelectDish(evt.target.value, evt.target.name)}>
          <option value="">Type d'assiette</option>
          { dishData && (
            dishData.map((dishObj) => (
              <option key={dishObj.id} value={dishObj.id} name={dishObj.name}>
                {dishObj.name}
              </option>
            )))}
        </select>
        <select name="kitchen" onChange={(evt) => handleSelectDish(evt.target.value, evt.target.name)}>
          <option value="">Type de cuisine</option>

          { kitchenData && (
            kitchenData.map((kitchenObj) => (
              <option key={kitchenObj.id} value={kitchenObj.id} name={kitchenObj.name}>
                {kitchenObj.name}
              </option>
            ))
          )}
        </select>

        {!aroundChecked && (
          <Autosuggest
            suggestions={citiesData}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={clearCitiesInput}
            getSuggestionValue={getSuggestion}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        )}

        { latitudeStorage && (
          <div className="search-around-container">
            <input type="checkbox" id="around" name="around" onClick={handleCheck} />
            <label htmlFor="around" className="search-form-around-label">Autour de moi</label>
            { aroundValue !== null && (
              <p className="search-form-around-value"> { aroundValue } km</p>
            )}

            {aroundChecked && (
              <Slider
                min={1}
                max={100}
                defaultValue={0}
                overlay={`${aroundValue} km`}
                className="search-form-around-slider"
                onChange={(value) => {
                  console.log(value);
                  handleAroundValue(value);
                }}
              />
            )}
          </div>

        )}

        <button
          className="search-form-button"
          type="submit"
          onSubmit={(evt) => {
            evt.preventDefault();
            // history.push(`/results/${kitchen}/${dish}/${city}`);
            handleSubmit();
          }}
        > Valider
        </button>

      </form>
    </div>

  );
};

SearchForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  city: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
  kitchen: PropTypes.string,
  dish: PropTypes.string,
  handleSelectDish: PropTypes.func.isRequired,
  dishData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  kitchenData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  citiesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  fetchTypeDish: PropTypes.func.isRequired,
  fetchTypeKitchen: PropTypes.func.isRequired,
  fetchCities: PropTypes.func.isRequired,
  clearCitiesInput: PropTypes.func.isRequired,
  saveSelectedCity: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  kitchen: '',
  dish: '',
  city: '',
  dishData: null,
  kitchenData: null,
  citiesData: null,
};

export default SearchForm;
