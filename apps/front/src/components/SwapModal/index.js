import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.scss';



const SwapModal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal( 
  
 
  <React.Fragment>
 
 
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          Selectionnez un plat parmis votre liste
        </p>

        <div className="last-dishes-cards">
        { dishes && (
          dishes.map((dish) => {
            const linkUrl = `/v1/dish/${dish.id}`;

            return (
              <div className="last-dishes-card" key={dish.id}>
                <img className="last-dishes-card-img" src={dish.picture} alt="" />
                <h3 className="last-dishes-card-name">{dish.name}</h3>
                <p className="last-dishes-card-potion">{dish.portion} part(s)</p>
                <p className="last-dishes-card-author"> Fait par {dish.author.pseudonym}</p>
                <p className="last-dishes-card-city">{dish.city}</p>
                <Link to={linkUrl} className="last-dishes-card-seemore">Voir plus</Link>
              </div>
            );
          })
        )}
      </div>


        <button
        type="button"
        className="modal-send-swap-button">
          Envoyer l'échange
        </button>
      </div>
    </div>

  </React.Fragment>, document.body
) : null;
SwapModal.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      picture: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      ingredients: PropTypes.array,
      portion: PropTypes.string,
      city: PropTypes.string,
    }),
  ),
  getListDishes: PropTypes.func.isRequired,
};

SwapModal.defaultProps = {
  dishes: null,
};
export default SwapModal;
