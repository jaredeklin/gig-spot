import React from 'react';

export const EventDetails = (props) => {
  const { headlineArtist, supportArtists, date, image, venue, startTime, tickets} = props;
  const allSupportArtists = supportArtists.map(artist => (<h4>{artist.Name}</h4>));

  return (
    <article className='event-details'>
      <h2>{headlineArtist.Name}</h2>
      {allSupportArtists}
      <img src={image} className='detail-img' alt='artist'/>
      <h4><a href={venue.url}>{venue.name}</a></h4>
      <h4>{date}</h4>
      <h4>{startTime}</h4>
      <h4><a href={tickets}>Tickets</a></h4>
    </article>
  )
}