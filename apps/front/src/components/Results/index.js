import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

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
        { !dishes && (
        <div className="results">
          <div className="results-cards">
            <div className="results-card" style={{ padding: '0.6em' }}>
              <ContentLoader
                speed={2}
                viewBox="30 30 295 300"
                backgroundColor="#454a5f"
                foregroundColor="#9a95ad"
                style={{ width: '100%' }}
              >
                <rect x="88" y="174" rx="2" ry="2" width="183" height="22" />
                <rect x="131" y="212" rx="2" ry="2" width="98" height="7" />
                <rect x="58" y="15" rx="2" ry="2" width="236" height="146" />
                <rect x="110" y="229" rx="2" ry="2" width="140" height="10" />
                <rect x="130" y="248" rx="2" ry="2" width="98" height="7" />
                <rect x="116" y="270" rx="2" ry="2" width="134" height="22" />
              </ContentLoader>
            </div>
            <div className="results-card" style={{ padding: '0.6em' }}>
              <ContentLoader
                speed={2}
                viewBox="30 30 295 300"
                backgroundColor="#454a5f"
                foregroundColor="#9a95ad"
                style={{ width: '100%' }}
              >
                <rect x="88" y="174" rx="2" ry="2" width="183" height="22" />
                <rect x="131" y="212" rx="2" ry="2" width="98" height="7" />
                <rect x="58" y="15" rx="2" ry="2" width="236" height="146" />
                <rect x="110" y="229" rx="2" ry="2" width="140" height="10" />
                <rect x="130" y="248" rx="2" ry="2" width="98" height="7" />
                <rect x="116" y="270" rx="2" ry="2" width="134" height="22" />
              </ContentLoader>
            </div>
            <div className="results-card" style={{ padding: '0.6em' }}>
              <ContentLoader
                speed={2}
                viewBox="30 30 295 300"
                backgroundColor="#454a5f"
                foregroundColor="#9a95ad"
                style={{ width: '100%' }}
              >
                <rect x="88" y="174" rx="2" ry="2" width="183" height="22" />
                <rect x="131" y="212" rx="2" ry="2" width="98" height="7" />
                <rect x="58" y="15" rx="2" ry="2" width="236" height="146" />
                <rect x="110" y="229" rx="2" ry="2" width="140" height="10" />
                <rect x="130" y="248" rx="2" ry="2" width="98" height="7" />
                <rect x="116" y="270" rx="2" ry="2" width="134" height="22" />
              </ContentLoader>
            </div>
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
