import React, {Component} from 'react';

import moment from 'moment';
import uuidV1 from 'uuid/v1';

import AddToDo from './AddToDo';
import ToDoList from './ToDoList';
import ToDoActions from './ToDoActions';

import {ToDoApiREST as ToDoApi} from './API/ToDoApi';

export default class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.deleteToDoAt = this.deleteToDoAt.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.removeCompleted = this.removeCompleted.bind(this);

    this.ToDoApi = new ToDoApi();
    let todos = [];
    this.state = {
      todos
    };
  }

  componentWillMount() {
    // console.log('component will mount');
  }

  componentDidMount() {
    console.log('component mounted');
    this.ToDoApi.getTodos().then((response) => response.json()).then((todos) => {
      todos.map((todo) => {
        todo.id = todo._id;
      });
      return todos;
    }).then(todos => {
      this.setState({todos})
    });

    // .then(function (todos) {
    //   console.log(todos);
    // });
  }

  componentDidUpdate() {
    // console.log('component got updated');
    console.log('component updated');
    // this.ToDoApi.setTodos(this.state.todos);
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

  removeCompleted() {
    console.log('removed completed');
    const todos = [];
    this.state.todos.forEach((todo) => {
      console.log(todo);
      if (!todo.completed) {
        todos.push(todo);
      }
    });
    this.setState({todos});
  }

  deleteToDoAt(position) {
    this.state.todos.splice(position, 1);
    this.setState({todos: this.state.todos});
  }

  createTodo(title) {
    this.setState({
      todos: this.state.todos.concat({id: uuidV1(), title, createdAt: moment().unix(), completed: false, completedAt: undefined})
    });
  }

  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <h2>All ToDos</h2>
        <AddToDo add={this.createTodo}/>
        <ToDoList todos={this.state.todos} onDelete={this.deleteToDoAt} onUpdate={this.handleUpdate} filter={this.props.params.filterList}/>
        <ToDoActions todos={this.state.todos} onClear={this.removeCompleted}/>
      </div>
    );
  }
}
