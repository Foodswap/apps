import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Link } from 'react-router-dom';
import SearchForm from '../../containers/SearchForm-container';

// !! TODO proptypes

const Results = ({
  dishes, getResults, kitchenParam, dishParam, cityParam,
}) => {
  useEffect(() => {
    getResults(kitchenParam, dishParam, cityParam);
  }, []);
  return (
    <div>
      <SearchForm />
      <div className="results-section">

        { dishes && (
        <div className="results">
          <h2 className="results-title">Le résultat de votre recherche</h2>
          <div className="results-cards">
            {
              dishes.map((dish) => {
                const linkUrl = `/v1/dish/${dish.id}`;
                return (

                  <div className="results-card" key={dish.id}>
                    <div className="results-card-img" style={{ backgroundImage: `url(${process.env.API_URL}/dishes/${dish.id}/picture)` }} />
                    <h3 className="results-card-name">{dish.name}</h3>
                    <p className="results-card-potion">{dish.portion} part{dish.portion > 1 ? 's' : ''}</p>
                    <p className="results-card-author"> Fait par {dish.author.username}</p>
                    <p className="results-card-city">{dish.city}</p>
                    <Link to={linkUrl} className="results-card-seemore"> Voir plus </Link>
                  </div>
                );
              })
            }
          </div>
        </div>
        )}
      </div>
    </div>
  );
};
Results.propTypes = {
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
  getResults: PropTypes.func.isRequired,
  kitchenParam: PropTypes.string.isRequired,
  dishParam: PropTypes.string.isRequired,
  cityParam: PropTypes.string.isRequired,

};

Results.defaultProps = {
  dishes: null,
};
export default Results;
