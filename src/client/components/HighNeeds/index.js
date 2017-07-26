import React, { Component } from 'react';
import './index.scss';

const HighNeeds = (props) => {
  return (
    <div className="high-needs">
      {props.data.highNeeds || 'High Needs'}
    </div>
  );
}

export default HighNeeds;