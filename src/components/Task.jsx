import React from "react";
import {MdClear} from 'react-icons/md';

export default function Task(props){
    const title = props.value.title;

    return(
        <li className='task'>
            <input type='checkbox' />
            {title}
            <MdClear className='delete-task-btn'/>
        </li>

    )
}