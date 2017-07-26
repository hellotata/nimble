import React, { Component } from 'react';
import './index.scss';

const LastAction = (props) => {
  return (
    <div className="last-action-container">
      {props.data.lastAction || 'No Action'}
    </div>
  );
}

export default LastAction;