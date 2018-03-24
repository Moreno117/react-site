import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingModule from './modules/landing';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact path="/" component={ LandingModule } />
        
        </Switch>
      </Router>
    );
  }
}

export default App;
