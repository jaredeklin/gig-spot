import React from 'react';
import './tonightCard.css';
import defaultImage from '../../images/black-woven.jpg';
import { Link } from 'react-router-dom';

export const TonightCard = ({ show }) => {
  let { image, headlineArtist, venue, date, startTime, id } = show;
  
  return (
    <Link to={`event-details/${id}`}>
      <article className="tonight-card">
        <img src={ image ? image : defaultImage } className='artist-image' alt="artist"/>
        <div className='card-info'>
          <h4 className="artist">{ headlineArtist.Name }</h4>
          <div className="venue">{ venue.name }</div>
          <div className="date">{ date }</div>
          <div className="time">{ startTime }</div>
        </div>
      </article>
    </Link>
  );
};