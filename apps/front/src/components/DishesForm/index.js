import React, { useEffect, Component, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// import SelectInputIngredient from '../SelectInputIngredients';

import './style.scss';
// import image from '../../assets/images/logo-fooswap.png';
import { cancelFormRecipe, sendFormRecipeUp, setInputValue } from '../../actions/dishesForm';

const DishesForm = ({
  dishId,
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
  dishData,
  kitchenData,
  fetchTypeKitchen,
  getADish,
  selectedIngredients,
}) => {
  useEffect(() => {
    console.log('CMP', dishId);
    getADish(dishId);
    getIngredients();
    fetchTypeDish();
    fetchTypeKitchen();
    console.log(`ingredient data ${ingredientsData}`);
  }, []);
  const animatedSelect = makeAnimated();
  const imageHandler = (evt) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ dataFormMeal: reader.result });
      }
    };
    reader.readAsDataURL(evt.target.files[0]);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit();
    console.log('handleSubmit');
  };

  return (
    <div className="meal-page">
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
            }}
          />
        </div>

        <div className="meal-online-switch">
          <span>Hors ligne</span>

          <label className="switch">
            <input name="online" type="checkbox" onChange={changeOnline} />
            <span className="slider round" />
          </label>

          <span>En ligne </span>
        </div>

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

        { ((!dishId && ingredientsData.length) || (dishId && ingredientsData.length && selectedIngredients.length)) && (
          <Select
            name="ingredients"
            components={animatedSelect}
            options={ingredientsData}
            isMulti
            defaultValue={selectedIngredients}
            onChange={(selection, action) => handleMultiSelectChange(selection, action)}
          />
        )}

        <input
          type="text"
          required
          className="meal-input"
          name="description"
          placeholder="Description du plat"
          onChange={(evt) => {
            handleInputChange(evt.target.value, evt.target.name);
          }}
          value={description}
        />

        <div className="meal-form-select">
          { ((dishId && dish && dishData) || dishData) && (
          <select
            name="dish"
            onChange={(evt) => onSetCategorySelect(evt.target.value, evt.target.name)}
            className="meal-category"
            defaultValue={dish || ''}
          >
            <option>Type d'assiete</option>
            { dishData && dishData.map((dishObj) => (
              <option
                value={dishObj.id}
                name={dishObj.name}
                key={`dish${dishObj.id}`}
              >
                {dishObj.name}
              </option>
            ))}
          </select>
          )}

          {((dishId && kitchen && kitchenData) || kitchenData) && (
          <select
            name="kitchen"
            onChange={(evt) => onSetCategorySelect(evt.target.value, evt.target.name)}
            className="meal-category"
            value={kitchen || ''}
          >
            <option>Type de cuisine</option>
            { kitchenData && (
              kitchenData.map((kitchenObj) => (
                <option
                  value={kitchenObj.id}
                  name={kitchenObj.name}
                  key={`kitchen${kitchenObj.id}`}

                >
                  {kitchenObj.name}
                </option>
              ))
            )}
          </select>
          )}
        </div>

        {/* { isSucces &&
          <Redirect to="/v1/mydishes" />
        } */}

        { isError && (

        <p>Erreur sur votre formulaire </p>
        )}
        <div className="meal-form-buttons">
          <button className="meal-form-cancel" type="button" onClick={() => cancelFormRecipe()}> Annuler </button>
          <button className="meal-form-submit" type="submit" onClick={() => sendFormRecipeUp()}> Valider </button>
        </div>
      </form>
    </div>
  );
};
DishesForm.propTypes = {
  // picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // ingredients: PropTypes.string.isRequired,
  portion: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  author: PropTypes.number,
  // : PropTypes.string.isRequired,
  kitchen: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  dish: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  onSetCategorySelect: PropTypes.func.isRequired,
  getADish: PropTypes.func.isRequired,
  dishId: PropTypes.number,
};

DishesForm.defaultProps = {
  dishId: null,
  author: null,
  kitchen: null,
  dish: null,
};
export default DishesForm;
