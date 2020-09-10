import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    // Method 1
    // return this.props.todos.map(todo => {
    //   return <Todo todo={todo} key={todo.id} />
    // });

    // Method 2
    // return this.props.todos.map(todo => <Todo todo={todo} key={todo.id} />);
    
    // Method 3
    return this.props.todos.map(todo => (
      <Todo todo={todo} key={todo.id} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ));
  }
}

// propTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
