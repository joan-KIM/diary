import React from "react";
import {MdClear} from 'react-icons/md';

export default function Task(){
    return(
        <li className='task'>
            <input type='checkbox' />
            이력서 작성 및 출력
            <MdClear className='delete-task-btn'/>
        </li>
    )
}