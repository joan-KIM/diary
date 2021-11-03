import React from "react";
import './App.css';
import Button from './components/Button';
import Date from "./components/Date";

function App() {
  return (
    <div className="App">
      <Date />
      <Button title={"Add Task"}/>
    </div>
  );
}

export default App;
