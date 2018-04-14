import React from 'react';
import './eventDetails.css';

export const EventDetails = (props) => {
  const { headlineArtist, supportArtists, date, image, venue, startTime, tickets, id} = props;
  const allSupportArtists = supportArtists.map(artist => {
    return (<h4 className='support' key={id}>{artist.Name}</h4>)
  });
  // console.log(props)
  // console.log(venue)
  return (
    <article className='event-details'>
      <img src={image} className='detail-img' alt='artist'/>
      <div className='detail-right'>
        <h2 className='headliner'>{headlineArtist.Name}</h2>
        <div className='detail-date'>{date}</div>
        {
          supportArtists.length > 0 &&  
            <div className='support'>With:
            {allSupportArtists}
            </div>
        }
        <div className='detail-venue'>
          <h4 className='venue-name'>{venue.name}</h4>
          <a href={venue.url}>{venue.url}</a>
          <div className='address'>{venue.address}, {venue.city}</div>
        </div>
        <h4 className='detail-start-time'>{startTime}</h4>
        {
          tickets &&
            <div className='ticket-info'>
              <a href={tickets} className='tickets'>Get tickets</a>
            </div>
        }
      </div>
    </article>
  )
}