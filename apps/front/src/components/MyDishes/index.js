import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

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
        { !userDishes && (

        <article className="myDishes-oneDish">
          <ContentLoader
            speed={1.2}
            viewBox="0 0 600 220"
            backgroundColor="#454a5f"
            foregroundColor="#9a95ad"
          >
            <rect x="363" y="50" rx="2" ry="2" width="335" height="14" />
            <rect x="369" y="83" rx="2" ry="2" width="158" height="9" />
            <rect x="-20" y="48" rx="2" ry="2" width="375" height="134" />
            <rect x="378" y="158" rx="2" ry="2" width="131" height="17" />
            <rect x="371" y="106" rx="2" ry="2" width="135" height="6" />
            <rect x="533" y="158" rx="2" ry="2" width="131" height="17" />
          </ContentLoader>
        </article>
        )}
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
