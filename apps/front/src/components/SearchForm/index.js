import React, { useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
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
}) => {
  useEffect(() => {
    fetchTypeDish();
    fetchTypeKitchen();
  }, []);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    location.href = `/results/${kitchen}/${dish}/${city}`;
    console.log('submit');
    handleSearch();
  };
  return (

    <div className="search-form-div">

      <h2 className="search-form-title">Cherchez un bon petit plat</h2>
      <form className="search-form-form" onSubmit={handleSubmit}>
        <select required name="dish" onChange={(evt) => handleSelectDish(evt.target.value, evt.target.name)}>
          { console.log(`dishData : ${dishData}`)}
          <option value="">Type d'assiette</option>
          { dishData && (
            dishData.map((dishObj) => (
              <option key={dishObj.id} value={dishObj.id} name={dishObj.name}>{dishObj.name}</option>
            )))}
        </select>
        <select required name="kitchen" onChange={(evt) => handleSelectDish(evt.target.value, evt.target.name)}>
          <option value="">Type de cuisine</option>

          { kitchenData && (
            kitchenData.map((kitchenObj) => (
              <option key={kitchenObj.id} value={kitchenObj.id} name={kitchenObj.name}>{kitchenObj.name}</option>
            ))
          )}
        </select>
        <input
          required
          className="search-form-input"
          type="text"
          name="city"
          value={city}
          placeholder="Ville"
          onChange={(evt) => {
            handleInputChange(evt.target.value, evt.target.name);
          }}
        />
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
  fetchTypeDish: PropTypes.func.isRequired,
  fetchTypeKitchen: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  kitchen: '',
  dish: '',
  city: '',
  dishData: null,
  kitchenData: null,
};

export default SearchForm;
