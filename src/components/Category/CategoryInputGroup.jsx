import React from "react";
import {MdCheck} from "react-icons/md";

export default function CategoryInputGroup(){
    return(
        <div className="category-input-wrapper">
            <div className='category-input-group'>
                <input type='text' className='category-input' placeholder='New Calendar' />
                <div className='add-calendar-btn'>
                    <MdCheck className='add-btn-mark' />
                </div>
            </div>
        </div>
    )
}
