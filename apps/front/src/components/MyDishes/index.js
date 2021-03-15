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
      <h1 className="myDishes-title">Mes Plats</h1>
      {deleteMessage}
      <section className="myDishes-container">
        { userDishes && userDishes.map((dish) => (
          <article key={dish.id} className="myDishes-oneDish">

            <img className="myDishes-dishImg" src={`http://ec2-54-145-80-6.compute-1.amazonaws.com/v1/meals/${dish.id}/picture`} alt={dish.name} />

            <div className="myDishes-dishText">
              <h2 className="myDishes-dishTitle">{dish.name}</h2>
              <p className="myDishes-dishDescription">{dish.description}</p>
            </div>

            <div className="myDishes-allButton">
              <div className="myDishes-buttonContent">
                <Link
                  to={`/v1/meals/edit/${dish.id}`}
                  className="myDishes-button"
                  onClick={() => clearDishInformations()}
                >
                  Éditer
                </Link>
              </div>

              <div className="myDishes-buttonContent">
                <button
                  type="button"
                  className="myDishes-button"
                  onClick={() => deleteDish(dish.id)}
                >
                  Supprimer
                </button>
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
