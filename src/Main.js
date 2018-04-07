import React from 'react';
import { TonightCard } from './TonightCard';
import { connect } from 'react-redux'

export const Main = (props) => {
  // const { zipCode, radius } = props.location;

  let tonightCards;
  if(props.shows) {
    tonightCards = props.shows.map(show => {
      return(<TonightCard show={show}/>)
    })
  }

  return (
    <div className='main'>
      <section className='tonights-shows'>
        <div className='tonight-inner'>
          { tonightCards }
        </div>
      </section>
    </div>
  );
};

export const mapStateToProps = (state) => ({
  shows: state.shows
});

export default connect(mapStateToProps)(Main)