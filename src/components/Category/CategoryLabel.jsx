import React from "react";
import classNames from "classnames";
import { MdClear } from "react-icons/md";

export default function CategoryLabel({name, bulletColor, removeCalendar}) {
    return(
        <li key={bulletColor} className='category-label' >
            <label 
                className={classNames('bullet-styling', 'bullet')} 
                style={ { backgroundColor: bulletColor } }
            />
            {name}
            <MdClear className='delete-category-btn' onClick={e => removeCalendar(bulletColor)} />
        </li>
    )
}
