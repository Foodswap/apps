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
            viewBox="0 0 900 660"
            backgroundColor="#454a5f"
            foregroundColor="#9a95ad"
            style={{ width: '100%', height: '250px' }}
          >
            <rect x="361" y="126" rx="2" ry="2" width="234" height="27" />
            <rect x="366" y="204" rx="2" ry="2" width="135" height="15" />
            <rect x="10" y="122" rx="2" ry="2" width="339" height="232" />
            <rect x="440" y="300" rx="2" ry="2" width="106" height="31" />
            <rect x="514" y="202" rx="2" ry="2" width="82" height="34" />
            <rect x="366" y="224" rx="2" ry="2" width="135" height="15" />
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
