import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './modules/common/header/container/header';

class App extends Component {
  render() {
    return (
      <Router>
        <section>
          <Header />
        </section>
      </Router>
    );
  }
}

export default App;
