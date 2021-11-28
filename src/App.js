import React, {useEffect, useState} from "react";
import './App.css';
import Monthly from "./components/Monthly";
import Daily from "./components/Daily";
import {today, toDate} from "./utils/date"
import { uuid } from "./utils/uuid";

function App() {
  const [data, setData] = useState({
    '21/11/28' : {
      tasks: [
        {
          id: uuid(),
          title: '알배추 사오기',
          state: false
        }
      ],
      note: {
        title: '우아아아?',
        content: '돌아가라 머리머리'
      }
    }
  }
);

  const [date, setDate] = useState(today());

  const changeHandler = (value) => {
    setDate(toDate(new Date(value)));
    console.log(date);
  }

  const update = (date, tasks, note) => {
    setData({
      ...data,
      [date]: {
        tasks,
        note
      }
    });
  }
  
  useEffect(()=>{
    console.log(data);
  }, [data])
  return (
    <div className="App">
      <Monthly changeHandler={changeHandler} />
      <Daily date={date} data={data[date]} update={update} />
    </div>
  );
}

export default App;
