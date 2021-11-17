import React, {useState} from "react";
import Button from "./Button";
import propTypes from "prop-types";

export default function InputTask({createTask}){
    const [text, setText] = useState('');

    const changeHandler = (event) => {
        setText(event.target.value);
    }

    const clickHandler = () => {
        createTask(text);
        setText('');
    }

    return(
        <div className='input-container'>
            <input 
                type='text' 
                className='input-task'
                placeholder='Task Title' 
                value={text}
                onChange={changeHandler}
            />
            <Button title={'Add Task'} onClick={clickHandler} />
           
        </div>
    )
}

InputTask.propTypes = {
    value: propTypes.string.isRequired,
    changeHandler: propTypes.func.isRequired,
    createTask: propTypes.func.isRequired
}