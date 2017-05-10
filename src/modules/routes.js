import React, {Component} from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Main from './Main';
import Home from './Home';
import About from './About';
import Contact from './Contact';

// additional modules
import ToDoApp from './ToDo/ToDoApp';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/to-do(/:filterList)" component={ToDoApp}/>
        </Route>
      </Router>
    );
  }
}

export default Routes;
