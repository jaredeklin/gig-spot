import React from 'react';
import { TonightCard } from '../../components/TonightCard/TonightCard';
import { connect } from 'react-redux';

export const Main = (props) => {
  let tonightCards;

  if (props.shows) {
    tonightCards = props.shows.map(show => {
      return(<TonightCard show={show} key={show.id} />)
    });
  };

  return (
    <div className='main'>
      <h2 className='event-happening-when-text'>Tonight:</h2>
      <section className='tonights-shows'>
        <div className='shows-inner'>
          { tonightCards }
        </div>
      </section>
      <h2 className='event-happening-when-text'>This Week:</h2>
      <section className='shows'>
        <div className='shows-inner'>
          { tonightCards }
        </div>
      </section>
      <h2 className='event-happening-when-text'>Upcoming:</h2>
      <section className='shows'>
        <div className='shows-inner'>
          { tonightCards }
        </div>
      </section>
    </div>
  );
};

export const mapStateToProps = (state) => ({
  shows: state.shows
});

export default connect(mapStateToProps)(Main);