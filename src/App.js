import React, {useState} from "react";
import './App.css';
import Monthly from "./components/Monthly";
import Daily from "./components/Daily";
import {today} from "./utils/date"
import { uuid } from "./utils/uuid";

function App() {
  const [data, setData] = useState({
    '22/2/13' : {
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
      events: [
        {
          id: uuid(),
          title: '아르바이트',
          place: '기장고촌 ㅇㅇㅇ커피',
          startTime: 1020,
          endTime: 1320,
          category: {
            'name':'Personal',
            'color':'#7367f0'
          }
        }
      ]
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
