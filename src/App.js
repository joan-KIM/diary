import React from "react";
import './App.css';
import Date from "./components/Date";
import TodoListContainer from "./components/TodoListContainer";

function App() {
  return (
    <div className="App">
      <Date />
      <div className='todolist-wrapper'>
        <p className='todolist-header'>To do List</p>
        <TodoListContainer />
      </div>
    </div>
  );
}

export default App;
