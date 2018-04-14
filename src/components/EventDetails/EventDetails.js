import React from 'react';
import './eventDetails.css';

export const EventDetails = (props) => {
  const { headlineArtist, supportArtists, date, image, venue, startTime, tickets, id} = props;
  const allSupportArtists = supportArtists.map(artist => (<h4 className='support' key={id}>{artist.Name}</h4>));
  // console.log(props)
  console.log(venue)
  return (
    <article className='event-details'>
      <img src={image} className='detail-img' alt='artist'/>
      <div className='detail-right'>
        <h2 className='headliner'>{headlineArtist.Name}</h2>
        {allSupportArtists}

        <div className='detail-venue'>
          <h4 className='venue-name'>{venue.name}</h4>
          <a href={venue.url}>{venue.url}</a>
          <h4>{venue.address}, {venue.city}</h4>
        </div>
        <div className='detail-date'>{date}</div>
        <h4 className='detail-start-time'>{startTime}</h4>
        {
          tickets &&
            <a href={tickets} className='tickets'>Get tickets</a>
        }
      </div>
    </article>
  )
}