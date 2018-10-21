import React from 'react';
import loadingGif from '../../images/spinning-7-inch.gif';

export const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingGif} className="loading-gif" alt="loading" />
      <h2>Finding local shows....</h2>
    </div>
  );
};