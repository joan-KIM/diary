import React from "react";
import Task from "./Task";
import propTypes from 'prop-types';

export default function TodoList({tasks}){
    const todolist = tasks.map(({id, title, state}) => <Task id={id} title={title} state={state} />);

    return(
        <ul className='todolist'>
            {todolist}
        </ul>
    )
}

TodoList.propTypes = {
    tasks: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            title: propTypes.string.isRequired,
            state: propTypes.oneOf(['todo', 'done']).isRequired
        })
    )
}
