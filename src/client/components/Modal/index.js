import React, { Component } from 'react';
import './index.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false
    }
  }

  render() {
    if(this.props.isOpen === false) return null;
    
    return (
      <div className="modal-container">
        <div className="backdrop">Applicant Summary</div>
        <div className="backdrop">
          Name: {this.props.data.name}
          <br></br>
          Status: {this.props.data.status}
          <br></br>
          Applcation Date: {this.props.data.applicationDate}
          <br></br>
          Location: {this.props.data.location}
        </div>
        <button onClick={this.props.onClose}>Close Modal</button>
      </div>
    );
  }
}

export default Modal;