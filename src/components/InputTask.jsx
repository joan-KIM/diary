import React from "react";
import Button from "./Button";

export default function InputTask(){
    return(
        <div className='input-container'>
            <input 
                type='text' 
                className='input-task'
                placeholder='Task Title'></input>
            <Button title={'Add Task'} />
        </div>
    )
}