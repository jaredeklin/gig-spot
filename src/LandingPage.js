import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLocation } from './actions';

export class LandingPage extends Component {
  constructor() {
    super()
    this.state = { 
      zipCode: '',
      radius: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setLocation(this.state);
    // console.log(this.props)
    const path = './main';
    this.props.history.push(path);
  }



  render() {
    return (
      <section className='landing-page'>
        <header className="App-header">     
          <h1 className="App-title">Welcome to Personal Project</h1>
        </header>
        <form onSubmit={this.handleSubmit} className='location-form'>
          <input 
            type='text'
            name='zipCode'
            value={this.state.zipCode}
            onChange={this.handleChange}
            placeholder='Zip-code'
          />
          <input
            type='text'
            name='radius'
            value={this.state.radius}
            onChange={this.handleChange}
            placeholder='Radius'
          />
          <button>Submit</button>
        </form>
      </section>
    )
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => (dispatch(setLocation(location)))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(LandingPage));
