import React, { Component } from 'react'

export class addTodo extends Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input
          type="text"
          placeholder="Add Todo..."
          name="title"
          style={{flex: 10, padding: '10px'}} value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" className="btn" style={{flex: 1}} />
      </form>
    )
  }
}

export default addTodo