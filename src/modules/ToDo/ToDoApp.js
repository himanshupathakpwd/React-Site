import React, {Component} from 'react';

import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import ToDoActions from './ToDoActions';

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.deleteToDoAt = this.deleteToDoAt.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Do React',
          completed: false
        }, {
          id: 2,
          title: 'Do Angular2',
          completed: true
        }
      ]
    };
  }

  componentWillMount() {
    // console.log('component will mount');
  }

  componentDidMount() {
    // console.log('component mounted');
  }

  handleUpdate(item) {
    const todos = this.state.todos;
    todos.some((todo, index, arr) => {
      if (todo.id === item.id) {
        arr[index] = item;
        return true;
      }
      return false;
    });
    this.setState({todos});
  }

  deleteToDoAt(position) {
    this.state.todos.splice(position, 1);
    this.setState({todos: this.state.todos});
  }
  createTodo(title) {
    const lastId = this.state.todos.length ? this.state.todos[this.state.todos.length - 1].id : 0;
    this.setState({
      todos: this.state.todos.concat({
        id: lastId + 1,
        title,
        completed: false
      })
    });
  }
  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <AddToDo add={this.createTodo}/>
        <ToDoList todos={this.state.todos} onDelete={this.deleteToDoAt} onUpdate={this.handleUpdate}/>
        <ToDoActions todos={this.state.todos}/>
      </div>
    );
  }
}

export default ToDoApp;