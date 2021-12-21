import React, { useState } from "react";
import { MdAdd, MdClear } from "react-icons/md";
import classNames from "classnames";
import CategoryInputGroup from "./CategoryInputGroup";

export default function Category(){
    const [isShown, setIsShown] = useState(false);

    const toggleHandler = (e) => {
        setIsShown(!isShown);
    }

    return (
        <div className='category-section' >
            <div className='category-wrapper' >
                <div className='category-header' >
                    <p style={{margin: '0'}}>CALENDARS</p>
                    <MdAdd className='show-inputgroup-btn' onClick={e => toggleHandler(e)} />
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

                { isShown && <CategoryInputGroup /> }
                
            </div>
        </div>
    )
}