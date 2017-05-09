import React, {Component} from 'react';

export default class AddToDo extends Component {
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
