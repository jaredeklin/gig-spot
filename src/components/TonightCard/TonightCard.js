import React from 'react';
import './tonightCard.css';
import defaultImage from '../../images/black-woven.jpg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TonightCard = ({ show }) => {

  let { image, headlineArtist, venue, date, startTime, id } = show;
  
  return (
    <Link to={`event-details/${id}`}>
      <article className="tonight-card">
        <img 
          src={image} 
          onError={(event) => event.target.src = defaultImage}
          className="artist-image" 
          alt="artist"
        />
        <div className="card-info">
          <h4 className="artist">{ headlineArtist }</h4>
          <div className="venue">{ venue.name }</div>
          <div className="date">{ date }</div>
          <div className="time">{ startTime }</div>
        </div>
      </article>
    </Link>
  );
};

TonightCard.propTypes = {
  id: PropTypes.object,
  show: PropTypes.object
};