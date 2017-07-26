import React, { Component } from 'react';
import './index.scss';

const Location = (props) => {
  return (
    <div className="location-container">
      {props.data.location}
    </div>
  );
}

export default Location;