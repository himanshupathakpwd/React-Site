import React, {Component} from 'react';

import NavLink from '../NavLink';

export default class ToDoActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.todos !== nextProps.todos) {
      this.setState({todos: nextProps.todos});
    }
  }
  render() {
    let totalRemaining = 0;
    for (let todo of this.state.todos) {
      if (!todo.completed) {
        totalRemaining++;
      }
    }
    let totalRemainingText = `${totalRemaining} ${totalRemaining > 1 ? 'items' : 'item'} left`;
    return (
      <div>
        {(this.state.todos.length > 0) && <span>{totalRemainingText}</span>}
        <nav>
          <ul>
            <li>
              <NavLink to="/to-do">All</NavLink>
            </li>
            <li>
              <NavLink to="/to-do/active">Active</NavLink>
            </li>
            <li>
              <NavLink to="/to-do/completed">Completed</NavLink>
            </li>
          </ul>
        </nav>

      </div>
    );
  }
}
