import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route, NavLink } from 'react-router-dom';
import Main from '../Main/Main';
import LocationForm from '../LocationForm/LocationForm.js';
import { EventDetails } from '../../components/EventDetails/EventDetails';
import loadingGif from '../../images/loader.gif';

export class App extends Component {

  render() {
    const { upcomingShows, location, loading, error } = this.props;

    return (
      <div className="App">
        <header className="App-header">     
          <h1>Concert Box Tracker Box</h1>
          {
            location.pathname === '/main' &&
              <div className='change-location'>
                <p>Update location:</p>
                <LocationForm id='main-form' />
              </div>
          }

          {
            location.pathname.includes('/event-details') &&
              <div className='change-location'>
                <NavLink to='../main'>Doing the thing?!?!?!?!??!</NavLink>
              </div>
          }

        </header>
        {
          loading &&
            <img src={ loadingGif } className='loading-gif'/>
        }

        <Route exact path = '/' component={ LocationForm } />
        <Route exact path = '/main' component={ Main } />
        <Route exact path = '/event-details' component={ EventDetails } />

        <Route path={`/event-details/:id`} render={({ match }) => {
          const { tonightsShows, thisWeeksShows, upcomingShows} = this.props
          const allShows = [...tonightsShows, ...thisWeeksShows, ...upcomingShows]
          const concert = allShows.find(show => show.id === parseInt(match.params.id))

          if (concert) {
            return (<EventDetails {...concert} />)
          }
        }} />
      </div>
    );
  };
};

export const mapStateToProps = (state) => {
  const { tonightsShows, thisWeeksShows, upcomingShows, loading, error } = state;
  return {
    tonightsShows,
    thisWeeksShows,
    upcomingShows,
    loading,
    error
  };
};

export default withRouter(connect(mapStateToProps)(App));
