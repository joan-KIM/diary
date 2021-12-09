import React from "react";
import { MdAdd, MdClear } from "react-icons/md";
import classNames from "classnames";

export default function Category(){
    return (
        <div className='category-section' >
            <div className='category-wrapper' >
                <div className='category-header' >
                    <p style={{margin: '0'}}>CALENDARS</p>
                    <MdAdd className='add-calendar-btn' />
                </div>
                
                <ul className='category-list' >
                    <li>
                        <label className={classNames('bullet-styling', 'bullet', 'bullet-default')} />
                        Personal(default)
                        <MdClear className='delete-category-btn' />
                    </li>
                    <li>    
                        <label className={classNames('bullet-styling', 'bullet', 'bullet-family')} />
                        Family
                        <MdClear className='delete-category-btn' />
                    </li>
                </ul>
            </div>
        </div>
    )
}