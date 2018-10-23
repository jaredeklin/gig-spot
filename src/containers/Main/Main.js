import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TonightCard } from '../../components/TonightCard/TonightCard';
import LocationForm from '../LocationForm/LocationForm';
import { Loading } from '../../components/Loading/Loading';

export const Main = props => {
  const {
    tonightsShows,
    thisWeeksShows,
    upcomingShows,
    tonightLoading,
    thisWeekLoading,
    upcomingLoading,
    location
  } = props;
  let tonightCards;
  let thisWeekCards;
  let upcomingCards;
  const showTonightsEvents = tonightsShows.length > 2;
  const showThisWeeksEvents = thisWeeksShows.length > 0;
  const showUpcomingEvents = upcomingShows.length > 3;

  if (tonightsShows) {
    tonightCards = tonightsShows.map(show => (
      <TonightCard show={show} key={`3${show.id}`} />
    ));
  }

  if (thisWeeksShows) {
    if (tonightsShows.length <= 2) {
      const combined = [...tonightsShows, ...thisWeeksShows];

      thisWeekCards = combined.map(show => (
        <TonightCard show={show} key={`1${show.id}`} />
      ));
    } else {
      thisWeekCards = thisWeeksShows.map(show => (
        <TonightCard show={show} key={`4${show.id}`} />
      ));
    }
  }

  if (upcomingShows) {
    upcomingCards = upcomingShows.map(show => (
      <TonightCard show={show} key={`2${show.id}`} />
    ));
  }

  return (
    <div className="main">
      {!tonightLoading && (
        <div className="change-location">
          <p>Update location:</p>
          <LocationForm id="main-form" currentLocation={location} />
        </div>
      )}
      {(showTonightsEvents || showThisWeeksEvents || showUpcomingEvents) && (
        <div className="all-shows">
          {showTonightsEvents && (
            <div className="tonight-outer">
              <h2 className="event-happening-when-text">Tonight:</h2>
              <section className="tonights-shows">
                <div className="shows-inner">{tonightCards}</div>
              </section>
            </div>
          )}
          {thisWeekLoading && <Loading message="Finding this weeks shows..." />}
          {showThisWeeksEvents && (
            <div>
              <h2 className="event-happening-when-text">This Week:</h2>
              <section className="shows">
                <div className="shows-inner">{thisWeekCards}</div>
              </section>
            </div>
          )}
          {upcomingLoading && <Loading message="Finding upcoming shows..." />}
          {showUpcomingEvents && (
            <div>
              <h2 className="event-happening-when-text">Upcoming:</h2>
              <section className="shows">
                <div className="shows-inner">{upcomingCards}</div>
              </section>
            </div>
          )}
          <div className="icons">
            <a href="http://eventful.com/">
              <img
                src="http://api.eventful.com/images/powered/eventful_139x44.gif"
                alt="Local Events, Concerts, Tickets"
                className="eventful"
              />
            </a>

            <a href="https://www.last.fm/home" target="_top" title="Last FM">
              <img
                src="https://cdn.last.fm/flatness/badges/lastfm_red.gif"
                alt="Last FM"
                className="last-fm"
                border="0"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export const mapStateToProps = state => {
  const {
    tonightsShows,
    thisWeeksShows,
    upcomingShows,
    tonightLoading,
    thisWeekLoading,
    upcomingLoading,
    location
  } = state;

  return {
    tonightsShows,
    thisWeeksShows,
    upcomingShows,
    tonightLoading,
    thisWeekLoading,
    upcomingLoading,
    location
  };
};

export default connect(mapStateToProps)(Main);

Main.propTypes = {
  tonightsShows: PropTypes.array,
  thisWeeksShows: PropTypes.array,
  upcomingShows: PropTypes.array,
  tonightLoading: PropTypes.bool,
  thisWeekLoading: PropTypes.bool,
  upcomingLoading: PropTypes.bool,
  location: PropTypes.string
};
