import React, {Component} from 'react';

import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleDelete(position) {
    this.props.onDelete(position);
  }
  handleUpdate(elem) {
    this.props.onUpdate(elem);
  }
  render() {
    const todos = this.props.todos;
    let filteredItems = [];
    switch (this.props.filter) {
      case 'completed':
        filteredItems = todos.filter((todo) => todo.completed);
        break;
      case 'active':
        filteredItems = todos.filter((todo) => !todo.completed);
        break;
      default:
        filteredItems = todos;
    }
    const listItems = filteredItems.map((todo, index) => <ToDoItem data={todo} key={todo.id} position={index} onDelete={this.handleDelete} onUpdate={this.handleUpdate}/>);
    return (
      <ul className="todo-list">
        {listItems.length ? listItems : 'No items avaialable'}
      </ul>
    );
  }
}
