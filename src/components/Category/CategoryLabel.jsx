import React from "react";
import classNames from "classnames";
import { MdClear } from "react-icons/md";

export default function CategoryLabel({name}) {
    return(
        <li>    
            <label className={classNames('bullet-styling', 'bullet', 'bullet-default')} />
            {name}
            <MdClear className='delete-category-btn' />
        </li>
    )
}
