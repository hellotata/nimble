import React, { Component } from 'react';
import './index.scss';

const Applicant = (props) => {
  return (
    <div className="applicant-container">
      <div id="logo">
      </div>
      <div className="left">
        {props.data.name}
      </div>
    </div>
  );
}

export default Applicant;