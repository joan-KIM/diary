import React from "react";
import './App.css';
import Date from "./components/Date";
import InputTask from "./components/InputTask";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Date />
      <div className='todolist-wrapper'>
        <p className='todolist-header'>To do List</p>
        <div className='todolist-container'> 
          <InputTask />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
