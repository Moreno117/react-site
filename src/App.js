import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingModule from './modules/landing';
import BlogModule from './modules/blog';
import PostModule from './modules/post';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact path="/" component={ LandingModule } />
          <Route exact path="/blog" component={ BlogModule } />
          <Route exact path="/post/:id" component={ PostModule } />
        
        </Switch>
      </Router>
    );
  }
}

export default App;
