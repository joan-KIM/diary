import React from "react";
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button title={"add"} onClick={()=>{console.log('버튼')}} />
    </div>
  );
}

export default App;
