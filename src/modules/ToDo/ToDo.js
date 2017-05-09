import React, {Component} from 'react';

class ToDo extends Component {
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

class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (e.target.todo.value.length) {
      this.props.add(e.target.todo.value);
      e.target.todo.value = '';
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="todo"/>
        <button>Create</button>
      </form>
    );
  }
}

class ToDoList extends Component {
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

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.state = {
      hovered: false,
      item: {
        ...props.data
      }
    };
  }
  handleChange(e) {
    var item = this.state.item;
    item.completed = !item.completed;
    this.setState({item});
    this.props.onUpdate(this.state.item);
  }
  handleDelete(e) {
    this.props.onDelete(this.props.position);
  }

  handleMouseLeave() {
    this.setState({hovered: false});
  }
  handleMouseEnter() {
    this.setState({hovered: true});
  }
  render() {
    const completedClass = this.state.item.completed ? 'completed' : '';
    return (
      <li className={'todo-list-item ' + completedClass} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <label>
          <input type="checkbox" onChange={this.handleChange} checked={this.state.item.completed}/>
          <span>{this.state.item.title}</span>
          {this.state.hovered && <button onClick={this.handleDelete}>Remove</button>}
        </label>
      </li>
    );
  }
}

class ToDoActions extends Component {
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
    return (
      <div>
        {<span>{`${totalRemaining} ${totalRemaining > 1 ? 'items' : 'item'} left`}</span>}
      </div>
    );
  }
}

export default ToDo;
