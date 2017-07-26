import React, { Component } from 'react';
import './index.scss';

const Status = (props) => {
  return (
    <div className="status-container">
      {props.data.status}
    </div>
  );
}

export default Status;