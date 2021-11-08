import React from "react";
import {MdClear} from 'react-icons/md';
import propTypes from 'prop-types';

export default function Task({id, title, state}) {

    return(
        <li className='task'>
            <input type='checkbox' />
            {title}
            <MdClear className='delete-task-btn'/>
        </li>
    )
}

Task.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    state: propTypes.oneOf(['todo', 'done']).isRequired
}
