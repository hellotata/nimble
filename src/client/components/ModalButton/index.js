import React, { Component } from 'react';
import './index.scss'

const ModalButton = (props) => {
  return (
    <div className="modal-button-container" onClick={props.openModal}>
      ...
    </div>
  );
}

export default ModalButton;