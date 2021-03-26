import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

const MyDishes = ({
  getAListAllDishes,
  userId,
  userDishes,
  deleteDish,
  deleteMessage,
  clearDishInformations,
}) => {
  useEffect(() => getAListAllDishes(userId), []);

  return (
    <div className="myDishes">
      <h1 className="myDishes-title">Mes bons petits plats</h1>
      {deleteMessage}
      <section className="myDishes-container">
        { userDishes && userDishes.map((dish) => (
          <article key={dish.id} className="myDishes-oneDish">

            <div className="myDishes-dishImg" style={{ backgroundImage: `url(${process.env.API_URL}/dishes/${dish.id}/picture)` }} alt={dish.name} />

            <div className="myDishes-dishText">
              <h2 className="myDishes-dishTitle">{dish.name}</h2>
              <p className="myDishes-dishDescription">{dish.description}</p>
              {dish.online && (
                <p className="myDishes-tag-online">EN LIGNE</p>
              )}
              {!dish.online && (
                <p className="myDishes-tag-offline">HORS LIGNE</p>
              )}
            </div>

            <div className="myDishes-allButton">
              <div className="myDishes-buttonContent">
                <Link
                  to={`/v1/dishes/edit/${dish.id}`}
                  className="myDishes-button"
                  onClick={() => clearDishInformations()}
                >
                  Éditer
                </Link>
              </div>

              <div className="myDishes-buttonContent">
                <a
                  className="myDishes-button"
                  onClick={() => deleteDish(dish.id)}
                >
                  Supprimer
                </a>
              </div>
            </div>

          </article>
        ))}

      </section>
    </div>
  );
};

MyDishes.propTypes = {
  userDishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      picture: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      online: PropTypes.bool,
    }),
  ),
  deleteDish: PropTypes.func.isRequired,
  deleteMessage: PropTypes.string.isRequired,
  getAListAllDishes: PropTypes.func.isRequired,
  userId: PropTypes.number,
  clearDishInformations: PropTypes.func.isRequired,
};

MyDishes.defaultProps = {
  userDishes: null,
  userId: null,
};

export default MyDishes;
