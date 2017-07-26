import React, { Component } from 'react';
import './index.scss';

const ApplicationDate = (props) => {
  return (
    <div className="applicationDate-container">
      {props.data.applicationDate}
    </div>
  );
}

export default ApplicationDate;