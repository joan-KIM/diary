import React from "react";
import classNames from "classnames";
import { MdClear } from "react-icons/md";

export default function CategoryLabel({name, bulletColor, removeCalendar, isShown}) {
    return(
        <li key={bulletColor} className='category-label' >
            <label 
                className={classNames('bullet-styling', 'bullet')} 
                style={ { backgroundColor: bulletColor } }
            />
            {name}
            { isShown && <MdClear className='delete-category-btn' onClick={e => removeCalendar(bulletColor)} />}
        </li>
    )
}
