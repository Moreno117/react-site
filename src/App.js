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
import LogoutModule from './modules/dashboard/containers/users/logout';
import RegisterModule from './modules/dashboard/containers/users/register';
import BioModule from './modules/bio';

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
            <Route exact path="/about" component={ BioModule } />
                        
            <PrivateRoute exact path="/dashboard" component={DashboardModule}/>
            <PrivateRoute exact path="/dashboard/posts/new" component={DashboardModule}/>            
            <PrivateRoute exact path="/dashboard/posts/:id/edit" component={ DashboardModule } />
            
            <PrivateRoute exact path="/dashboard/images" component={ DashboardModule } />
            <PrivateRoute exact path="/dashboard/images/new" component={ DashboardModule } />
                        
            <Route exact path="/moreno/acces/login" component={ LoginModue } />          
            <Route exact path="/moreno/acces/logout" component={ LogoutModule } />          
            <Route exact path="/moreno/acces/user/new" component={ RegisterModule } />          

          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
