import React from 'react';
import { TonightCard } from '../../components/TonightCard/TonightCard';
import { connect } from 'react-redux';
import LocationForm from '../LocationForm/LocationForm';
import PropTypes from 'prop-types';

export const Main = (props) => {
  const { tonightsShows, thisWeeksShows, upcomingShows, loading } = props;
  const combined = [...tonightsShows, ...thisWeeksShows];
  let tonightCards, thisWeekCards, upcomingCards;
 
  if (tonightsShows) {
    tonightCards = tonightsShows.map(show => {
      return (<TonightCard show={show} key={show.id} />);
    });
  }

  if (thisWeeksShows) {
    if (tonightsShows.length <= 2) {
      thisWeekCards = combined.map(show => {
        return (<TonightCard show={show} key={show.id} />);
      });
    } else {
      thisWeekCards = thisWeeksShows.map(show => {
        return (<TonightCard show={show} key={show.id} />);
      });
    }
  }

  if (upcomingShows) {
    upcomingCards = upcomingShows.map(show => {
      return (<TonightCard show={show} key={show.id} />);
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
        thisWeeksShows.length > 0 &&
        <div className='all-shows'>
          { tonightsShows.length > 2 &&
          <div className='tonight-outer'>
            <h2 className='event-happening-when-text'>Tonight:</h2>
            <section className='tonights-shows'>
              <div className='shows-inner'>
                { tonightCards }
              </div>
            </section>
          </div>
          }
          <h2 className='event-happening-when-text'>This Week:</h2>
          <section className='shows'>
            <div className='shows-inner'>
              { thisWeekCards }
            </div>
          </section>
          { 
            upcomingShows.length > 3 &&
              <div>
                <h2 className='event-happening-when-text'>Upcoming:</h2>
                <section className='shows'>
                  <div className='shows-inner'>
                    { upcomingCards }
                  </div>
                </section>
              </div>
          }
          <div className="jambase">
            <a 
              href="http://www.JamBase.com" 
              target="_top" 
              title="JamBase Concert Search"
            ><img 
                src= "http://images.jambase.com/logos/jambase140x70.gif" 
                alt="Search JamBase Concerts" 
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