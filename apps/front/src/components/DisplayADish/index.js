import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const DisplayADish = ({
  dish, dishSwap, dishId, getOneDish,
}) => {
  useEffect(() => getOneDish(dishId), []);

  return (
    <div className="displayADish">
      { dish && (
        <div key={dish.id} className="displayADish-container">
          <header className="displayADish-headerDish">
            <div className="displayADish-headerDish-container">
              <h1 className="displayADish-headerDish-title">{dish.name}</h1>
              <div className="displayADish-headerDish-content">
                <span className="displayADish-headerDish-author">Fait par {dish.author.pseudonym}</span>
                <span className="displayADish-headerDish-portion">{dish.portion} Parts</span>
              </div>
              <p className="displayADish-headerDish-city">{dish.city}</p>
            </div>
            <img src={dish.picture} alt={dish.name} className="displayADish-headerDish-img" />
          </header>
          <div className="displayADish-ingredients">
            <ul className="displayADish-ingredients-container">
              {
                dish.ingredients.map((ingredient) => (
                  <li key={ingredient.id} className="displayADish-ingredients-content">
                    <p className="displayADish-ingredients-text">{ingredient.name}</p>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="displayADish-description">
            <div className="displayADish-description-content">
              <p className="displayADish-description-text">{dish.description}</p>
            </div>
          </div>
          <button type="button" className="displayADish-button" onClick={dishSwap}>Swap</button>
        </div>
      )}
    </div>
  );
};

DisplayADish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.number,
    picture: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    ingredients: PropTypes.array,
    portion: PropTypes.string,
    city: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.number,
      pseudonym: PropTypes.string,
    }),
  }),
  dishSwap: PropTypes.func.isRequired,
  dishId: PropTypes.string.isRequired,
  getOneDish: PropTypes.func.isRequired,
};

DisplayADish.defaultProps = {
  dish: null,
};

export default DisplayADish;
