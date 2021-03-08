import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const LastDishes = ({ dishes }) => (

  <div className="last-dishes">

    <h2 className="last-dishes-title">Les derniers plats ajoutés</h2>
    <div className="last-dishes-cards">
      {
      dishes.map((dish) => (
        <div className="last-dishes-card" key={dish.id}>
          <img className="last-dishes-card-img" src={dish.picture} alt="" />
          <h3 className="last-dishes-card-name">{dish.name}</h3>
          <p className="last-dishes-card-potion">{dish.portion} part(s)</p>
          <p className="last-dishes-card-author"> Fait par {dish.author.pseudonym}</p>
          <p className="last-dishes-card-city">{dish.city}</p>
          <Link to="/dish/{dish.id}" className="last-dishes-card-seemore"> Voir plus </Link>
        </div>

      ))
    }
    </div>
  </div>

);

LastDishes.propTypes = {};

export default LastDishes;
