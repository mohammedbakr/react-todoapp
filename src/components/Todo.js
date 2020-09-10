import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todo extends Component {

  getStyle = () => {
    return {
      padding: '10px',
      background: '#f4f4f4',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      // style 1
      // <div style={itemStyle}>
      
      // style 2
      // <div style={{ backgroundColor: '#f4f4f4' }}>
      
      // style 3
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
          { title }
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

// Proptypes
Todo.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
  padding: '5px 9px'
}

// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }

export default Todo
