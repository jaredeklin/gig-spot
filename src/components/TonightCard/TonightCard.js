import React from 'react';
import './tonightCard.css';
import defaultImage from '../../images/black-woven.jpg';
import { Link } from 'react-router-dom';
import { EventDetails } from '../EventDetails/EventDetails';

export const TonightCard = (props) => {
  let { image, artist, venue, date, startTime, id } = props.show;

  return (
    <Link to={`event-details/${id}`}>
      <article className="tonight-card">
        <img src={ image ? image : defaultImage } className='artist-image' alt="artist"/>
        <h4 className="artist">{ artist }</h4>
        <h4 className="venue">{ venue }</h4>
        <h4 className="date">{`${date} ${startTime}`}</h4>
      </article>
    </Link>
  );
};