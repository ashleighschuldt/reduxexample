import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {Delete_Todos, Remove_Todo, Add_Todo} from '../actions/action';


class Todos extends Component {
  constructor(props){
    super(props);
    this.state ={
      input: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  onNewTodo(e) {
    debugger
    this.props.Add_Todo(this.refs.newTodo.value);
    this.setState({input: ""});
  }

  onChange(e){
      this.setState({input: e.target.value});
  }

  delete(e) {
    this.props.Delete_Todos();
  }

  removeOne(todo){
    this.props.Remove_Todo(todo);
  }

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        {
          this.props.todos.map((todo) => {
            return(
              <div
                key={todo}
              >
                <em>{todo}</em>
                <button onClick={() => {this.removeOne({todo});}}>x</button>
              </div>
            );

          })
        }

        <br /><input ref='newTodo' onChange={this.onChange} placeholder='type new todo' type="text" value={this.state.input}/>
        <button onClick={this.onNewTodo.bind(this)}>{this.props.currentPlayer}</button>
        <button onClick={this.delete.bind(this)}>Delete</button>
        <h1>{this.props.currentPlayer}</h1>
        {this.props.counter}
      </div>
    );
  }
}

function mapStateToProps({todos, currentPlayer, counter}){
  return {todos, currentPlayer, counter};
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({Add_Todo, Remove_Todo, Delete_Todos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
