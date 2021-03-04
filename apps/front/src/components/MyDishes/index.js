import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const MyDishes = ({ userDishes }) => (
  <div className="myDishes">
    <h1 className="myDishes-title">Mes Plats</h1>

    <section className="myDishes-container">
      { userDishes.map((dish) => (
        <article key={dish.id} className="myDishes-oneDish">

          <img className="myDishes-dishImg" src={dish.picture} alt={dish.name} />

          <div className="myDishes-dishText">
            <h2 className="myDishes-dishTitle">{dish.name}</h2>
            <p className="myDishes-dishDescription">{dish.description}</p>
          </div>

          <div className="myDishes-allButton">
            <div className="myDishes-buttonContent">
              <button type="button" className="myDishes-button">Éditer</button>
            </div>

            <div className="myDishes-buttonContent">
              <button type="button" className="myDishes-button">Supprimer</button>
            </div>
          </div>

        </article>
      ))}

    </section>
  </div>
);

MyDishes.propTypes = {
  userDishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.array.isRequired,
      online: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default MyDishes;
