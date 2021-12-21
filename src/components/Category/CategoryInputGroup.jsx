import React, { useState } from "react";
import {MdCheck} from "react-icons/md";

export default function CategoryInputGroup({addNewCalendar}){
    const [text, setText] = useState('');
    
    const changeHandler = (text) => {
        setText(text);
    }

    const clickHandler = () => {
        addNewCalendar(text);
    }

    return(
        <div className="category-input-wrapper">
            <div className='category-input-group'>
                <input 
                    type='text' 
                    className='category-input' 
                    placeholder='New Calendar' 
                    value={text}
                    onChange={e => changeHandler(e.target.value)}    
                />
                <div className='add-calendar-btn' onClick={clickHandler} >
                    <MdCheck className='add-btn-mark' />
                </div>
            </div>
        </div>
    )
}
