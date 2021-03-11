import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from "react";
import './style.scss';
// import image from '../../assets/images/logo-fooswap.png';
import { cancelFormRecipe, sendFormRecipeUp, setInputValue } from '../../actions/dishesForm';
const DishesForm = ({
  picture,
  name,
  description,
  ingredients,
  portion,
  city,
  author,
  dish,
  kitchen,
  handleInputChange,
  onFormSubmit,
  onSetCategorySelect,
  isSucces,
  isError,
  changeOnline
}) => {
  const imageHandler = (evt) =>{
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        this.setState({dataFormMeal:reader.result})
      }
    }
    reader.readAsDataURL(evt.target.files[0])
  }
    const handleSubmit = (evt) => {
      evt.preventDefault();
      onFormSubmit();
      console.log('handleSubmit');
  };
  return(
    
  <div className="meal-page">
    <div className="meal-form">
    <form
        className="meal-form-element"
        onSubmit={handleSubmit}
      >
    
      <div className="meal-image">
      <p className="picture">Créez votre fiche de plat:</p>
      <img
          src={picture}
          alt=""
          id="img"
          className="meal-img"
          onChange={imageHandler}
        />
        <input  
          id="picture"
          type="file"
          name="pictureFile"
          accept="image/*"
        />
        <input type="submit" name="picture" value={picture} onChange={(evt) => {
            handleInputChange(evt.target.value, evt.target.name);
          }} />
        <div className="meal-label">
          <label htmlFor="input" className="meal-upload">
            Choisissez une photo de votre plat
          </label>
        </div>

      </div>

      
        <label className="switch">
          <input name="online" type="checkbox" onChange={changeOnline}/>
          <span className="slider round" />
        </label>
        <input
          required
          className="meal-form-input"
          type="text"
          name="name"
          placeholder="Ajoutez le nom de votre plat"
          onChange={(evt) => {
            handleInputChange(evt.target.value, evt.target.name);
          }}
          value={name}
        />
        <input
          required
          min="1"
          max="50"
          className="meal-portion-input"
          type="number"
          name="portion"
          placeholder="Nombre de part"
          onChange={(evt) => {
            handleInputChange(evt.target.value, evt.target.name);
          }}
          value={portion}
        />
        <input
          required
          className="meal-city-input"
          type="text"
          name="city"
          placeholder="Ville"
          onChange={(evt) => {
            handleInputChange(evt.target.value, evt.target.name);
          }}
          value={city}
        />
        <p
          className="meal-madeBy"
        >
          Fait par
          <input
            required
            className="meal-pseudo-input"
            type="text"
            name="author"
            placeholder="Pseudo"
            onChange={(evt) => {
              handleInputChange(evt.target.value, evt.target.name);
            }}
            value={author}
          />
        </p>
        <textarea
          required
          className="meal-form-ingredients"
          type="text"
          name="ingredients"
          placeholder="Ajouter les ingrédients"
          onChange={(evt) => {
            handleInputChange(evt.target.value, evt.target.name);
          }}
          value={ingredients}
        />
        <textarea
          required
          className="meal-form-description"
          type="text"
          name="description"
          placeholder="Description du plat"
          onChange={(evt) => {
            handleInputChange(evt.target.value, evt.target.name);
          }}
          value={description}

        />
        <select 
        name="dish"
        onChange={(evt) => onSetCategorySelect(evt.target.value, evt.target.name)}
         className="meal-category">

          <option value="">Type d'assiete</option>
          <option value="entrée" name="entrée">Entrée</option>
          <option value="plat" name="plat">Plat</option>
          <option value="dessert" name="dessert">Dessert</option>
        </select>
        <select
          name="kitchen"
          onChange={(evt) => onSetCategorySelect(evt.target.value, evt.target.name)}
          className="meal-category">
          <option value="">Type de cuisine</option>
          <option value="francaise" name="francaise">Francaise</option>
          <option value="asiatique" name="asiatique">Asiatique</option>
          <option value="orientale" name="orientale">Orientale</option>
          <option value="italienne" name="italienne">Italienne</option>
        </select>

        { isSucces && 
          <Redirect to="/v1/mydishes" />
        }

        { isError && (

          <p>Erreur sur votre formulaire </p>
        )
        }

        <button className="mealForm-form-submit" type="submit" onClick={() => sendFormRecipeUp()}> Valider </button>
        <button className="mealForm-form-submit" type="button" onClick={() => cancelFormRecipe()}> Annuler </button>
        </form>
    </div>
  </div>
  );
};
DishesForm.propTypes = {
  
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  portion: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  dish: PropTypes.string.isRequired,
  kitchen: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  onSetCategorySelect: PropTypes.func.isRequired,
};
export default DishesForm;

