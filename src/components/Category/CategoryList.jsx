import React from "react";
import CategoryLabel from "./CategoryLabel";
import classNames from "classnames";

export default function CategoryList({labels, removeCalendar}) {
    console.log(labels);
    const labelList = labels.map( label => {
        if (label.name === 'Personal'){
            return (
                <li className='category-label' key='#7367f0' >    
                    <label className={classNames('bullet-styling', 'bullet', 'bullet-default')} />
                    Personal
                </li>
            )
        } else {
            return (
                <CategoryLabel name={label.name} bulletColor={label.color} removeCalendar={removeCalendar} />
            )
        }
    });

    return(
        <ul className='category-list' >
            {labelList}
        </ul>
    )
}
