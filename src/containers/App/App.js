import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route, NavLink } from 'react-router-dom';
import Main from '../Main/Main';
import { EventDetails } from '../../components/EventDetails/EventDetails';
import { LandingPage } from '../../components/LandingPage/LandingPage';
import PropTypes from 'prop-types';
import { fetchShows, getStorage } from '../../actions/index';
import { Loading } from '../../components/Loading/Loading';
import { Error } from '../../components/Error/Error';

export class App extends Component {

  findMatch = (match) => {
    const { tonightsShows, thisWeeksShows, upcomingShows } = this.props;
    const allShows = [...tonightsShows, ...thisWeeksShows, ...upcomingShows];
    return allShows.find(show => show.id === match.params.id);
  }

  componentDidMount = () => {
    const { fetchShows } = this.props;
    
    if (localStorage.events) {
      const events = getStorage();
      fetchShows(events.city);
    }
  }

  render() {
    const { location, tonightLoading, error } = this.props;
    
    return <div className="App">
      {location.pathname !== '/' && <header className="App-header">
        <h1>
          <NavLink to="/" className="header-link">
                Gig Spot
          </NavLink>
        </h1>

        {location.pathname.includes('/event-details') && <div className="home">
          <NavLink to="../main" className="home-button">
                  Home
          </NavLink>
        </div>}
      </header>}

      <Route exact path="/" component={LandingPage} />
      <Route exact path="/main" component={Main} />

      {tonightLoading && <Loading message="Finding local shows...." />}
      {error && <Error />}

      <Route path={'/event-details/:id'} render={({ match }) => {
        const concert = this.findMatch(match);

        if (concert) {
          return <EventDetails concert={concert} />;
        }

        return null;
      }} />
    </div>;
  }
}

export const mapStateToProps = (state) => {
  const { 
    tonightsShows, 
    thisWeeksShows, 
    upcomingShows, 
    tonightLoading, 
    error 
  } = state;

  return {
    tonightsShows,
    thisWeeksShows,
    upcomingShows,
    tonightLoading,
    error
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchShows: shows => dispatch(fetchShows(shows))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  tonightsShows: PropTypes.array,
  thisWeeksShows: PropTypes.array,
  upcomingShows: PropTypes.array,
  tonightLoading: PropTypes.bool,
  error: PropTypes.bool,
  location: PropTypes.object,
  fetchShows: PropTypes.func
};
