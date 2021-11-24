import React, { useEffect, useState } from "react";
import InputTask from "./InputTask";
import TaskList from "./TaskList";

export default function TodoListContainer(){
    const [tasks, setTasks] = useState([]);
    
    const createTask = (text) => {
        setTasks([
            ...tasks,
            {
                id: Date.now(),
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

    useEffect(()=>{
        console.log('TO DO LIST', tasks);
    }, [tasks]);

    return(
        <div className='todolist-wrapper'>
            <p className='todolist-header'>To do List</p>
            <div className='todolist-container'>
                <InputTask createTask={createTask} />
                <TaskList tasks={tasks} removeTask={removeTask} toggleHandler={toggleHandler} />
            </div>
        </div>
       
    )
}