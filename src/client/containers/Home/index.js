import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCandidates } from '../../actions';
import CandidateContainer from '../../components/CandidateContainer';

import './index.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCandidates();
  }

  render() {
    let candy = this.props.candidates.toJS();
    let titles = ['Applicant', 'Status', 'Application Date', 'Last Action', 'Location', 'High Needs', ''];

    return (
      <div className="homeContainer">
        <div className="title-container">
          <ul>
            {titles.map((element, idx) => {
              return <li key={idx} style={{height: "35px", lineHeight: "35px", width: "calc(100% / 7)", display: "block", float: "left"}}>{element}</li>
            })}
          </ul>
        </div>
        
        <div className="main-candidate-containers">
          {candy.map((element, idx) => {
            return <CandidateContainer key={idx} data={element} />
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    candidates: state.candidates
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCandidates: () => dispatch(getCandidates())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);