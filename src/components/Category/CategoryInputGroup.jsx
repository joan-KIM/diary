import React, { useState } from "react";
import {MdCheck} from "react-icons/md";
import classNames from "classnames";

export default function CategoryInputGroup({addNewCalendar, bulletColor}){
    const [text, setText] = useState('');

    console.log(bulletColor)
    
    const changeHandler = (text) => {
        setText(text);
    }

    const clickHandler = () => {
        addNewCalendar(text);
        setText('');
    }

    return(
        <div className="category-input-wrapper">
            <label 
                className={classNames('bullet-styling', 'bullet')} 
                style={ {backgroundColor: bulletColor} }
            />
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
