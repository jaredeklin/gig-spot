import React from 'react';
import PropTypes from 'prop-types';
import loadingGif from '../../images/spinning-7-inch.gif';

export const Loading = ({ message }) => (
  <div className="loading">
    <img src={loadingGif} className="loading-gif" alt="loading" />
    <h2>{message}</h2>
  </div>
);

Loading.propTypes = {
  message: PropTypes.string
};
