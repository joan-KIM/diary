import React from "react";
import Task from "./Task";
import propTypes from 'prop-types';

export default function TaskList({tasks,removeTask, toggleHandler}){
    const todolist = tasks.map(({id, title, state}) => <Task key={id} id={id} title={title} state={state} onClick={removeTask} onChange={toggleHandler} /> );

    return(
        <ul className='todolist'>
            {todolist}
        </ul>
    )
}

TaskList.propTypes = {
    tasks: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            title: propTypes.string.isRequired,
            state: propTypes.bool.isRequired
        })
    )
}
