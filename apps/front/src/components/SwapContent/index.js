import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import './styles.scss';

const SwapContent = ({ dishes, fetchMyDishesSwap, userLogged }) => {
  useEffect(() => fetchMyDishesSwap(), []);

  return (
    <div className="last-dishesxx">
      { !userLogged && (
        <p>Vous devez vous connecter pour proposer un échange</p>

      )}
    { userLogged && (
      <div>
        <h2 className="last-dishes-titlexx">Selectionnez un plat parmi votre liste</h2>
        <div className="last-dishes-cardsxx">

          { dishes && (
            dishes.map((dish) => {
              const linkUrl = `/v1/dish/${dish.id}`;
              return (
                <div className="last-dishes-cardxx" key={dish.id}>
                  <img className="last-dishes-card-imgxx" src={dish.picture} alt="" />
                  <h3 className="last-dishes-card-namexx">{dish.name}</h3>
                  {/* <p className="last-dishes-card-potionxx">{dish.portion} part(s)</p>
                  <p className="last-dishes-card-authorxx"> Fait par {dish.author.pseudonym}</p>
                  <p className="last-dishes-card-cityxx">{dish.city}</p> */}
                  {/* <Link to={linkUrl} className="last-dishes-card-seemorexx">Voir plus</Link> */}
                </div>
              );
            })
          )}
        </div>
        { !dishes && (
          <p>Vous n'avez pas de plats à proposer :`(` </p>
        )}
      </div>
    )}
    </div>
  );
};

SwapContent.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      picture: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      ingredients: PropTypes.array,
      portion: PropTypes.string,
      city: PropTypes.string,
      author: PropTypes.shape({
        id: PropTypes.number,
        pseudonym: PropTypes.string,
      }),
    }),
  ),
  fetchMyDishesSwap: PropTypes.func.isRequired,
};

SwapContent.defaultProps = {
  dishes: null,
};

export default SwapContent;
