import React, { useContext } from "react";
import classNames from "classnames";
import { MdClear } from "react-icons/md";
import { CategoryContext } from "../../store/CategoryStore";

export default function CategoryLabel({name, bulletColor, isShown}) {
    const {removeLabel} = useContext(CategoryContext);
    return(
        <li key={bulletColor} className='category-label' >
            <label 
                className={classNames('bullet-styling', 'bullet')} 
                style={ { backgroundColor: bulletColor } }
            />
            {name}
            { isShown && <MdClear className='delete-category-btn' onClick={e => removeLabel(bulletColor)} />}
        </li>
    )
}
