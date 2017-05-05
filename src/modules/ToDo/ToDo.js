import React, {Component} from 'react';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.deleteToDoAt = this.deleteToDoAt.bind(this);
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
    }
  }
  deleteToDoAt(position) {
    const newToDos = this.state.todos;
    newToDos.splice(position, 1);
    this.setState({todos: newToDos});
  }
  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <AddToDo/>
        <ToDoList todos={this.state.todos} onDelete={this.deleteToDoAt}/>
      </div>
    );
  }
}

class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(e.ref);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="todo"/>
        <button>Submit</button>
      </form>
    );
  }
}

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(position) {
    this.props.onDelete(position);
  }
  render() {
    const listItems = this.props.todos.map((todo, index) => {
      return (<ToDoItem data={todo} key={todo.id} position={index} onDelete={this.handleDelete}/>)
    });
    return (
      <ul className="todo-list">
        {listItems}
      </ul>
    );
  }
}

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = props.data;
  }
  handleChange(e) {
    this.setState({
      completed: !this.state.completed
    });
  }
  handleDelete(e) {
    this.props.onDelete(this.props.position);
  }
  render() {
    const completedClass = this.state.completed ? 'completed' : '';
    return (
      <li className={'todo-list-item ' + completedClass}>
        <label>
          <input type="checkbox" onChange={this.handleChange} checked={this.state.completed}/>
          <span>{this.state.title}</span>
          {this.state.completed && <button onClick={this.handleDelete}>Remove</button>}
        </label>
      </li>
    );
  }
}

export default ToDo;
