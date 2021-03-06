import React, { Component } from 'react';
import './ToDoListItem.css';

class ToDoListItem extends Component {
  render() {
    const {
      title,
      description
    } = this.props;
    return (
      <div className="ToDoListItem" onClick={this.props.onDelete}>
        <div className="ToDoListItem-title">{this.props.title}</div>
        <div className="ToDoListItem-description">{this.props.description}</div>
      </div>
    );
  }
}

export default ToDoListItem;