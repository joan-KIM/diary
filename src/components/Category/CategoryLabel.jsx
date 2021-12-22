import React from "react";
import classNames from "classnames";
import { MdClear } from "react-icons/md";

export default function CategoryLabel({name, bulletColor}) {
    console.log(name, bulletColor);
    return(
        <li className='category-label'>    
            <label 
                className={classNames('bullet-styling', 'bullet')} 
                style={ { backgroundColor: bulletColor } }
            />
            {name}
            <MdClear className='delete-category-btn' />
        </li>
    )
}
