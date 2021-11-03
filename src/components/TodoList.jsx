import React from "react";
import Task from "./Task";

export default function TodoList(){
    return(
        <ul className='todolist'>
            <Task />
        </ul>
    )
}