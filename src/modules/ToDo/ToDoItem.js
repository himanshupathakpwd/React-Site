import React, {Component} from 'react';

import moment from 'moment';

export default class ToDoItem extends Component {
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
    if (item.completed) {
      item.completedAt = moment().unix();
    } else {
      item.completedAt = undefined;
    }
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
          <span>{`${this.state.item.title} (${this.state.item.id})`}</span>
          {this.state.hovered && <button onClick={this.handleDelete}>Remove</button>}
        </label>
      </li>
    );
  }
}
