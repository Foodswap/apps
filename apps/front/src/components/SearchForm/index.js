import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const SearchForm = ({handleInputChange, city}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submit")
  }
  return (
    <div className="search-form-div"> 
    <h2 className="search-form-title">Cherchez un bon petit plat</h2>
      <form className="search-form-form" onSubmit={handleSubmit}>
        <select name="catogery-dish">
          <option value="">Type d'assiette</option>
          <option value="entree" name="entree">Entrée</option>
          <option value="plats" name="plats">Plats</option>
          <option value="dessert" name="dessert">Dessert</option>
        </select>
        <select name="catogery-kitchen">
          <option value="">Type de cuisine</option>
          <option value="asiatique" name="asiatique">Asiatique</option>
          <option value="mexicaine" name="mexicaine">Mexicaine</option>
          <option value="orientale" name="orientale">Orientale</option>
        </select>
        <input 
          className="search-form-input" 
          type="text" name="city"
          value={city} placeholder="Ville" 
          onChange={(evt) => {
                handleInputChange(evt.target.value, evt.target.name);
          }}>
              
        </input>
        <button type="submit"> Valider </button>
      </form>
    </div>
  
  )
}



SearchForm.propTypes = {};
export default SearchForm;
