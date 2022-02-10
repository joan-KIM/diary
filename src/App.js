import React, {useState} from "react";
import './App.css';
import Monthly from "./components/Monthly";
import Daily from "./components/Daily";
import {today} from "./utils/date"
import { uuid } from "./utils/uuid";
import Modal from "./components/Modal";

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

  const [isShown, setIsShown] = useState(false);

  const toggleHandler = (e) => {
    setIsShown(!isShown);
  }

  return (
    <div className="App">
      <Monthly date={date} changeHandler={changeHandler} toggleHandler={toggleHandler} />
      <Daily date={date} data={data[date]} update={update} />
      { isShown && <Modal toggleHandler={toggleHandler} /> }
    </div>
  );
}

export default App;
