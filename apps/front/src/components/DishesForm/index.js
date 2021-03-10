import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
// import image from '../../assets/images/logo-fooswap.png';
import { cancelFormRecipe, sendFormRecipeUp, setInputValue } from '../../actions/dishesForm';
const DishesForm = ({
  // picture,
  dataFormMeal,
  // name,
  // portion,
  // city,
  // author,
  // ingredients,
  // description,
  imageHandler,
  inputValue,
  onInputChange,
  onFormSubmit,
}) => {
  imageHandler = (evt) =>{
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        this.setState({dataFormMeal:reader.result})
      }
    }
    reader.readAsDataURL(evt.target.files[0])
  };
  return(
  <div className="meal-page">
    <div className="meal-form">
    { dataFormMeal.map((meal) => (
       
       
      <div key={meal.id} className="meal-image">
      <p className="picture">Créez votre fiche de plat:</p>
      <img
          src={meal.picture}
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
            const text = evt.target.value;
            onInputChange(text, evt.target.name);
          }}
          value={inputValue}
        />
        <div className="meal-label">
          <label htmlFor="input" className="meal-upload">
            Choisissez une photo de votre plat
          </label>
        </div>

      </div>
    ))}
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
          value={inputValue}
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
          value={inputValue}
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
          value={inputValue}
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
            value={inputValue}
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
          value={inputValue}
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
          value={inputValue}

        />
        <select className="meal-category">
          <option value="">Type d'assiete</option>
          <option value="entrée" name="entrée">Entrée</option>
          <option value="plat" name="plat">Plat</option>
          <option value="dessert" name="dessert">Dessert</option>
        </select>
        <select className="meal-category">
          <option value="">Type de cuisine</option>
          <option value="française" name="française">Française</option>
          <option value="asiatique" name="asiatique">Asiatique</option>
          <option value="orientale" name="orientale">Orientale</option>
          <option value="italienne" name="italienne">Italienne</option>
          <option value="greque" name="greque">Greque</option>
          <option value="indienne" name="indienne">Indienne</option>
          <option value="japonaise" name="japonaise">Japonaise</option>
        </select>
        </form>
        <button className="mealForm-form-submit" type="submit" onClick={() => sendFormRecipeUp()}> Valider </button>
        <button className="mealForm-form-submit" type="button" onClick={() => cancelFormRecipe()}> Annuler </button>
    </div>
  </div>
  );
};
DishesForm.propTypes = {
  dataFormMeal: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }),
  ).isRequired,
  // name: PropTypes.string.isRequired,
  // portion: PropTypes.string.isRequired,
  // city: PropTypes.string.isRequired,
  // author: PropTypes.string.isRequired,
  // ingredients: PropTypes.array.isRequired,
  // description: PropTypes.array.isRequired,
  // inputValue: PropTypes.string.isRequired,
  // onFormSubmit: PropTypes.func.isRequired,
  imageHandler: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
export default DishesForm;
