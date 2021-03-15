import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import SearchForm from '../../containers/SearchForm';
import { Link } from 'react-router-dom';


const Results = ({dishes}) => (
<div> 
  <SearchForm />
  <div className="results">
  <h2 className="results-title">Le résultat de votre recherche</h2>
    <div className="results-cards">
      {
      dishes.map((dish) => {
        const linkUrl = `/v1/dish/${dish.id}`;
        return (

          <div className="results-card" key={dish.id}>
            <img className="results-card-img" src={dish.picture} alt="" />
            <h3 className="results-card-name">{dish.name}</h3>
            <p className="results-card-potion">{dish.portion} part(s)</p>
            <p className="results-card-author"> Fait par {dish.author.pseudonym}</p>
            <p className="results-card-city">{dish.city}</p>
            <Link to={linkUrl} className="results-card-seemore"> Voir plus </Link>
          </div>
        );
      })
    }
    </div>
  </div>
</div>)
Results.propTypes = {};
export default Results;
