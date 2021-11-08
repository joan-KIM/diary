import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import InputTask from "./InputTask";
import TodoList from "./TodoList";

export default function TodoListContainer(){
    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([]);

    const createTask = () => {
        setTasks([
            ...tasks,
            {
                id: tasks.length+1,
                title: text,
                state: 'todo'
            }
        ]);
        setText('');
    }

    const changeHandler = (event) => {
        setText(event.target.value);
    }

    useEffect(()=>{
        console.log('TO DO LIST', tasks);
    }, [tasks]);

    return(
        <div className='todolist-container'>
            <InputTask value={text} changeHandler={changeHandler} createTask={createTask} />
            <TodoList tasks={tasks} />
        </div>
    )
}