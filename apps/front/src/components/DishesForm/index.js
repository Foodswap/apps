import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import image from '../../assets/images/logo-fooswap.png';
import { cancelFormRecipe, sendFormRecipeUp } from '../../actions/DishesForm';
const DishesForm = ({
  dataFormMeal,
  picture,
  name,
  portion,
  city,
  author,
  ingredients,
  description,
  // inputValue,
  onInputChange,
  onFormSubmit,
}) => (
  <div className="meal-page">
    <div className="meal-form">
      <div className="meal-image">
        <input
          type="file"
          name="picture"
          onChange={(evt) => {
            const text = evt.target.value;
            onInputChange(text, evt.target.name);
          }}
          value={picture}
        />
        <img
          src={image}
          alt="logo FoodSwap"
        />
      </div>
      <form
        className="meal-form-element"
        onSubmit={(evt) => {
          evt.preventDefault();
          onFormSubmit();
        }}
      >
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round" />
        </label>
        <input
          required
          className="meal-form-input"
          type="text"
          name="name"
          placeholder="Ajoutez le nom de votre plat"
          onChange={(evt) => {
            const text = evt.target.value;
            onInputChange(text, evt.target.name);
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
            const text = evt.target.value;
            onInputChange(text, evt.target.name);
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
            const text = evt.target.value;
            onInputChange(text, evt.target.name);
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
              const text = evt.target.value;
              onInputChange(text, evt.target.name);
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
            const text = evt.target.value;
            onInputChange(text, evt.target.name);
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
            const text = evt.target.value;
            onInputChange(text, evt.target.name);
          }}
          value={description}

        />

        <select name="meal-category" className="meal-category">
          { dataFormMeal.map((meal) => (
            <option key={meal.id} value="Française">{meal.name}</option>
          ))}
        </select>
        <select className="meal-category">
          <option value="">Type d'assiete</option>
          <option value="Entrée">Entrée</option>
          <option value="Plat">Plat</option>
          <option value="Dessert">Dessert</option>
        </select>
        <button className="mealForm-form-submit" type="submit" onClick={() => sendFormRecipeUp()}> Valider </button>
        <button className="mealForm-form-submit" type="button" onClick={() => cancelFormRecipe()}> Annuler </button>
      </form>
    </div>
  </div>
);
DishesForm.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  portion: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  // inputValue: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  dataFormMeal: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default DishesForm;
