import React, { useEffect, Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from "react";
// import SelectInputIngredient from '../SelectInputIngredients';

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
  changeOnline,
  getIngredients,
  ingredientsData,
  handleMultiSelectChange,
  fetchTypeDish,
  dishData
}) => {

  useEffect(() => {
    getIngredients();
    fetchTypeDish();
    console.log("ingredient data " + ingredientsData)
  }, [])
  ;
  const animatedSelect = makeAnimated();
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
  let options = [];
  
  return(
    
  <div className="meal-page">
  { ingredientsData && (
     ingredientsData.map((ingredientObj) => {
       options.push({
        value: ingredientObj.id, label: ingredientObj.name
      });
  })
  )}
  
    <h2 className="meal-title">Ajoutez votre bon petit plat </h2>
    <form
        className="meal-form-element"
        onSubmit={handleSubmit}
      >
    
      <div className="meal-image-div">
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
          name="picture"
          accept="image/*"
          onChange={(evt) => {
            handleInputChange(evt.target.files[0], evt.target.name);
            }
          }
        />
      </div>
        <label className="switch">
          <input name="online" type="checkbox" onChange={changeOnline}/>
          <span className="slider round" /> 
        </label>
        <span>En ligne ?</span>
        <input
          required
          className="meal-input"
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
          className="meal-input"
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
          className="meal-input"
          type="text"
          name="city"
          placeholder="Votre ville"
          onChange={(evt) => {
            handleInputChange(evt.target.value, evt.target.name);
          }}
          value={city}
        />
        
        { options.length && (

          <Select 
          name="ingredients" 
          components={animatedSelect}
          options={options} 
          isMulti 
          onChange={(selection, action) => handleMultiSelectChange(selection, action)}
          />
        )
        }
       
        <input 
          type="text"
          required
          className="meal-input"
          type="text"
          name="description"
          placeholder="Description du plat"
          onChange={(evt) => {
            handleInputChange(evt.target.value, evt.target.name);
          }}
          value={description}

        />
        <div className="meal-form-select">

          <select 
          name="dish"
          onChange={(evt) => onSetCategorySelect(evt.target.value, evt.target.name)}
          className="meal-category">

          { console.log("dishData : " + dishData)}
            <option value="">Type d'assiete</option>
            { dishData && (
              dishData.map((dishObj) => {
                return (
                  <option value={dishObj.name} name={dishObj.name}>{dishObj.name}</option>
                )
              }
              ))
            }
          </select>
          <select
            name="kitchen"
            onChange={(evt) => onSetCategorySelect(evt.target.value, evt.target.name)}
            className="meal-category">
            <option value="">Type de cuisine</option>
            { dishData && (
              dishData.map((dishObj) => {
              <option value={dishObj.name} name={dishObj.name}>Francaise</option>
              })

            )}
          </select>
        </div>

        {/* { isSucces && 
          <Redirect to="/v1/mydishes" />
        } */}

        { isError && (

          <p>Erreur sur votre formulaire </p>
        )
        }
        <div className="meal-form-buttons">
          <button className="meal-form-cancel" type="button" onClick={() => cancelFormRecipe()}> Annuler </button>
          <button className="meal-form-submit" type="submit" onClick={() => sendFormRecipeUp()}> Valider </button>
        </div>
        </form>
    </div>
  );
};
DishesForm.propTypes = {
  
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // ingredients: PropTypes.string.isRequired,
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

