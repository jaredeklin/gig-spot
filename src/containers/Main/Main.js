import React from 'react';
import { TonightCard } from '../../components/TonightCard/TonightCard';
import { connect } from 'react-redux';

export const Main = (props) => {
  const { tonightsShows, thisWeeksShows, upcomingShows } = props
  let tonightCards, thisWeekCards, upcomingCards;

  if (tonightsShows) {
    tonightCards = tonightsShows.map(show => {
      return (<TonightCard show={show} key={show.id} />)
    });
  };

  if (thisWeeksShows) {
    thisWeekCards = thisWeeksShows.map(show => {
      return (<TonightCard show={show} key={show.id} />)
    })
  }

  if (upcomingShows) {
    upcomingCards = upcomingShows.map(show => {
      return (<TonightCard show={show} key={show.id} />)
    })
  }

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
          { thisWeekCards }
        </div>
      </section>
      <h2 className='event-happening-when-text'>Upcoming:</h2>
      <section className='shows'>
        <div className='shows-inner'>
          { upcomingCards }
        </div>
      </section>
    </div>
  );
};

export const mapStateToProps = (state) => {
  const { tonightsShows, thisWeeksShows, upcomingShows } = state;
  return {
    tonightsShows,
    thisWeeksShows,
    upcomingShows
  }
};

export default connect(mapStateToProps)(Main);