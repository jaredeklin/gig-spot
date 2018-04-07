import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { loadShows } from './actions';
import { withRouter, Route } from 'react-router-dom';
// import LandingPage from './LandingPage';
import Main from './Main';
import LocationForm from './LocationForm.js';


export class App extends Component {

  render() {
    console.log(this.props.location)
  
    return (
      <div className="App">
        <header className="App-header">     
          <h1 className="App-title">Welcome to Concert Box Tracker</h1>
          {
            this.props.location.pathname === '/main' &&
              <LocationForm id='main-form' />
          }
        </header>
        <Route exact path = '/' render={ () => <LocationForm />} />
        <Route exact path = '/main' render={ () => <Main />} />
      </div>
    );
  };
};

export const mapStateToProps = (state) => {
  return {
    shows: state.shows,
    searchLocation: state.location
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    loadShows: (shows) => (dispatch(loadShows(shows)))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
