import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home';

import './index.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
