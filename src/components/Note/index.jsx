import React, { useState } from "react";
import {MdModeEdit, MdDone} from "react-icons/md"; 

export default function Note({title, content, changeHandler, typing}){
    const [isEditing, setIsEditing] = useState(true);
    
    const toggleHandler = () => {
        setIsEditing(!isEditing);
    }

    return (
        <div className='note-section' >
            <div className='note-header'>
                <p className='note-header-title' >Note</p>
                { isEditing ? <MdDone onClick={toggleHandler} className='done-btn'/> : <MdModeEdit onClick={toggleHandler} className='edit-btn' /> }
            </div>
            {
                isEditing
                ?
                <>
                    <input type='text' 
                        className='note-title' 
                        placeholder='Note Title' 
                        value={title} 
                        onChange={e => changeHandler(e.target.value)}
                    />
                    <textarea className='note' value={content} onChange={e => typing(e.target.value)} ></textarea>
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

