import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';
import SwapModal from '../SwapModal';
import UseModal from '../UseModale';

import './style.scss';

const DisplayADish = ({
  dish, dishId, getOneDish,
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
            style={{ backgroundImage: `url(${process.env.API_URL}/dishes/${dish.id}/picture)` }}
          />
          <div className="displayADish-right">
            <h1 className="displayADish-right-title">{dish.name} <br /><span className="displayADish-right-portion">{dish.portion} part{dish.portion > 1 ? 's' : ''}</span></h1>
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
          </div>
          <SwapModal
            isShowing={isShowing}
            hide={toggle}
          />
        </div>
      )}
      { !dish && (
      <div className="displayADish-skeletons">

        <div className="displayADish-skeleton-desktop">
          <ContentLoader
            speed={1.2}
            style={{ width: '100%' }}
            viewBox="0 0 400 460"
            backgroundColor="#454a5f"
            foregroundColor="#9a95ad"
          >
            <rect x="241" y="64" rx="2" ry="2" width="154" height="18" />
            <rect x="242" y="101" rx="2" ry="2" width="125" height="9" />
            <rect x="11" y="62" rx="2" ry="2" width="212" height="148" />
            <rect x="244" y="131" rx="2" ry="2" width="110" height="12" />
            <rect x="245" y="174" rx="2" ry="2" width="110" height="8" />
            <rect x="245" y="195" rx="2" ry="2" width="110" height="8" />
            <rect x="246" y="155" rx="2" ry="2" width="43" height="8" />
            <rect x="302" y="155" rx="2" ry="2" width="43" height="8" />
          </ContentLoader>
        </div>
        <div className="displayADish-skeleton-mobile">

          <ContentLoader
            speed={2}
            viewBox="30 30 295 300"
            backgroundColor="#454a5f"
            foregroundColor="#9a95ad"
            style={{ width: '100%' }}
          >
            <rect x="88" y="174" rx="2" ry="2" width="183" height="22" />
            <rect x="131" y="212" rx="2" ry="2" width="98" height="7" />
            <rect x="58" y="15" rx="2" ry="2" width="236" height="146" />
            <rect x="110" y="229" rx="2" ry="2" width="140" height="10" />
            <rect x="130" y="248" rx="2" ry="2" width="98" height="7" />
            <rect x="116" y="270" rx="2" ry="2" width="134" height="22" />
          </ContentLoader>
        </div>
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
      username: PropTypes.string,
    }),
  }),
  dishId: PropTypes.string.isRequired,
  getOneDish: PropTypes.func.isRequired,
  // fetchMyDishesSwap: PropTypes.func.isRequired,
};

DisplayADish.defaultProps = {
  dish: null,
};

export default DisplayADish;
