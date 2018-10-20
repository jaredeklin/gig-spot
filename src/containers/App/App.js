import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route, NavLink } from 'react-router-dom';
import Main from '../Main/Main';
import { EventDetails } from '../../components/EventDetails/EventDetails';
import loadingGif from '../../images/spinning-7-inch.gif';
import { LandingPage } from '../../components/LandingPage/LandingPage';
import PropTypes from 'prop-types';

export class App extends Component {

  findMatch = (match) => {
    const { tonightsShows, thisWeeksShows, upcomingShows } = this.props;
    const allShows = [...tonightsShows, ...thisWeeksShows, ...upcomingShows];
    return allShows.find(show => show.id === match.params.id);
  }

  render() {
    const { location, loading, error } = this.props;

    return (
      <div className="App">
        { location.pathname !== '/' &&
        <header className="App-header">     
          <h1><NavLink to="/" className="header-link">Gig Spot</NavLink></h1>

          {
            location.pathname.includes('/event-details') &&
              <div className="home">
                <NavLink to="../main" className="home-button">Home</NavLink>
              </div>
          }
        </header>
        }

        <Route exact path = "/" component={ LandingPage } />
        <Route exact path = "/main" component={ Main } />

        {
          loading &&
            <div className="loading">
              <img src={ loadingGif } className="loading-gif" alt="loading"/>
              <h2>Finding local shows....</h2>
            </div>
        }
        {
          error &&
            <h2 className="error">
              Nooooooooo!!!!!!! Something went wrong. Please try again.
            </h2>
        }
        
        <Route path={'/event-details/:id'} render={({ match }) => {
          const concert = this.findMatch(match);

          if (concert) {
            return (<EventDetails concert={ concert } />);
          }

          return null;
        }} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  const { 
    tonightsShows, 
    thisWeeksShows, 
    upcomingShows, 
    loading, 
    error 
  } = state;

  return {
    tonightsShows,
    thisWeeksShows,
    upcomingShows,
    loading,
    error
  };
};

export default withRouter(connect(mapStateToProps)(App));

App.propTypes = {
  tonightsShows: PropTypes.array,
  thisWeeksShows: PropTypes.array,
  upcomingShows: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  location: PropTypes.object
};
