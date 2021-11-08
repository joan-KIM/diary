import React from "react";
import Button from "./Button";
import propTypes from "prop-types";

export default function InputTask({value, changeHandler, createTask}){

    return(
        <div className='input-container'>
            <input 
                type='text' 
                className='input-task'
                placeholder='Task Title' 
                value={value}
                onChange={changeHandler}
            />
            <Button title={'Add Task'} createTask={createTask} />
        </div>
    )
}

InputTask.propTypes = {
    value: propTypes.string.isRequired,
    changeHandler: propTypes.func.isRequired,
    createTask: propTypes.func.isRequired
}
