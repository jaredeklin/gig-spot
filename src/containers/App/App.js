import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import Main from '../Main/Main';
import LocationForm from '../LocationForm/LocationForm.js';
import { EventDetails } from '../../components/EventDetails/EventDetails'

export class App extends Component {

  render() {
  
    return (
      <div className="App">
        <header className="App-header">     
          <h1>Concert Box Tracker Box</h1>
          {
            this.props.location.pathname === '/main' &&
              <div className='change-location'>
                <p>Update location:</p>
                <LocationForm id='main-form' />
              </div>
          }

        </header>
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
  const { tonightsShows, thisWeeksShows, upcomingShows} = state;
  return {
    tonightsShows,
    thisWeeksShows,
    upcomingShows
  };
};

export default withRouter(connect(mapStateToProps)(App));
