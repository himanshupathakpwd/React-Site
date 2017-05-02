import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Home from './Home';
import Main from './Main';
const About = () => <h1>Hello from About Page</h1>;
const Contact = () => <h1>Hello from Contact Page</h1>;

class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
          <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact} />
          </Route>
      </Router>
    );
  }
}

export default Routes;
