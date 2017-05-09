import React, {Component} from 'react';

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
        {(this.state.todos.length > 0) && totalRemainingText}
      </div>
    );
  }
}
