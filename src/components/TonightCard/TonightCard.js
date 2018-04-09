import React from 'react';
import './tonightCard.css';
import defaultImage from '../../images/black-woven.jpg';

export const TonightCard = (props) => {
  let { image, artist, venue, date, startTime } = props.show;

  return (
    <article className="tonight-card">
      <img src={ image ? image : defaultImage } className='artist-image' alt="artist"/>
      <h4 className="artist">{ artist }</h4>
      <h4 className="venue">{ venue }</h4>
      <h4 className="date">{`${date} ${startTime}`}</h4>
    </article>
  );
};