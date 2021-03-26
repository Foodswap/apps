import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import { Link } from 'react-router-dom';
import './styles.scss';

const SwapContent = ({
  dishes,
  fetchMyDishesSwap,
  userLogged,
  getAskerDishId,
  isSelected,
  sendProposition,
  succesPropositionMsg,
  errorPropositionMsg,
}) => {
  useEffect(() => fetchMyDishesSwap(), []);
  const styleSelected = isSelected ? 'swap-card swap-card-selected' : 'swap-card';

  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    dots: true,
  };

  return (

    <div className="swap">

      <p className="swap-content-succes">{succesPropositionMsg}</p>

      { !userLogged && (
        <p className="swap-log-message">Vous devez vous connecter pour proposer un échange</p>
      )}
      { userLogged && (
      <div>
        <h2 className="swap-title">Selectionnez un plat parmi votre liste</h2>

        <Slider {...settings}>
          {/* <div className="swap-cards"> */}
          { dishes && (
            dishes.map((dish) => {
              const linkUrl = `/v1/dish/${dish.id}`;
              return (

                <div
                  className={styleSelected}
                  key={dish.id}
                  onClick={(evt) => {
                    console.log(dish.id);
                    getAskerDishId(dish.id);
                  }}
                >
                  <img className="swap-card-img" src={`${process.env.API_URL}/dishes/${dish.id}/picture`} alt="" />
                  <h3 className="swap-card-name">{dish.name}</h3>
                  {/* <p className="swap-card-potionxx">{dish.portion} part(s)</p>
                    <p className="swap-card-authorxx"> Fait par {dish.author.pseudonym}</p>
                    <p className="swap-card-cityxx">{dish.city}</p> */}
                  {/* <Link to={linkUrl} className="swap-card-seemorexx">Voir plus</Link> */}
                </div>
              );
            })
          )}
          {/* </div> */}
        </Slider>
        { !dishes && (
          <p>Vous n'avez pas de plats à proposer :`(` </p>
        )}

        <p> { errorPropositionMsg} </p>
        <div className="swap-button-container">
          <button
            type="button"
            className="swap-button-send"
            onClick={(evt) => {
              evt.preventDefault();
              sendProposition();
            }}
          >
            Envoyer l'échange
          </button>
        </div>
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
      portion: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
      city: PropTypes.string,
      author: PropTypes.shape({
        id: PropTypes.number,
        pseudonym: PropTypes.string,
      }),
    }),
  ),
  fetchMyDishesSwap: PropTypes.func.isRequired,
  userLogged: PropTypes.number.isRequired,
  getAskerDishId: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  sendProposition: PropTypes.func.isRequired,
  succesPropositionMsg: PropTypes.string.isRequired,
  errorPropositionMsg: PropTypes.string.isRequired,
};

SwapContent.defaultProps = {
  dishes: null,
};

export default SwapContent;
