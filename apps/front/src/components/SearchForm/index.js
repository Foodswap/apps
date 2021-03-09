import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
const SearchForm = () => {
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
          <option value="asiatique" name="entree">Asiatique</option>
          <option value="mexicaine" name="plats">Mexicaine</option>
          <option value="orientale" name="dessert">Orientale</option>
        </select>
        <input className="search-form-input" type="text" name="input-city" value="city" placeholder="Ville"></input>
        <button type="submit"> Valider </button>
      </form>
    </div>
  
  )
}



SearchForm.propTypes = {};
export default SearchForm;
