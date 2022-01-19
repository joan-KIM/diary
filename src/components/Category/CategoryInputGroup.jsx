import React, { useState } from "react";
import {MdCheck} from "react-icons/md";
import classNames from "classnames";

export default function CategoryInputGroup({addNewCalendar, bulletColor}){
    const [text, setText] = useState('');
    
    const changeHandler = (text) => {
        setText(text);
    }

    const clickHandler = () => {
        addNewCalendar(text);
        setText('');
    }

    return(
        <div className='category-input-group'>
            <div className={classNames('bullet-wrapper', 'inputgroup-border-styling')}>
                <label 
                    className={classNames('bullet-styling', 'bullet')} 
                    style={ {backgroundColor: bulletColor, margin:'auto 0.8em auto 0.4em'} }
                />
            </div>          
            <input 
                type='text'
                className={classNames('category-input', 'inputgroup-border-styling')}
                placeholder='New Calendar' 
                value={text}
                onChange={e => changeHandler(e.target.value)}    
            />
            <div className={classNames('add-calendar-btn', 'inputgroup-border-styling')} onClick={clickHandler} >
                <MdCheck className='add-btn-mark' />
            </div>
        </div>
    )
}
