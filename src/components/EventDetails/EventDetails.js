import React from 'react';
import './eventDetails.css';

export const EventDetails = (props) => {
  const { headlineArtist, supportArtists, date, image, venue, startTime, tickets} = props;
  const allSupportArtists = supportArtists.map(artist => (<h4 className='support'>{artist.Name}</h4>));

  return (
    <article className='event-details'>
      <img src={image} className='detail-img' alt='artist'/>
      <div className='detail-right'>
        <h2 className='headliner'>{headlineArtist.Name}</h2>
        {allSupportArtists}
        <h4 className='detail-venue'><a href={venue.url}>{venue.name}</a></h4>
        <div className='detail-date'>{date}</div>
        <h4 className='detail-start-time'>{startTime}</h4>
        <a href={tickets} className='tickets'>Tickets</a>
      </div>
    </article>
  )
}