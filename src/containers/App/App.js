import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route, NavLink } from 'react-router-dom';
import Main from '../Main/Main';
import { EventDetails } from '../../components/EventDetails/EventDetails';
import loadingGif from '../../images/loader.gif';
import { LandingPage } from '../../components/LandingPage/LandingPage';

export class App extends Component {

  findMatch = (match) => {
    const { tonightsShows, thisWeeksShows, upcomingShows} = this.props;
    const allShows = [...tonightsShows, ...thisWeeksShows, ...upcomingShows];

    return allShows.find(show => show.id === parseInt(match.params.id));
  }

  render() {
    const { location, loading, error } = this.props;

    return (
      <div className="App">
        { location.pathname !== '/' &&
        <header className="App-header">     
          <h1>Gig Spot</h1>

          {
            location.pathname.includes('/event-details') &&
              <div className='home'>
                <NavLink to='../main' className='home-button'>Home</NavLink>
              </div>
          }
        </header>
        }
        {
          loading &&
            <div className='loading'>
              <img src={ loadingGif } className='loading-gif' alt='loading'/>
              <h2>Finding local shows....</h2>
            </div>
        }
        {
          error &&
            <h2 className='error'>
              Nooooooooo!!!!!!! Something went wrong. Please try again.
            </h2>
        }

        <Route exact path = '/' component={ LandingPage } />
        <Route exact path = '/main' component={ Main } />
        <Route exact path = '/event-details' component={ EventDetails } />

        <Route path={`/event-details/:id`} render={({ match }) => {
          const concert = this.findMatch(match);

          if (concert) {
            return (<EventDetails concert={concert} />);
          }
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
