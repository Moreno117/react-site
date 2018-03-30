import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingModule from './modules/landing';
import BlogModule from './modules/blog';
import PostModule from './modules/post';
import DashboardModel from './modules/dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact path="/" component={ LandingModule } />
          <Route exact path="/blog" component={ BlogModule } />
          <Route exact path="/post/:id" component={ PostModule } />
          
          <Route exact path="/dashboard" component={ DashboardModel } />
        
        </Switch>
      </Router>
    );
  }
}

export default App;
