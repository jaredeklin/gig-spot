import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLocation } from './actions';

export class LandingPage extends Component {
  constructor() {
    super()
    this.state ={ 
      zipCode: '',
      radius: ''
    }
  }

  handleChange = (event) => {
    console.log(this.props)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setLocation(this.state);
    this.props.history.push('/main');
  }



  render() {
    return (
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
    )
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => (dispatch(setLocation(location)))
  };
};

export default connect(null, mapDispatchToProps)(LandingPage);
