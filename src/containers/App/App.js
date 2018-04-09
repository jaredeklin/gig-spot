import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import Main from '../Main/Main';
import LocationForm from '../LocationForm/LocationForm.js';

export class App extends Component {

  render() {
  
    return (
      <div className="App">
        <header className="App-header">     
          <h1>Welcome to Concert Tracker Box</h1>
          {
            this.props.location.pathname === '/main' &&
              <div className='change-location'>
                <p>Update location:</p>
                <LocationForm id='main-form' />
              </div>
          }
        </header>
        <Route exact path = '/' render={ () => <LocationForm /> } />
        <Route exact path = '/main' render={ () => <Main /> } />
      </div>
    );
  };
};

export default withRouter(connect(null)(App));
