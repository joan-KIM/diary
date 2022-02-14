import React, {useState, useEffect} from "react";
import Date from "./Date";
import TodoList from "./TodoList";
import Note from "./Note";
import { uuid } from "../utils/uuid";
import { today } from "../utils/date";

export default function Daily({date, data, update}){
    // 중복된 state
    const [title, setTitle] = useState(data?.note?.title);
    const [content, setContent] = useState(data?.note?.content);
    const [tasks, setTasks] = useState(data?.tasks);
    const [curDate, setCurDate] = useState(date);

    useEffect(() => {
        setTasks(data?.tasks);
        setTitle(data?.note?.title);
        setContent(data?.note?.content);
        update(curDate, tasks, {title, content});
        setCurDate(date);
    }, [date])

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
                <Date date={date} />
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
    date: today(),
    data: {
        tasks: [],
        note: {
            title:'',
            content:''
        },
        events: []
    }
}
