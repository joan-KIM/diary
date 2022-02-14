import React, {useState, createContext} from "react";
import {today} from "../utils/date";

export const StoreContext = createContext();

export default function Store({children}) {
    const [data, setData] = useState({});
    const [selectedDate, setSelectedDate] = useState(today());
  
    const changeHandler = (value) => {
      setSelectedDate(value);
    }
  
    const update = (selectedDate, tasks, note) => {
      setData({
        ...data,
        [selectedDate]: {
          ...data[selectedDate],
          tasks,
          note
        }
      });
    }
  
    const updateEvent = (selectedDate, events) => {
      setData({
        ...data,
        [selectedDate] : {
          ...data[selectedDate],
          events,
        }
      })
    }

    return(
        <StoreContext.Provider value={{data, selectedDate, changeHandler, update, updateEvent}}>
            {children}
        </StoreContext.Provider>
    )
}