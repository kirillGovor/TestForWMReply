import React from 'react';
import './App.css';
import AddTask from './components/AddTasks';

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
