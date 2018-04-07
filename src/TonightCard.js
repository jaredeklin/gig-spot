import React from 'react';
import './tonightCard.css'

export const TonightCard = (props) => {
  const { image, artist, venue, date } = props.show;
  console.log(props)
  return (
    <article className="tonight-card">
      <img src={image} className='artist-image'/>
      <h4 className="artist">{artist}</h4>
      <h4 className="venue">{venue}</h4>
    </article>
  )
}