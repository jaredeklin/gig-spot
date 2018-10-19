import React from 'react';
import { TonightCard } from '../../components/TonightCard/TonightCard';
import { connect } from 'react-redux';
import LocationForm from '../LocationForm/LocationForm';
import PropTypes from 'prop-types';

export const Main = (props) => {
  const { tonightsShows, thisWeeksShows, upcomingShows, loading } = props;
  let tonightCards, thisWeekCards, upcomingCards;
  const showTonightsEvents = tonightsShows.length > 2;
  const showThisWeeksEvents = thisWeeksShows.length > 0;
  const showUpcomingEvents = upcomingShows.length > 3; 

  if (tonightsShows) {
    tonightCards = tonightsShows.map(show => {
      return (<TonightCard show={show} key={`3${show.id}`} />);
    });
  }

  if (thisWeeksShows) {
    if (tonightsShows.length <= 2) {
      const combined = [...tonightsShows, ...thisWeeksShows];

      thisWeekCards = combined.map(show => {
        return (<TonightCard show={show} key={`1${show.id}`} />);
      });
    } else {
      thisWeekCards = thisWeeksShows.map(show => {
        return (<TonightCard show={show} key={`4${show.id}`} />);
      });
    }
  }

  if (upcomingShows) {
    upcomingCards = upcomingShows.map(show => {
      return (<TonightCard show={show} key={`2${show.id}`} />);
    });
  }

  return (
      
    <div className='main'>
      { !loading && 
          <div className='change-location'>
            <p>Update location:</p>
            <LocationForm id='main-form' />
          </div>
      }
      {
        (showTonightsEvents || showThisWeeksEvents || showUpcomingEvents) &&
        <div className='all-shows'>
          { showTonightsEvents &&
          <div className='tonight-outer'>
            <h2 className='event-happening-when-text'>Tonight:</h2>
            <section className='tonights-shows'>
              <div className='shows-inner'>
                { tonightCards }
              </div>
            </section>
          </div>
          }
          { showThisWeeksEvents &&
          <div>
            <h2 className='event-happening-when-text'>This Week:</h2>
            <section className='shows'>
              <div className='shows-inner'>
                { thisWeekCards }
              </div>
            </section>
          </div>
          }
          { 
            showUpcomingEvents &&
              <div>
                <h2 className='event-happening-when-text'>Upcoming:</h2>
                <section className='shows'>
                  <div className='shows-inner'>
                    { upcomingCards }
                  </div>
                </section>
              </div>
          }
          <div className="icons">            
            <a href="http://eventful.com/">
              <img 
                src="http://api.eventful.com/images/powered/eventful_139x44.gif"
                alt="Local Events, Concerts, Tickets" 
                className="eventful" />
            </a>

            <a 
              href="https://www.last.fm/home" 
              target="_top" 
              title="Last FM"
            ><img 
                src= "https://cdn.last.fm/flatness/badges/lastfm_red.gif" 
                alt="Last FM" 
                className="last-fm"
                border="0" />
            </a>
          </div>
        </div>
      }
    </div>
  );
};

export const mapStateToProps = (state) => {
  const { tonightsShows, thisWeeksShows, upcomingShows, loading } = state;
  
  return {
    tonightsShows,
    thisWeeksShows,
    upcomingShows,
    loading
  };
};

export default connect(mapStateToProps)(Main);

Main.propTypes = {
  tonightsShows: PropTypes.array,
  thisWeeksShows: PropTypes.array,
  upcomingShows: PropTypes.array,
  loading: PropTypes.bool
};