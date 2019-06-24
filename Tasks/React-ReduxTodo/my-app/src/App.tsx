import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTasks';
import Todo from './components/Tasks';
import List from './components/viewList'
import filterTasks from './components/filter'
import {localStorage} from"./components/viewList";
const App: React.FC = () => {
  return (
    <div className="App">
   
      <header className="App-header">
      <div>
        <AddTask />
       
      </div>
      </header>
    </div>
  );
}

export default App;
