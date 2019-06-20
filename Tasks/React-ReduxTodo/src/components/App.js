import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from '../containers/AddTasks';
import Todo from '../components/Tasks'
class App extends Component {
  render() {
    return (
      <div>
        <AddTask />
        <Todo />
      </div>
    );
  }
}

export default App;
