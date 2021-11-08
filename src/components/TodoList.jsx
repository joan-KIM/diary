import React from "react";
import Task from "./Task";

export default function TodoList(props){
    const array = props.tasks;

    const todolist = array.map(value => {
            <Task task={value} />
        })

    return(
        <ul className='todolist'>
            {todolist}
        </ul>
    )
}
