import React from "react";
import CategoryLabel from "./CategoryLabel";
import classNames from "classnames";

export default function CategoryList({labels, removeCalendar}) {

    console.log(labels);
    const labelList = labels.map( label => {
            return (
                <CategoryLabel name={label.name} bulletColor={label.color} removeCalendar={removeCalendar} isShown={labels.length > 1} />
            )
    });

    return(
        <ul className='category-list' >
            {labelList}
        </ul>
    )
}
