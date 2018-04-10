import React from 'react';

export const EventDetails = (props) => {
  const { artist, date, image, venue, startTime} = props;

  return (
    <article className='event-details'>
      <h2>{artist}</h2>
      <img src={image} className='detail-img'/>
      <h4>{venue}</h4>
      <h4>{date}</h4>
      <h4>{startTime}</h4>
    </article>
  )
}