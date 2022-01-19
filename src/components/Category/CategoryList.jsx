import React from "react";
import CategoryLabel from "./CategoryLabel";

export default function CategoryList({labels, removeCalendar}) {
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
