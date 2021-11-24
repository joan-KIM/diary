import React from "react";
import InputTask from "./InputTask";
import TaskList from "./TaskList";

export default function TodoList({tasks, createTask, removeTask, toggleHandler}){
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

