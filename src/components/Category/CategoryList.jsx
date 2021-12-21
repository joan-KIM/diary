import React from "react";
import CategoryLabel from "./CategoryLabel";

export default function CategoryList({labels}) {
    console.log(labels);
    const labelList = labels.map( label => <CategoryLabel name={label.name} />);

    return(
        <ul className='category-list' >
            {labelList}
        </ul>
    )
}
