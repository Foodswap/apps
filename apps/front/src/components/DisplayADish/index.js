import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwapModal from '../SwapModal';
import UseModal from '../UseModale';

import './style.scss';

const DisplayADish = ({
  dish, dishSwap, dishId, getOneDish, fetchMyDishesSwap,
}) => {
  useEffect(() => getOneDish(dishId), []);
  // useEffect(() => fetchMyDishesSwap(author.id), []);
  const { isShowing, toggle } = UseModal();

  return (
    <div className="displayADish">
      { dish && (
        <div key={dish.id} className="displayADish-container">
          <div
            className="displayADish-img-container"
            style={{ backgroundImage: `url(http://ec2-54-145-80-6.compute-1.amazonaws.com/v1/meals/${dish.id}/picture)` }}
          />
          <div className="displayADish-right">
            <h1 className="displayADish-right-title">{dish.name} <br /><span className="displayADish-right-portion">{dish.portion} parts</span></h1>
            <p className="displayADish-right-author">Fait par {dish.author.username} à {dish.city}</p>

            <div className="displayADish-ingredients">
              <h3 className="displayADish-ingredients-title">Ingrédients :</h3>
              <ul className="displayADish-ingredients-container">
                {
                  dish.ingredients.map((ingredient) => (
                    <li key={ingredient.id} className="displayADish-ingredients-text">
                      {ingredient.name}
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="displayADish-description">
              <h1 className="displayADish-description-title">Description du plat :</h1>
              <p className="displayADish-description-text">{dish.description}</p>
            </div>
            <button type="button" className="displayADish-button" onClick={toggle}>Proposer un échange</button>
            <i />
            {/* <button type="button" className="displayADish-button" onClick={(event) => { toggle(event); fetchMyDishesSwap(event);}}>Swap</button> */}
          </div>
          <SwapModal
            isShowing={isShowing}
            hide={toggle}
          />
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
    portion: PropTypes.number,
    city: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.number,
      pseudonym: PropTypes.string,
    }),
  }),
  dishSwap: PropTypes.func.isRequired,
  dishId: PropTypes.string.isRequired,
  getOneDish: PropTypes.func.isRequired,
  // fetchMyDishesSwap: PropTypes.func.isRequired,
};

DisplayADish.defaultProps = {
  dish: null,
};

export default DisplayADish;
