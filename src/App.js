import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store'

import LandingModule from './modules/landing';
import BlogModule from './modules/blog';
import PostModule from './modules/post';
import DashboardModule from './modules/dashboard';
import LoginModue from './modules/dashboard/containers/users/login';
import PrivateRoute from './modules/dashboard/components/users/privateRoute';

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
                        
            <PrivateRoute exact path="/dashboard" component={DashboardModule}/>
            <PrivateRoute exact path="/dashboard/posts/new" component={DashboardModule}/>            
            <PrivateRoute exact path="/dashboard/posts/:id/edit" component={ DashboardModule } />
            
            <PrivateRoute exact path="/dashboard/images" component={ DashboardModule } />
            <PrivateRoute exact path="/dashboard/images/new" component={ DashboardModule } />
            
            <Route exact path="/login" component={ LoginModue } />          

          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
