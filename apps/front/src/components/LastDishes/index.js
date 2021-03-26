import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const LastDishes = ({ dishes, getListDishes }) => {
  useEffect(() => getListDishes(), []);

  return (
    <div className="last-dishes-section">
      <div className="last-dishes">
        <h2 className="last-dishes-title">Les derniers plats ajoutés</h2>

        <div className="last-dishes-cards">
          { dishes && (
            dishes.map((dish) => {
              const linkUrl = `/v1/dish/${dish.id}`;

              return (
                <div className="last-dishes-card" key={dish.id}>
                  <div className="last-dishes-card-img" style={{ backgroundImage: `url(${process.env.API_URL}/dishes/${dish.id}/picture)` }} />
                  <h3 className="last-dishes-card-name">{dish.name}</h3>
                  <p className="last-dishes-card-potion">{dish.portion} part{dish.portion > 1 ? 's' : ''}</p>
                  {/* <p className="last-dishes-card-author"> Fait par {dish.author.username}</p> */}
                  <p className="last-dishes-card-city">
                    {dish.city}
                  </p>
                  <Link to={linkUrl} className="last-dishes-card-seemore">Voir plus</Link>
                </div>
              );
            })
          )}
        </div>
      </div>

    </div>
  );
};

LastDishes.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
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
  ),
  getListDishes: PropTypes.func.isRequired,
};

LastDishes.defaultProps = {
  dishes: null,
};

export default LastDishes;
