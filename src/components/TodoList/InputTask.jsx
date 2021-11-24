import React, {useState} from "react";
import AddTaskBtn from "./AddTaskBtn";
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
            <AddTaskBtn title={'Add Task'} onClick={clickHandler} />
           
        </div>
    )
}

InputTask.propTypes = {
    createTask: propTypes.func.isRequired
}
