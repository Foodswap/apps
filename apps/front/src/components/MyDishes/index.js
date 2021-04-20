import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

import './style.scss';
import { prototype } from 'react-autosuggest';

const MyDishes = ({
  getAListAllDishes,
  userId,
  userDishes,
  clearDishInformations,
  updateOpenDeleteModal,
  openDeleteModal,
  updateDishIdSelect,
  canceldeletion,
  agreeToDelete,
  dishIdSelect,
}) => {
  useEffect(() => getAListAllDishes(userId), []);
  return (
    <>
      { userDishes && (openDeleteModal === true) && (
        <div className="myDishes-modal-container">
          <div className=" myDishes-modal">
            <div className="myDishes-content">
              <p className="myDishes-content-textModal">Voulez vous vraiment supprimer ce plat ?</p>
            </div>

            <div className="myDishes-buttonModal">
              <button type="button" className="myDishes-buttonModal-Confirm" onClick={() => agreeToDelete(dishIdSelect)}>Valider</button>
              <button type="button" className="myDishes-buttonModal-Confirm" onClick={() => canceldeletion()}>Annuler</button>
            </div>
          </div>
        </div>
      )}

      <div className="myDishes">
        <h1 className="myDishes-title">Mes bons petits plats</h1>
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
                    onClick={() => {
                      updateOpenDeleteModal(true);
                      updateDishIdSelect(dish.id);
                    }}
                  >
                    Supprimer
                  </a>
                </div>
              </div>

            </article>
          ))}
          { !userDishes && (
          <div className="displayADish-skeletons">

            <article className="myDishes-oneDish-desktop">
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
            <article className="myDishes-oneDish-mobile">
              <ContentLoader
                speed={1.2}
                viewBox="0 0 400 460"
                backgroundColor="#454a5f"
                foregroundColor="#9a95ad"
              >
                <rect x="96" y="228" rx="2" ry="2" width="205" height="34" />
                <rect x="39" y="4" rx="2" ry="2" width="316" height="196" />
                <rect x="94" y="291" rx="2" ry="2" width="205" height="14" />
                <rect x="92" y="367" rx="2" ry="2" width="94" height="34" />
                <rect x="210" y="367" rx="2" ry="2" width="94" height="35" />
                <rect x="158" y="327" rx="2" ry="2" width="76" height="28" />
              </ContentLoader>
            </article>
          </div>
          )}
        </section>
      </div>
    </>
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
  getAListAllDishes: PropTypes.func.isRequired,
  userId: PropTypes.number,
  clearDishInformations: PropTypes.func.isRequired,
  updateOpenDeleteModal: PropTypes.func.isRequired,
  openDeleteModal: PropTypes.bool,
  updateDishIdSelect: PropTypes.func.isRequired,
  canceldeletion: PropTypes.func.isRequired,
  agreeToDelete: PropTypes.func.isRequired,
  dishIdSelect: PropTypes.number,
};

MyDishes.defaultProps = {
  userDishes: null,
  userId: null,
  openDeleteModal: null,
  dishIdSelect: null,
};

export default MyDishes;
