import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingModule from './modules/landing';
import BlogModule from './modules/blog';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact path="/" component={ LandingModule } />
          <Route exact path="/blog" component={ BlogModule } />
        
        </Switch>
      </Router>
    );
  }
}

export default App;
