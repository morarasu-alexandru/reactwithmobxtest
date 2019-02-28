import React, { Component } from 'react';
import './App.css';
import {observer} from "mobx-react";
import { action } from "mobx";

@observer(['TodoListStore', 'Counter'])
class App extends Component {
  constructor() {
    super();
    console.log('this.props.todolistStore');
  }

  // @observable counter = 0;
  @action.bound
  increment() {
    this.props.Counter.counter++;
  }
  @action.bound
  decrement() {
    this.props.Counter.counter--;
  }
  render() {

    const {todoList} = this.props.TodoListStore;
    const {counter} = this.props.Counter;
    console.log('counter: ', counter);


    return (
      <div className="App">
        <ul>
          {todoList.map((entry, i) => <li key={i}>{entry.msg}</li>)}
        </ul>
        <div>
          <p>{counter}</p>
          <button onClick={this.increment}>increment</button>
          <button onClick={this.decrement}>decremenet</button>
        </div>
      </div>
    );
  }
}

export default App;
