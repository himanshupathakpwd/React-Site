import React, {Component} from 'react';
import NavLink from './NavLink';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Application</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/to-do">To Do</NavLink>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

// class NavLink extends Component {
//   render() {
//     return (
//         <Link {...this.props} activeClassName="active" />
//     );
//   }
// }
export default Main;
