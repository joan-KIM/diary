import classNames from "classnames";
import React, { useState } from "react";
import Date from "./Date";
import TodoListContainer from "./TodoListContainer";
import {MdModeEdit} from "react-icons/md"; 

export default function Daily(){
    const [isEdited, setIsEdited] = useState(false);
    const [isEditing, setIsEditing] = useState(true);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [text, setText] = useState('');
    const [titleValue, setTitleValue] = useState('');

    const changeHandler = (e) => {
        setTitleValue(e.target.value);
    }
    
    const typing = (e) => {
        setText(e.target.value);
    }
    
    const toggleHandler = () => {
        setIsEdited(!isEdited);
        setIsEditing(!isEditing);
        setTitle(titleValue);
        setContent(text);
    }

    const focusHandler = (event) => {
        event.target.style.border = "1px solid #EA5455";
        event.target.style.boxShadow = "0px 0px 18px 0px #EBEBEB";
    }

    const focusOutHandler = (event) => {
        event.target.style.border = "1px solid #EBE9F1"
        event.target.style.boxShadow = "none";
    }

    return (
        <div className='daily'>
            <div style={ {display:'flex', marginTop: '3em'} }>
                <Date />
                <div className='todolist-wrapper'>
                    <p className='todolist-header'>To do List</p>
                    <TodoListContainer />
                </div>
            </div>

            <div className={classNames('note-section', {edited:isEdited}, {editing:isEditing})} >
                <div className='note-header'>
                    <p className='note-header-title' >Note</p>
                    <MdModeEdit onClick={toggleHandler} className='edit-btn' />
                </div>
                
                <input type='text' 
                className='note-title' 
                placeholder='Note Title' 
                value={titleValue} 
                onChange={changeHandler}
                onFocus={focusHandler}
                onBlur={focusOutHandler}
                />
                <textarea className='note' value={text} onChange={typing} onFocus={focusHandler} onBlur={focusOutHandler} ></textarea>

                <p className='title'>{title}</p>
                <div className='content'> {content}</div>
            </div>
        </div>
    )
}