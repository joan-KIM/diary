import React, {useState} from "react";
import './App.css';
import Monthly from "./components/Monthly";
import Daily from "./components/Daily";
import Store from "./store/Store";

function App() {

  return (
    <Store>
      <div className="App">
        <Monthly />
        <Daily  />
      </div>
    </Store>
  );
}

export default App;
