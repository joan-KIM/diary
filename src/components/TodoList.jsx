import React from "react";
import Task from "./Task";

export default function TodoList({tasks}){
    const todolist = tasks.map(({id, title, state})=> {
            return <Task id={id} title={title} state={state} />
        })

    return(
        <ul className='todolist'>
            {todolist}
        </ul>
    )
}
