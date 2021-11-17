import React from "react";
import {MdClear, MdCheck} from 'react-icons/md';
import propTypes, { func } from 'prop-types';
import classNames from "classnames";

export default function Task({id, title, state, onClick}) {
    const clickHandler = () => {
        onClick(id);
    }

    return(
        <li className='task' key={id}>
            <label className='checkbox'>
                <input 
                type='checkbox' 
                className='checkbox-input' 
                // onChange={} 
                />
                <MdCheck className='checkmark' />
            </label>
            <span>{title}</span>
            <MdClear className='delete-task-btn' onClick={clickHandler}/>
        </li>
    )
}

Task.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    state: propTypes.oneOf(['todo', 'done']).isRequired
}
