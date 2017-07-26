import React, { Component } from 'react';
import Modal from '../Modal';
import Applicant from '../Applicant';
import Status from '../Status';
import ApplicationDate from '../ApplicationDate';
import LastAction from '../LastAction';
import Location from '../Location';
import HighNeeds from '../HighNeeds';
import ModalButton from '../ModalButton';
import './index.scss';

class CandidateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  openModal() {
    this.setState({
      isOpen: true
    })
  }

  closeModal() {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <div className="candidate-container">
        <Applicant data={this.props.data} />
        <Status data={this.props.data} />
        <ApplicationDate data={this.props.data} />
        <LastAction data={this.props.data} />
        <Location data={this.props.data} />
        <HighNeeds data={this.props.data} />
        <ModalButton className="dots" openModal={() => this.openModal()} />
        <Modal data={this.props.data} onClose={() => this.closeModal()} isOpen={this.state.isOpen}/>
      </div>
    );
  }
}

export default CandidateContainer;