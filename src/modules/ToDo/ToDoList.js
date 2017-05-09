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
    const listItems = this.props.todos.map((todo, index) => {
      return (<ToDoItem data={todo} key={todo.id} position={index} onDelete={this.handleDelete} onUpdate={this.handleUpdate}/>)
    });
    return (
      <ul className="todo-list">
        {listItems}
      </ul>
    );
  }
}
