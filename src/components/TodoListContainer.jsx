import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import InputTask from "./InputTask";
import TodoList from "./TodoList";

export default function TodoListContainer(){
    const [tasks, setTasks] = useState([]);

    const createTask = (text) => {
        setTasks([
            ...tasks,
            {
                id: Date.now(),
                title: text,
                state: 'todo'
            }
        ]);
    }

    function removeTask(id){
        const todolist = tasks.filter(task => task.id !== id);
        setTasks(todolist);
    }

    useEffect(()=>{
        console.log('TO DO LIST', tasks);
    }, [tasks]);

    return(
        <div className='todolist-container'>
            <InputTask createTask={createTask} />
            <TodoList tasks={tasks} removeTask={removeTask} />
        </div>
    )
}