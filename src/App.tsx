import React from 'react';
import './App.css';
import {Task} from "./components/Task/Task";
import {TasksColumn} from "./components/TasksColumn/TasksColumn";

function App() {
  return (
    <div className="App">
       <TasksColumn/>
    </div>
  );
}

export default App;
