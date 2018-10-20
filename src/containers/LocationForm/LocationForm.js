import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShows } from '../../actions';
import PropTypes from 'prop-types';

export class LocationForm extends Component {
  constructor() {
    super();
    this.state = { 
      location: ''
    }; 
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { fetchShows, history } = this.props;

    fetchShows(this.state.location);
    history.push('./main');
    this.setState({ location: '' });
  };

  render() {
    return (
      <form 
        onSubmit={this.handleSubmit} 
        className="location-form" 
        id={this.props.id}
      >
        <input 
          type="text"
          name="location"
          value={this.state.location}
          onChange={this.handleChange}
          placeholder="City"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchShows: (shows) => (dispatch(fetchShows(shows)))
});

export default withRouter(connect(null, mapDispatchToProps)(LocationForm));

LocationForm.propTypes = {
  history: PropTypes.object,
  id: PropTypes.string
};
