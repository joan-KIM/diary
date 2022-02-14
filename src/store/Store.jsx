import React, {useState, createContext} from "react";
import {today} from "../utils/date";
import {uuid} from "../utils/uuid";

export const StoreContext = createContext();

const emptyDailyData= {
  note: {
    title: "",
    content: ""
  },
  tasks: [],
  events: []
}

export default function Store({children}) {
    const [data, setData] = useState({});
    const [selectedDate, setSelectedDate] = useState(today());
    const dailyData = data[selectedDate] || emptyDailyData;
  
    const changeHandler = (value) => {
      setSelectedDate(value);
    }

    const addTask = (title) => {
      setData({
        ...data,
        [selectedDate] : {
          ...dailyData,
          tasks: [
            ...dailyData.tasks,
            {
              id:uuid(),
              title,
              state: false
            }
          ]}
      })
    }

    const toggleTask = (id) => {
      setData(
        {
          ...data,
          [selectedDate] : {
            ...dailyData,
            tasks: dailyData.tasks.map(task => {
              if (task.id === id) {
                return {
                  ...task,
                  state: !task.state,
                }
              }
              return task;
            })
          }
        }
      );
    }

    const removeTask = (id) => {
      setData({
        ...data,
        [selectedDate] : {
          ...dailyData,
          tasks: dailyData.tasks.filter(task => task.id !== id)
        }
      })
    }
     
    const updateNote = (note) => {
      setData({
        ...data,
        [selectedDate] : {
          ...dailyData,
          note,
        }
      })
    }
  
    const updateEvent = (date, events) => {
      setData({
        ...data,
        [date] : {
          ...dailyData,
          events,
        }
      })
    }

    return(
        <StoreContext.Provider value={{
          data, 
          dailyData, 
          selectedDate, 
          changeHandler, 
          updateEvent,
          addTask,
          toggleTask,
          removeTask,
          updateNote
          }}>
            {children}
        </StoreContext.Provider>
    )
}