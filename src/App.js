import React, {useState} from "react";
import './App.css';
import Monthly from "./components/Monthly";
import Daily from "./components/Daily";
import {today} from "./utils/date"
import { uuid } from "./utils/uuid";

function App() {
  const [data, setData] = useState({
    '21/12/10' : {
      tasks: [
        {
          id: uuid(),
          title: '이벤트 등록',
          state: false
        }
      ],
      note: {
        title: '우아아아?',
        content: '돌아가라 머리머리'
      },
      event: []
    }
  }
);

  const [date, setDate] = useState(today());

  const changeHandler = (value) => {
    setDate(value);
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

  

  return (
    <div className="App">
      <Monthly date={date} changeHandler={changeHandler} />
      <Daily date={date} data={data[date]} update={update} />
    </div>
  );
}

export default App;
