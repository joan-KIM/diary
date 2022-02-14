import React, { useContext } from "react";
import { StoreContext } from "../../store/Store";
import InputTask from "./InputTask";
import TaskList from "./TaskList";

export default function TodoList(){
    const {dailyData : {tasks}, addTask, toggleTask, removeTask} = useContext(StoreContext);
    return(
        <div className='todolist-wrapper'>
            <p className='todolist-header'>To do List</p>
            <div className='todolist-container'>
                <InputTask createTask={addTask} />
                <TaskList tasks={tasks} removeTask={removeTask} toggleHandler={toggleTask} />
            </div>
        </div>
       
    )
}

