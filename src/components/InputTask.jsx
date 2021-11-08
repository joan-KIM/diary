import React from "react";
import Button from "./Button";

export default function InputTask(props){

    return(
        <div className='input-container'>
            <input 
                type='text' 
                className='input-task'
                placeholder='Task Title' 
                value={props.value}
                onChange={props.changeHandler}
            />
            <Button title={'Add Task'} createTask={props.createTask} />
        </div>
    )
}
