import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './modules/common/header/container/header';
import Footer from './modules/common/footer/containers/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <section>
          <Header />
          <Footer />
        </section>
      </Router>
    );
  }
}

export default App;
