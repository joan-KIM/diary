import React from "react";
import { MdAdd, MdClear, MdCheck } from "react-icons/md";
import classNames from "classnames";

export default function Category(){

    return (
        <div className='category-section' >
            <div className='category-wrapper' >
                <div className='category-header' >
                    <p style={{margin: '0'}}>CALENDARS</p>
                    <MdAdd className='show-inputgroup-btn'  />
                </div>
                
                <ul className='category-list' >
                    <li>
                        <label className={classNames('bullet-styling', 'bullet', 'bullet-default')} />
                        Personal(default)
                    </li>
                    <li>    
                        <label className={classNames('bullet-styling', 'bullet', 'bullet-family')} />
                        Family
                        <MdClear className='delete-category-btn' />
                    </li>
                </ul>

                <div className="category-input-wrapper">
                    <div className='category-input-group'>
                        <input type='text' className='category-input' placeholder='New Calendar' />
                        <div className='add-calendar-btn'>
                            <MdCheck className='add-btn-mark' />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}