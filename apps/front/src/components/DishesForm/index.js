import React, { useEffect, Component, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import SelectInputIngredient from '../SelectInputIngredients';

import './style.scss';
// import image from '../../assets/images/logo-fooswap.png';
import { sendFormRecipeUp, setInputValue } from '../../actions/dishesForm';

toast.configure();
const DishesForm = ({
  dishId,
  name,
  description,
  portion,
  city,
  dish,
  kitchen,
  online,
  handleInputChange,
  onFormSubmit,
  onSetCategorySelect,
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
  handleUpdatePicture,
  previewPicture,
  // cancelAction,
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
  const notify = () => {
    toast.success('Votre plat a bien été créé',
      {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      // color: state.isSelected ? 'red' : 'blue',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      // width: "100%",
      backgroundColor: 'white',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    },
  };

  const titleText = dishId ? 'Editez votre bon petit plat' : 'Ajoutez votre bon petit plat';
  return (
    <div className="meal-page">
      <div className="meal-form-div">
        <h2 className="meal-title"> {titleText}</h2>
        <form
          className="meal-form-element"
          onSubmit={handleSubmit}
        >
          <div className="meal-image-div">
            <div
              style={{ backgroundImage: `url(${previewPicture})` }}
              alt=""
              id="img"
              className="meal-img"
            />
            <input
              id="picture"
              type="file"
              name="picture"
              required={!dishId}
              accept="image/*"
              onChange={(evt) => {
                const targetFile = evt.target.files[0];
                const previewImage = URL.createObjectURL(targetFile);
                handleUpdatePicture(previewImage);
                handleInputChange(targetFile, evt.target.name);
              }}
            />
            <div className="meal-online-switch">
              <span>Hors ligne</span>

              <label className="switch">
                <input name="online" type="checkbox" checked={online} onChange={changeOnline} />
                <span className="slider round" />
              </label>

              <span>En ligne </span>
            </div>
          </div>

          <div className="meal-form-right">

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

            { ingredientsData.length && (
              <Select
                name="ingredients"
                placeholder="Ingrédients"
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
              { dishData && (
              <select
                name="dish"
                onChange={(evt) => onSetCategorySelect(evt.target.value, evt.target.name)}
                className="meal-category"
                defaultValue={dish || ''}
                required
              >
                <option disabled value="">Type d'assiete</option>
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

              { kitchenData && (
              <select
                name="kitchen"
                onChange={(evt) => onSetCategorySelect(evt.target.value, evt.target.name)}
                className="meal-category"
                defaultValue={kitchen || ''}
                required
              >
                <option disabled value="">Type de cuisine</option>
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

            { isError && (
              <p>Erreur sur votre formulaire </p>
            )}

            <div className="meal-form-buttons">
              <Link className="meal-form-submit fix-flex" to="/v1/mydishes"> Annuler </Link>
              <button className="meal-form-submit" type="submit" onClick={() => sendFormRecipeUp()}> Valider </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
DishesForm.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  portion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  city: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
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
  isError: PropTypes.bool.isRequired,
  changeOnline: PropTypes.func.isRequired,
  getIngredients: PropTypes.func.isRequired,
  ingredientsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  handleMultiSelectChange: PropTypes.func.isRequired,
  fetchTypeDish: PropTypes.func.isRequired,
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
  fetchTypeKitchen: PropTypes.func.isRequired,
  selectedIngredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  handleUpdatePicture: PropTypes.func.isRequired,
  previewPicture: PropTypes.string.isRequired,
};

DishesForm.defaultProps = {
  dishId: null,
  kitchen: null,
  dish: null,
  portion: null,
  selectedIngredients: [],
  dishData: null,
  kitchenData: null,
};
export default DishesForm;
