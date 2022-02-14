import React, {useState, useEffect, useContext} from "react";
import Date from "./Date";
import TodoList from "./TodoList";
import Note from "./Note";
import { uuid } from "../utils/uuid";
import { today } from "../utils/date";
import { StoreContext } from "../store/Store";

export default function Daily(){
    const {selectedDate, data, update} = useContext(StoreContext);
    // 중복된 state
    const [title, setTitle] = useState(data[selectedDate]?.note?.title || "");
    const [content, setContent] = useState(data[selectedDate]?.note?.content || "");
    const [tasks, setTasks] = useState(data[selectedDate]?.tasks || []);
    const [curDate, setCurDate] = useState(selectedDate);

    useEffect(() => {
        setTasks(data[selectedDate]?.tasks || []);
        setTitle(data[selectedDate]?.note?.title || "");
        setContent(data[selectedDate]?.note?.content || "");
        update(curDate, tasks, {title, content});
        setCurDate(selectedDate);
    }, [selectedDate])

    const changeHandler = (text) => {
        setTitle(text);
    }
    
    const typing = (text) => {
        setContent(text);
    }
    
    const createTask = (text) => {
        setTasks([
            ...tasks,
            {
                id: uuid(),
                title: text,
                state: false
            }
        ]);
    }

    function removeTask(id){
        const todolist = tasks.filter(task => task.id !== id);
        setTasks(todolist);
    }

    function toggleHandler(id){
        const todolist = tasks.map(task => {
            if (task.id === id) {
              return {
                ...task,
                state: !task.state,
              }
            }
            return task;
          });

        setTasks(todolist);
    }

    return (
        <div className='daily'>
            <div style={ {display:'flex', height: '45%'} }>
                <Date  />
                <TodoList
                    tasks={tasks}
                    createTask={createTask}
                    removeTask={removeTask}
                    toggleHandler={toggleHandler}
                />
            </div>

            <Note 
                title={title}
                content={content}
                changeHandler={changeHandler}
                typing={typing}
            />
        </div>
    )
}

Daily.defaultProps = {
    selectedDate: today(),
    data: {
        tasks: [],
        note: {
            title:'',
            content:''
        },
        events: []
    }
}
