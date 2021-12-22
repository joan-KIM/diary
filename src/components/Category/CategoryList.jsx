import React from "react";
import CategoryLabel from "./CategoryLabel";
import classNames from "classnames";

export default function CategoryList({labels}) {
    console.log(labels);
    const labelList = labels.map( label => {
        if (label.name === 'Personal'){
            return (
                <li className='category-label'>    
                    <label className={classNames('bullet-styling', 'bullet', 'bullet-default')} />
                    Personal
                </li>
            )
        } else {
            return (
                <CategoryLabel name={label.name} bulletColor={label.color} />
            )
        }
    });

    return(
        <ul className='category-list' >
            {labelList}
        </ul>
    )
}
