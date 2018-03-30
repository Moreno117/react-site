import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store'

import LandingModule from './modules/landing';
import BlogModule from './modules/blog';
import PostModule from './modules/post';
import DashboardModel from './modules/dashboard';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>

            <Route exact path="/" component={ LandingModule } />
            <Route exact path="/blog" component={ BlogModule } />
            <Route exact path="/post/:id" component={ PostModule } />
            
            <Route exact path="/dashboard" component={ DashboardModel } />
            <Route exact path="/dashboard/posts/new" component={ DashboardModel } />
            <Route exact path="/dashboard/posts/:id/edit" component={ DashboardModel } />
          
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
