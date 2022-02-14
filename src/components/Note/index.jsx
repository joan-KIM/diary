import React, { useContext, useState } from "react";
import {MdModeEdit, MdDone} from "react-icons/md"; 
import { StoreContext } from "../../store/Store";

export default function Note(){
    const {dailyData: {note:{title, content}},updateNote} = useContext(StoreContext);
    const [isEditing, setIsEditing] = useState(!title);
    
    const toggleHandler = () => {
        setIsEditing(!isEditing);
    }
    
    return (
        <div className='note-section' >
            <div className='note-container' >
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
                            onChange={e => updateNote({title: e.target.value, content}) }
                        />
                        <textarea className='note' value={content} onChange={e => updateNote({content: e.target.value, title})} ></textarea>
                    </>
                    :
                    <>
                        <p className='title'>{title}</p>
                        <div className='content'> {content}</div>
                    </>
                }
            </div>
        </div> 
    )
}

