import React from 'react';
import './Loading.css';

function Loading() {
  return (
    <div className="Loading-container">
      <div className="Loading-spinner"></div>
      <div className="Loading-message">Loading...</div>
    </div>
  );
}

export default Loading;
