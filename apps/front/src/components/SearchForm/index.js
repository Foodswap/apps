import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
const SearchForm = ({handleInputChange, city, handleSearch, kitchen, dish, isSearching, handleSelectDish}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submit");
    handleSearch();
  }
  return (
    <div className="search-form-div"> 
    <h2 className="search-form-title">Cherchez un bon petit plat</h2>
    
      <p> Vous recherchez un(e) {dish}, de type de cuisine {kitchen}, à {city}</p>
    
      <form className="search-form-form" onSubmit={handleSubmit}>
        <select name="dish" onChange={(evt) => handleSelectDish(evt.target.value, evt.target.name)}>
          <option value="">Type d'assiette</option>
          <option value="entree" name="entree">Entrée</option>
          <option value="plats" name="plats">Plats</option>
          <option value="dessert" name="dessert">Dessert</option>
        </select>
        <select name="kitchen" onChange={(evt) => handleSelectDish(evt.target.value, evt.target.name)}>
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
        <Link to="/results">
          <button type="submit" onSubmit={(evt) => {
            evt.preventDefault();
            <Redirect to="/results" />
          }}> Valider </button>
        </Link>
      </form>
    </div>
  
  )
}



SearchForm.propTypes = {};
export default SearchForm;
