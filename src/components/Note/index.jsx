import React, { useState } from "react";
import {MdModeEdit} from "react-icons/md"; 

export default function Daily(){
    const [isEditing, setIsEditing] = useState(true);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const changeHandler = (e) => {
        setTitle(e.target.value);
    }
    
    const typing = (e) => {
        setContent(e.target.value);
    }
    
    const toggleHandler = () => {
        setIsEditing(!isEditing);
        setTitle(title);
        setContent(content);
    }

    return (
        <div className='note-section' >
            <div className='note-header'>
                <p className='note-header-title' >Note</p>
                <MdModeEdit onClick={toggleHandler} className='edit-btn' />
            </div>
            {
                isEditing
                ?
                <>
                    <input type='text' 
                        className='note-title' 
                        placeholder='Note Title' 
                        value={title} 
                        onChange={changeHandler}
                    />
                    <textarea className='note' value={content} onChange={typing} ></textarea>
                </>
                :
                <>
                    <p className='title'>{title}</p>
                    <div className='content'> {content}</div>
                </>
            }
           

            
        </div> 
    )
}