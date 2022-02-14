import React, {useState} from "react";
import './App.css';
import Monthly from "./components/Monthly";
import Daily from "./components/Daily";
import {today} from "./utils/date"

function App() {
  const [data, setData] = useState({});
  const [date, setDate] = useState(today());

  const changeHandler = (value) => {
    setDate(value);
  }

  const update = (date, tasks, note) => {
    setData({
      ...data,
      [date]: {
        ...data[date],
        tasks,
        note
      }
    });
  }

  const updateEvent = (date, events) => {
    setData({
      ...data,
      [date] : {
        ...data[date],
        events,
      }
    })
  }

  console.log(data);

  return (
    <div className="App">
      <Monthly date={date} data={data} updateEvent={updateEvent} changeHandler={changeHandler} />
      <Daily date={date} data={data[date]} update={update} />
    </div>
  );
}

export default App;
