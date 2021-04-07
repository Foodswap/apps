import React, { useEffect, Component, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContentLoader from 'react-content-loader';

// import SelectInputIngredient from '../SelectInputIngredients';

import './style.scss';
// import image from '../../assets/images/logo-fooswap.png';
import { sendFormRecipeUp } from '../../actions/dishesForm-actions';

toast.configure();
const DishesForm = ({
  dishIdToEdit,
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
  ingredientsData,
  handleMultiSelectChange,
  dishData,
  kitchenData,
  getADish,
  selectedIngredients,
  handleUpdatePicture,
  previewPicture,
  resizeImage,
  // cancelAction,
}) => {
  useEffect(() => {
    getADish(dishIdToEdit);
  }, []);

  const animatedSelect = makeAnimated();

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
        {((dishIdToEdit && dishId) || !dishIdToEdit) && (
        <h2 className="meal-title"> {titleText}</h2>
        )}

        {((dishIdToEdit && dishId) || !dishIdToEdit) && (
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
                resizeImage(targetFile);
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
            { ((dishIdToEdit && dishId) || !dishIdToEdit) && (
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
              { ((dishIdToEdit && dishId && dishData) || !dishIdToEdit) && (
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

              { ((dishIdToEdit && dishId && kitchenData) || !dishIdToEdit) && (
              <select
                name="kitchen"
                onChange={(evt) => onSetCategorySelect(evt.target.value, evt.target.name)}
                className="meal-category"
                defaultValue={kitchen || ''}
                required
              >
                <option disabled value="">Type de cuisine</option>
                { kitchenData && kitchenData.map((kitchenObj) => (
                  <option
                    value={kitchenObj.id}
                    name={kitchenObj.name}
                    key={`kitchen${kitchenObj.id}`}
                  >
                    {kitchenObj.name}
                  </option>
                ))}
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
        )}
        {(dishIdToEdit && !dishId) && (
          <div className="loading-desktop">
            <ContentLoader
              speed={1.2}
              viewBox="0 0 600 350"
              style={{ width: '100%', height: 'auto' }}
              backgroundColor="#454a5f"
              foregroundColor="#9a95ad"
            >
              <rect x="40" y="63" rx="0" ry="0" width="145" height="129" />
              <rect x="213" y="62" rx="0" ry="0" width="346" height="16" />
              <rect x="213" y="86" rx="0" ry="0" width="346" height="16" />
              <rect x="213" y="112" rx="0" ry="0" width="346" height="16" />
              <rect x="213" y="136" rx="0" ry="0" width="346" height="55" />
              <rect x="213" y="199" rx="0" ry="0" width="346" height="16" />
              <rect x="248" y="238" rx="0" ry="0" width="119" height="18" />
              <rect x="403" y="238" rx="0" ry="0" width="119" height="18" />
              <rect x="305" y="306" rx="0" ry="0" width="65" height="25" />
              <rect x="403" y="306" rx="0" ry="0" width="68" height="25" />
              <rect x="40" y="204" rx="0" ry="0" width="145" height="18" />
              <rect x="42" y="280" rx="0" ry="0" width="145" height="34" />
              <rect x="40" y="20" rx="0" ry="0" width="517" height="29" />
            </ContentLoader>
          </div>
        )}

        {(dishIdToEdit && !dishId) && (
          <div className="loading-mobile">
            <ContentLoader
              speed={1.5}
              viewBox="0 0 900 550"
              style={{ width: '100%', height: 'auto' }}
              backgroundColor="#454a5f"
              foregroundColor="#9a95ad"
            >
              <rect x="84" y="59" rx="0" ry="0" width="185" height="155" />
              <rect x="34" y="321" rx="0" ry="0" width="279" height="16" />
              <rect x="102" y="235" rx="0" ry="0" width="145" height="18" />
              <rect x="102" y="270" rx="0" ry="0" width="145" height="34" />
              <rect x="34" y="14" rx="0" ry="0" width="279" height="29" />
              <rect x="34" y="372" rx="0" ry="0" width="279" height="16" />
              <rect x="34" y="347" rx="0" ry="0" width="279" height="16" />
              <rect x="34" y="398" rx="0" ry="0" width="279" height="45" />
              <rect x="34" y="451" rx="0" ry="0" width="279" height="25" />
              <rect x="34" y="483" rx="0" ry="0" width="279" height="16" />
              <rect x="34" y="507" rx="0" ry="0" width="279" height="16" />
            </ContentLoader>
          </div>
        )}
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
  ingredientsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  handleMultiSelectChange: PropTypes.func.isRequired,
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
  selectedIngredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  handleUpdatePicture: PropTypes.func.isRequired,
  resizeImage: PropTypes.func.isRequired,
  previewPicture: PropTypes.string.isRequired,
  dishIdToEdit: PropTypes.number,
};

DishesForm.defaultProps = {
  dishId: null,
  kitchen: null,
  dish: null,
  portion: null,
  selectedIngredients: [],
  dishData: null,
  kitchenData: null,
  dishIdToEdit: null,
};
export default DishesForm;
